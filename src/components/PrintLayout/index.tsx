import React, {useEffect} from 'react';
import Layout from '@theme/Layout';
import styles from '@site/src/pages/print/styles.module.css';

interface PrintSectionProps {
  children: React.ReactNode;
}

export function PrintSection({children}: PrintSectionProps): React.JSX.Element {
  return (
    <section className={`${styles.instancia} markdown`}>
      {children}
    </section>
  );
}

interface PrintLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function PrintLayout({title, children}: PrintLayoutProps): React.JSX.Element {
  useEffect(() => {
    const t = setTimeout(() => window.print(), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <Layout title={title} noFooter>
      <main className="container margin-vert--lg">
        {children}
      </main>
    </Layout>
  );
}
