import React from 'react';
import PrintLayout, {PrintSection} from '@site/src/components/PrintLayout';

// Instancia 1 (5 files)
import I1D from '@site/docs/software-engineer/instancia-1/descriptor.md';
import I1a from '@site/docs/software-engineer/instancia-1/disenio.mdx';
import I1b from '@site/docs/software-engineer/instancia-1/calidad.mdx';
import I1c from '@site/docs/software-engineer/instancia-1/metodologias.mdx';
import I1d from '@site/docs/software-engineer/instancia-1/servicio.mdx';

// Instancia 2 (5 files)
import I2D from '@site/docs/software-engineer/instancia-2/descriptor.md';
import I2a from '@site/docs/software-engineer/instancia-2/disenio.mdx';
import I2b from '@site/docs/software-engineer/instancia-2/calidad.mdx';
import I2c from '@site/docs/software-engineer/instancia-2/metodologias.mdx';
import I2d from '@site/docs/software-engineer/instancia-2/servicio.mdx';

// Instancia 3 (5 files)
import I3D from '@site/docs/software-engineer/instancia-3/descriptor.md';
import I3a from '@site/docs/software-engineer/instancia-3/disenio.mdx';
import I3b from '@site/docs/software-engineer/instancia-3/calidad.mdx';
import I3c from '@site/docs/software-engineer/instancia-3/metodologias.mdx';
import I3d from '@site/docs/software-engineer/instancia-3/servicio.mdx';

// Instancia 4 (5 files)
import I4D from '@site/docs/software-engineer/instancia-4/descriptor.md';
import I4a from '@site/docs/software-engineer/instancia-4/disenio.mdx';
import I4b from '@site/docs/software-engineer/instancia-4/calidad.mdx';
import I4c from '@site/docs/software-engineer/instancia-4/metodologias.mdx';
import I4d from '@site/docs/software-engineer/instancia-4/servicio.mdx';

// Instancia 5 (6 files — desarrollo present from I5+)
import I5D from '@site/docs/software-engineer/instancia-5/descriptor.md';
import I5a from '@site/docs/software-engineer/instancia-5/disenio.mdx';
import I5b from '@site/docs/software-engineer/instancia-5/calidad.mdx';
import I5c from '@site/docs/software-engineer/instancia-5/metodologias.mdx';
import I5e from '@site/docs/software-engineer/instancia-5/desarrollo.mdx';
import I5d from '@site/docs/software-engineer/instancia-5/servicio.mdx';

// Instancia 6 (6 files)
import I6D from '@site/docs/software-engineer/instancia-6/descriptor.md';
import I6a from '@site/docs/software-engineer/instancia-6/disenio.mdx';
import I6b from '@site/docs/software-engineer/instancia-6/calidad.mdx';
import I6c from '@site/docs/software-engineer/instancia-6/metodologias.mdx';
import I6e from '@site/docs/software-engineer/instancia-6/desarrollo.mdx';
import I6d from '@site/docs/software-engineer/instancia-6/servicio.mdx';

// Instancia 7 (6 files)
import I7D from '@site/docs/software-engineer/instancia-7/descriptor.md';
import I7a from '@site/docs/software-engineer/instancia-7/disenio.mdx';
import I7b from '@site/docs/software-engineer/instancia-7/calidad.mdx';
import I7c from '@site/docs/software-engineer/instancia-7/metodologias.mdx';
import I7e from '@site/docs/software-engineer/instancia-7/desarrollo.mdx';
import I7d from '@site/docs/software-engineer/instancia-7/servicio.mdx';

export default function SoftwareEngineerPrint(): React.JSX.Element {
  return (
    <PrintLayout title="Playbook — Software Engineer">
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
      <PrintSection>
        <I5D /><I5a /><I5b /><I5c /><I5e /><I5d />
      </PrintSection>
      <PrintSection>
        <I6D /><I6a /><I6b /><I6c /><I6e /><I6d />
      </PrintSection>
      <PrintSection>
        <I7D /><I7a /><I7b /><I7c /><I7e /><I7d />
      </PrintSection>
    </PrintLayout>
  );
}
