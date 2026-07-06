import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import type {InstanciaNav} from '@site/src/lib/buildInstanciaNav';
import styles from './index.module.css';

type IconKey =
  | 'code'
  | 'layers'
  | 'search'
  | 'clipboard'
  | 'frame'
  | 'flask'
  | 'users';

type Role = {
  label: string;
  description: string;
  to: string;
  icon: IconKey;
};

// Entry point per role: each links to the first instancia's descriptor.
// Kept in sync with the active playbook roles (quality-automation and
// infrastructure are excluded from the build in docusaurus.config.ts).
const ROLES: Role[] = [
  {
    label: 'Software Engineer',
    description: 'Desarrollo de software, del código a la entrega.',
    to: '/software-engineer/instancia-1/descriptor',
    icon: 'code',
  },
  {
    label: 'Software Architect',
    description: 'Arquitectura y decisiones técnicas transversales.',
    to: '/software-architect/instancia-1/descriptor',
    icon: 'layers',
  },
  {
    label: 'QA Analyst',
    description: 'Calidad, verificación y reporte de producto.',
    to: '/qa/instancia-1/descriptor',
    icon: 'search',
  },
  {
    label: 'Functional Analyst',
    description: 'Análisis funcional y relevamiento de requerimientos.',
    to: '/functional-analyst/instancia-1/descriptor',
    icon: 'clipboard',
  },
  {
    label: 'UX/UI Designer',
    description: 'Diseño de experiencia e interfaz de producto.',
    to: '/disenio-ux-ui/instancia-1/descriptor',
    icon: 'frame',
  },
  {
    label: 'I+D Analyst',
    description: 'Investigación y desarrollo de nuevas soluciones.',
    to: '/research-and-development/instancia-1/descriptor',
    icon: 'flask',
  },
  {
    label: 'Team Manager',
    description: 'Liderazgo de equipos y gestión de personas.',
    to: '/team-manager/instancia-1/descriptor',
    icon: 'users',
  },
];

// Line icons (Lucide-style) rendered with currentColor so they inherit the
// amber accent. One per role for quick scanning.
const ICON_PATHS: Record<IconKey, ReactNode> = {
  code: <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />,
  layers: (
    <>
      <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
      <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
  clipboard: (
    <>
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4M12 16h4M8 11h.01M8 16h.01" />
    </>
  ),
  frame: (
    <>
      <line x1="22" x2="2" y1="6" y2="6" />
      <line x1="22" x2="2" y1="18" y2="18" />
      <line x1="6" x2="6" y1="2" y2="22" />
      <line x1="18" x2="18" y1="2" y2="22" />
    </>
  ),
  flask: (
    <>
      <path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2" />
      <path d="M8.5 2h7M7 16h10" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
};

function RoleIcon({icon}: {icon: IconKey}): ReactNode {
  return (
    <svg
      className={styles.cardIcon}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      {ICON_PATHS[icon]}
    </svg>
  );
}

function RoleCard({label, description, to, icon, instancias}: Role & {instancias?: number}): ReactNode {
  return (
    <Link className={styles.card} to={to}>
      <div className={styles.cardHead}>
        <span className={styles.cardIconChip}>
          <RoleIcon icon={icon} />
        </span>
        {instancias ? (
          <span className={styles.cardBadge}>{instancias} instancias</span>
        ) : null}
      </div>
      <Heading as="h3" className={styles.cardTitle}>
        {label}
      </Heading>
      <p className={styles.cardDescription}>{description}</p>
      <span className={styles.cardArrow} aria-hidden="true">
        →
      </span>
    </Link>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const nav = siteConfig.customFields?.instanciaNav as InstanciaNav | undefined;

  return (
    <Layout description="Roles y responsabilidades de Flock Tech por instancia de carrera.">
      <header className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <p className={styles.heroKicker}>Flock Tech · Playbook</p>
          <Heading as="h1" className={styles.heroTitle}>
            Playbook Visualizer
          </Heading>
          <p className={styles.heroSubtitle}>
            Roles y responsabilidades de Flock Tech. Elegí un rol para explorar
            cómo evoluciona su carrera, instancia por instancia.
          </p>
        </div>
      </header>
      <main className="container">
        <section className={styles.grid}>
          {ROLES.map((role) => {
            const roleKey = role.to.split('/')[1];
            return (
              <RoleCard
                key={role.to}
                {...role}
                instancias={nav?.[roleKey]?.max}
              />
            );
          })}
        </section>
      </main>
    </Layout>
  );
}
