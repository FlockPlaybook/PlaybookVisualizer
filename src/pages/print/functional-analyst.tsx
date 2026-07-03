import React from 'react';
import PrintLayout, {PrintSection} from '@site/src/components/PrintLayout';

// Instancia 1 (5 files — desarrollo-profesional absent)
import I1D from '@site/docs/functional-analyst/instancia-1/descriptor.md';
import I1a from '@site/docs/functional-analyst/instancia-1/analisis-diseno.mdx';
import I1b from '@site/docs/functional-analyst/instancia-1/conocimiento-negocio.mdx';
import I1c from '@site/docs/functional-analyst/instancia-1/metodologias.mdx';
import I1d from '@site/docs/functional-analyst/instancia-1/servicio.mdx';

// Instancia 2 (6 files — desarrollo-profesional present from I2+)
import I2D from '@site/docs/functional-analyst/instancia-2/descriptor.md';
import I2a from '@site/docs/functional-analyst/instancia-2/analisis-diseno.mdx';
import I2b from '@site/docs/functional-analyst/instancia-2/conocimiento-negocio.mdx';
import I2c from '@site/docs/functional-analyst/instancia-2/metodologias.mdx';
import I2d from '@site/docs/functional-analyst/instancia-2/servicio.mdx';
import I2e from '@site/docs/functional-analyst/instancia-2/desarrollo-profesional.mdx';

// Instancia 3 (6 files)
import I3D from '@site/docs/functional-analyst/instancia-3/descriptor.md';
import I3a from '@site/docs/functional-analyst/instancia-3/analisis-diseno.mdx';
import I3b from '@site/docs/functional-analyst/instancia-3/conocimiento-negocio.mdx';
import I3c from '@site/docs/functional-analyst/instancia-3/metodologias.mdx';
import I3d from '@site/docs/functional-analyst/instancia-3/servicio.mdx';
import I3e from '@site/docs/functional-analyst/instancia-3/desarrollo-profesional.mdx';

export default function FunctionalAnalystPrint(): React.JSX.Element {
  return (
    <PrintLayout title="Playbook — Functional Analyst">
      <PrintSection>
        <I1D /><I1a /><I1b /><I1c /><I1d />
      </PrintSection>
      <PrintSection>
        <I2D /><I2a /><I2b /><I2c /><I2d /><I2e />
      </PrintSection>
      <PrintSection>
        <I3D /><I3a /><I3b /><I3c /><I3d /><I3e />
      </PrintSection>
    </PrintLayout>
  );
}
