import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

type Role = {
  label: string;
  description: string;
  to: string;
};

// Entry point per role: each links to the first instancia's descriptor.
// Kept in sync with the active playbook roles (quality-automation and
// infrastructure are excluded from the build in docusaurus.config.ts).
const ROLES: Role[] = [
  {
    label: 'Software Engineer',
    description: 'Desarrollo de software, del código a la entrega.',
    to: '/software-engineer/instancia-1/descriptor',
  },
  {
    label: 'Software Architect',
    description: 'Arquitectura y decisiones técnicas transversales.',
    to: '/software-architect/instancia-1/descriptor',
  },
  {
    label: 'QA Analyst',
    description: 'Calidad, verificación y reporte de producto.',
    to: '/qa/instancia-1/descriptor',
  },
  {
    label: 'Functional Analyst',
    description: 'Análisis funcional y relevamiento de requerimientos.',
    to: '/functional-analyst/instancia-1/descriptor',
  },
  {
    label: 'UX/UI Designer',
    description: 'Diseño de experiencia e interfaz de producto.',
    to: '/disenio-ux-ui/instancia-1/descriptor',
  },
  {
    label: 'I+D Analyst',
    description: 'Investigación y desarrollo de nuevas soluciones.',
    to: '/research-and-development/instancia-1/descriptor',
  },
  {
    label: 'Team Manager',
    description: 'Liderazgo de equipos y gestión de personas.',
    to: '/team-manager/instancia-1/descriptor',
  },
];

function RoleCard({label, description, to}: Role) {
  return (
    <Link className={styles.card} to={to}>
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

export default function Home() {
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
          {ROLES.map((role) => (
            <RoleCard key={role.to} {...role} />
          ))}
        </section>
      </main>
    </Layout>
  );
}
