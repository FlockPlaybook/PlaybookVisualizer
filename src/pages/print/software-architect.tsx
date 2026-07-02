import React from 'react';
import PrintLayout, {PrintSection} from '@site/src/components/PrintLayout';

// Instancia 1
import I1D from '@site/docs/software-architect/instancia-1/descriptor.md';
import I1a from '@site/docs/software-architect/instancia-1/diseno-implementacion.mdx';
import I1b from '@site/docs/software-architect/instancia-1/calidad-entregables.mdx';
import I1c from '@site/docs/software-architect/instancia-1/metodologia.mdx';
import I1d from '@site/docs/software-architect/instancia-1/desarrollo-profesional.mdx';
import I1e from '@site/docs/software-architect/instancia-1/servicio.mdx';

// Instancia 2
import I2D from '@site/docs/software-architect/instancia-2/descriptor.md';
import I2a from '@site/docs/software-architect/instancia-2/diseno-implementacion.mdx';
import I2b from '@site/docs/software-architect/instancia-2/calidad-entregables.mdx';
import I2c from '@site/docs/software-architect/instancia-2/metodologia.mdx';
import I2d from '@site/docs/software-architect/instancia-2/desarrollo-profesional.mdx';
import I2e from '@site/docs/software-architect/instancia-2/servicio.mdx';

// Instancia 3
import I3D from '@site/docs/software-architect/instancia-3/descriptor.md';
import I3a from '@site/docs/software-architect/instancia-3/diseno-implementacion.mdx';
import I3b from '@site/docs/software-architect/instancia-3/calidad-entregables.mdx';
import I3c from '@site/docs/software-architect/instancia-3/metodologia.mdx';
import I3d from '@site/docs/software-architect/instancia-3/desarrollo-profesional.mdx';
import I3e from '@site/docs/software-architect/instancia-3/servicio.mdx';

// Instancia 4
import I4D from '@site/docs/software-architect/instancia-4/descriptor.md';
import I4a from '@site/docs/software-architect/instancia-4/diseno-implementacion.mdx';
import I4b from '@site/docs/software-architect/instancia-4/calidad-entregables.mdx';
import I4c from '@site/docs/software-architect/instancia-4/metodologia.mdx';
import I4d from '@site/docs/software-architect/instancia-4/desarrollo-profesional.mdx';
import I4e from '@site/docs/software-architect/instancia-4/servicio.mdx';

export default function SoftwareArchitectPrint(): React.JSX.Element {
  return (
    <PrintLayout title="Playbook — Software Architect">
      <PrintSection>
        <I1D /><I1a /><I1b /><I1c /><I1d /><I1e />
      </PrintSection>
      <PrintSection>
        <I2D /><I2a /><I2b /><I2c /><I2d /><I2e />
      </PrintSection>
      <PrintSection>
        <I3D /><I3a /><I3b /><I3c /><I3d /><I3e />
      </PrintSection>
      <PrintSection>
        <I4D /><I4a /><I4b /><I4c /><I4d /><I4e />
      </PrintSection>
    </PrintLayout>
  );
}
