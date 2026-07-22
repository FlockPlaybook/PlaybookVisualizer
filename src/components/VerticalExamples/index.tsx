import React, {type ReactNode, useId, useState} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

interface VerticalExamplesProps {
  children: ReactNode;
  /** Header label. Defaults to the playbook's wording. */
  title?: string;
}

/**
 * Collapsible section that holds the "Ejemplos por vertical de investigación"
 * for a responsibility. Each research vertical (immersive/avatars, computer
 * vision, robotics, multi-agent, commercial products) lives inside as plain
 * MDX markdown, so authoring stays close to the Excel source of truth while the
 * component owns presentation and accessibility.
 *
 * Closed by default: the verticals illustrate the responsibility but should not
 * compete with the primary description and examples above them.
 */
export default function VerticalExamples({
  children,
  title = 'Ejemplos por vertical de investigación',
}: VerticalExamplesProps): ReactNode {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <section className={clsx(styles.wrapper, open && styles.wrapperOpen)}>
      <button
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={styles.mark} aria-hidden="true" />
        <span className={styles.label}>{title}</span>
        <svg
          className={styles.chevron}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        id={panelId}
        className={styles.panelOuter}
        role="region"
        aria-label={title}
        aria-hidden={!open}
      >
        <div className={styles.panelInner}>{children}</div>
      </div>
    </section>
  );
}
