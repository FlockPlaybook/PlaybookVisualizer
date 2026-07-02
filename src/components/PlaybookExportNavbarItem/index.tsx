import React from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';

const ACTIVE_ROLES = new Set([
  'software-engineer',
  'software-architect',
  'qa',
  'functional-analyst',
  'team-manager',
  'disenio-ux-ui',
]);

export default function PlaybookExportNavbarItem(): React.JSX.Element | null {
  const {pathname} = useLocation();
  const base = useBaseUrl('/'); // '/' on Vercel, '/PlaybookVisualizer/' on GH Pages

  const rel = pathname.startsWith(base)
    ? pathname.slice(base.length)
    : pathname.replace(/^\//, '');

  const role = rel.split('/').filter(Boolean)[0];

  if (!role || !ACTIVE_ROLES.has(role)) {
    return null;
  }

  return (
    <Link
      className="navbar__item navbar__link"
      to={`/print/${role}`}
      title="Exportar playbook completo a PDF"
    >
      Exportar PDF
    </Link>
  );
}
