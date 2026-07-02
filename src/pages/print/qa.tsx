import React from 'react';
import PrintLayout, {PrintSection} from '@site/src/components/PrintLayout';

// Instancia 1 (5 files)
import I1D from '@site/docs/qa/instancia-1/descriptor.md';
import I1a from '@site/docs/qa/instancia-1/analisis-definicion.mdx';
import I1b from '@site/docs/qa/instancia-1/verificacion-reporte.mdx';
import I1c from '@site/docs/qa/instancia-1/metodologias.mdx';
import I1d from '@site/docs/qa/instancia-1/servicio.mdx';

// Instancia 2 (5 files)
import I2D from '@site/docs/qa/instancia-2/descriptor.md';
import I2a from '@site/docs/qa/instancia-2/analisis-definicion.mdx';
import I2b from '@site/docs/qa/instancia-2/verificacion-reporte.mdx';
import I2c from '@site/docs/qa/instancia-2/metodologias.mdx';
import I2d from '@site/docs/qa/instancia-2/servicio.mdx';

// Instancia 3 (5 files)
import I3D from '@site/docs/qa/instancia-3/descriptor.md';
import I3a from '@site/docs/qa/instancia-3/analisis-definicion.mdx';
import I3b from '@site/docs/qa/instancia-3/verificacion-reporte.mdx';
import I3c from '@site/docs/qa/instancia-3/metodologias.mdx';
import I3d from '@site/docs/qa/instancia-3/servicio.mdx';

// Instancia 4 (5 files)
import I4D from '@site/docs/qa/instancia-4/descriptor.md';
import I4a from '@site/docs/qa/instancia-4/analisis-definicion.mdx';
import I4b from '@site/docs/qa/instancia-4/verificacion-reporte.mdx';
import I4c from '@site/docs/qa/instancia-4/metodologias.mdx';
import I4d from '@site/docs/qa/instancia-4/servicio.mdx';

export default function QAPrint(): React.JSX.Element {
  return (
    <PrintLayout title="Playbook — QA">
      <PrintSection>
        <I1D /><I1a /><I1b /><I1c /><I1d />
      </PrintSection>
      <PrintSection>
        <I2D /><I2a /><I2b /><I2c /><I2d />
      </PrintSection>
      <PrintSection>
        <I3D /><I3a /><I3b /><I3c /><I3d />
      </PrintSection>
      <PrintSection>
        <I4D /><I4a /><I4b /><I4c /><I4d />
      </PrintSection>
    </PrintLayout>
  );
}
