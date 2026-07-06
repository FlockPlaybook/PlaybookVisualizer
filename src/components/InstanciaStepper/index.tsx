import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import type {InstanciaNav} from '@site/src/lib/buildInstanciaNav';
import styles from './styles.module.css';

const ROUTE = /^\/([^/]+)\/instancia-(\d+)\/([^/]+)$/;

interface CurrentRoute {
  role: string;
  n: number;
  lastSegment: string;
}

function parseRoute(pathname: string, baseUrl: string): CurrentRoute | null {
  const relative = ('/' + pathname.slice(baseUrl.length)).replace(/\/+$/, '');
  const match = relative.match(ROUTE);
  if (!match) return null;
  return {role: match[1], n: Number(match[2]), lastSegment: match[3]};
}

/**
 * Horizontal stepper that lets the reader jump between the instancias of a role
 * while staying on the same responsibility. When the current responsibility does
 * not exist at a target level (only "Desarrollo profesional", which starts
 * mid-career by design) the step is dimmed and falls back to that instancia's
 * descriptor, so navigation never breaks.
 */
export default function InstanciaStepper(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const {pathname} = useLocation();

  const nav = siteConfig.customFields?.instanciaNav as InstanciaNav | undefined;
  const current = nav ? parseRoute(pathname, siteConfig.baseUrl) : null;
  if (!nav || !current) return null;

  const roleNav = nav[current.role];
  if (!roleNav) return null;

  const currentStep = roleNav.steps.find((step) => step.n === current.n);
  const currentStem =
    current.lastSegment === 'descriptor'
      ? 'descriptor'
      : currentStep
        ? Object.keys(currentStep.cats).find((stem) =>
            currentStep.cats[stem].endsWith(`/${current.lastSegment}`),
          ) ?? null
        : null;

  if (!currentStem) return null;

  const toHref = (route: string): string =>
    siteConfig.baseUrl.replace(/\/$/, '') + route;

  // Every stem — including 'descriptor' — links to its comparativa when one exists.
  const comparativaRoute = roleNav.comparativas?.[currentStem];

  return (
    <nav
      className={styles.stepper}
      aria-label={`Instancias de ${roleNav.label}`}
      data-print-hide>
      <span className={styles.caption}>
        {roleNav.label}
        <span className={styles.captionLevel}>
          Instancia {current.n} de {roleNav.max}
        </span>
      </span>
      <ol className={styles.track}>
        {roleNav.steps.map((step) => {
          const applies =
            currentStem === 'descriptor' || Boolean(step.cats[currentStem]);

          // Levels where the current responsibility does not exist are dimmed
          // and non-interactive — the responsibility genuinely does not apply
          // there (only "Desarrollo profesional", which starts mid-career).
          if (!applies) {
            return (
              <li key={step.n} className={styles.item}>
                <span
                  className={clsx(styles.step, styles.muted)}
                  aria-disabled="true"
                  title={`Instancia ${step.n} — esta responsabilidad no aplica en este nivel`}>
                  {step.n}
                </span>
              </li>
            );
          }

          const target =
            currentStem === 'descriptor'
              ? step.descriptor
              : step.cats[currentStem];
          const active = step.n === current.n;

          return (
            <li key={step.n} className={styles.item}>
              <Link
                to={toHref(target)}
                className={clsx(styles.step, active && styles.active)}
                aria-current={active ? 'step' : undefined}
                title={`Instancia ${step.n}`}>
                {step.n}
              </Link>
            </li>
          );
        })}
      </ol>
      {comparativaRoute && (
        <Link
          to={toHref(comparativaRoute)}
          className={styles.compare}
          title="Compará esta responsabilidad en todas las instancias">
          Ver comparativa <span aria-hidden="true">→</span>
        </Link>
      )}
    </nav>
  );
}
