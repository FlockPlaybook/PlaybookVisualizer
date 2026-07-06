// Build-time scanner (runs in Node during Docusaurus config load).
//
// Walks the `docs/` tree and produces a per-role navigation map used by the
// <InstanciaStepper> component to jump between instancias while keeping the
// current responsibility ("categoría") in context. The map is exposed to the
// client through `siteConfig.customFields.instanciaNav`.
//
// Why a build-time map instead of a client-side URL rewrite: the doc `id`s are
// not perfectly uniform (e.g. `qa-i1-verificacion-reporte` uses `i1` instead of
// `instancia-1`) and some responsibilities do not exist at every level (only
// "Desarrollo profesional" — it starts mid-career by design), so a naive number
// swap would produce 404s. Scanning the real files avoids both problems.

import * as fs from 'node:fs';
import * as path from 'node:path';

export interface InstanciaStep {
  /** Instancia number (1-based). */
  n: number;
  /** Root-relative route to this instancia's descriptor (always exists). */
  descriptor: string;
  /** Category stem -> root-relative route, for the responsibilities present at this instancia. */
  cats: Record<string, string>;
}

export interface RoleNav {
  /** Human label, e.g. "Software Engineer". */
  label: string;
  /** Highest instancia number for the role. */
  max: number;
  /** Steps ordered 1..max. */
  steps: InstanciaStep[];
}

export type InstanciaNav = Record<string, RoleNav>;

const INSTANCIA_DIR = /^instancia-(\d+)$/;
const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---/;

function readField(frontmatter: string, field: string): string | null {
  const match = frontmatter.match(new RegExp(`^${field}:\\s*(.+)$`, 'm'));
  if (!match) return null;
  return match[1].trim().replace(/^['"]|['"]$/g, '');
}

/** Resolve the route segment Docusaurus assigns to a doc file (slug > id > filename stem). */
function routeSegment(filePath: string, stem: string): string {
  const raw = fs.readFileSync(filePath, 'utf8');
  const fm = raw.match(FRONTMATTER);
  if (fm) {
    const slug = readField(fm[1], 'slug');
    if (slug) return slug.replace(/^\//, '');
    const id = readField(fm[1], 'id');
    if (id) return id;
  }
  return stem;
}

function readRoleLabel(roleDir: string, fallback: string): string {
  const categoryFile = path.join(roleDir, '_category_.json');
  try {
    const json = JSON.parse(fs.readFileSync(categoryFile, 'utf8'));
    if (typeof json.label === 'string') return json.label;
  } catch {
    /* no _category_.json — fall back to the directory name */
  }
  return fallback;
}

export function buildInstanciaNav(docsDir = path.resolve(process.cwd(), 'docs')): InstanciaNav {
  const nav: InstanciaNav = {};

  for (const roleName of fs.readdirSync(docsDir)) {
    const roleDir = path.join(docsDir, roleName);
    if (!fs.statSync(roleDir).isDirectory()) continue;

    const instanciaDirs = fs
      .readdirSync(roleDir)
      .map((name) => ({name, match: name.match(INSTANCIA_DIR)}))
      .filter((entry) => entry.match)
      .map((entry) => ({name: entry.name, n: Number(entry.match![1])}))
      .sort((a, b) => a.n - b.n);

    if (instanciaDirs.length < 2) continue; // no stepper for single-instancia roles

    const steps: InstanciaStep[] = instanciaDirs.map(({name, n}) => {
      const instanciaDir = path.join(roleDir, name);
      const routeBase = `/${roleName}/${name}`;
      const cats: Record<string, string> = {};

      for (const file of fs.readdirSync(instanciaDir)) {
        if (!/\.mdx?$/.test(file)) continue;
        const stem = file.replace(/\.mdx?$/, '');
        if (stem === 'descriptor' || stem === '_category_') continue;
        const segment = routeSegment(path.join(instanciaDir, file), stem);
        cats[stem] = `${routeBase}/${segment}`;
      }

      return {n, descriptor: `${routeBase}/descriptor`, cats};
    });

    nav[roleName] = {
      label: readRoleLabel(roleDir, roleName),
      max: steps[steps.length - 1].n,
      steps,
    };
  }

  return nav;
}
