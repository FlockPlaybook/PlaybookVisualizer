import React from 'react';
import PrintLayout, {PrintSection} from '@site/src/components/PrintLayout';

// Instancia 1 (7 files)
import I1D from '@site/docs/team-manager/instancia-1/descriptor.md';
import I1a from '@site/docs/team-manager/instancia-1/metodologia.mdx';
import I1b from '@site/docs/team-manager/instancia-1/gestion-proyecto.mdx';
import I1c from '@site/docs/team-manager/instancia-1/liderazgo-equipo.mdx';
import I1d from '@site/docs/team-manager/instancia-1/servicio.mdx';
import I1e from '@site/docs/team-manager/instancia-1/desarrollo-profesional.mdx';
import I1f from '@site/docs/team-manager/instancia-1/comunicacion-stakeholders.mdx';

// Instancia 2 (7 files)
import I2D from '@site/docs/team-manager/instancia-2/descriptor.md';
import I2a from '@site/docs/team-manager/instancia-2/metodologia.mdx';
import I2b from '@site/docs/team-manager/instancia-2/gestion-proyecto.mdx';
import I2c from '@site/docs/team-manager/instancia-2/liderazgo-equipo.mdx';
import I2d from '@site/docs/team-manager/instancia-2/servicio.mdx';
import I2e from '@site/docs/team-manager/instancia-2/desarrollo-profesional.mdx';
import I2f from '@site/docs/team-manager/instancia-2/comunicacion-stakeholders.mdx';

// Instancia 3 (7 files)
import I3D from '@site/docs/team-manager/instancia-3/descriptor.md';
import I3a from '@site/docs/team-manager/instancia-3/metodologia.mdx';
import I3b from '@site/docs/team-manager/instancia-3/gestion-proyecto.mdx';
import I3c from '@site/docs/team-manager/instancia-3/liderazgo-equipo.mdx';
import I3d from '@site/docs/team-manager/instancia-3/servicio.mdx';
import I3e from '@site/docs/team-manager/instancia-3/desarrollo-profesional.mdx';
import I3f from '@site/docs/team-manager/instancia-3/comunicacion-stakeholders.mdx';

// Instancia 4 (7 files)
import I4D from '@site/docs/team-manager/instancia-4/descriptor.md';
import I4a from '@site/docs/team-manager/instancia-4/metodologia.mdx';
import I4b from '@site/docs/team-manager/instancia-4/gestion-proyecto.mdx';
import I4c from '@site/docs/team-manager/instancia-4/liderazgo-equipo.mdx';
import I4d from '@site/docs/team-manager/instancia-4/servicio.mdx';
import I4e from '@site/docs/team-manager/instancia-4/desarrollo-profesional.mdx';
import I4f from '@site/docs/team-manager/instancia-4/comunicacion-stakeholders.mdx';

// Instancia 5 (7 files)
import I5D from '@site/docs/team-manager/instancia-5/descriptor.md';
import I5a from '@site/docs/team-manager/instancia-5/metodologia.mdx';
import I5b from '@site/docs/team-manager/instancia-5/gestion-proyecto.mdx';
import I5c from '@site/docs/team-manager/instancia-5/liderazgo-equipo.mdx';
import I5d from '@site/docs/team-manager/instancia-5/servicio.mdx';
import I5e from '@site/docs/team-manager/instancia-5/desarrollo-profesional.mdx';
import I5f from '@site/docs/team-manager/instancia-5/comunicacion-stakeholders.mdx';

// Instancia 6 (7 files)
import I6D from '@site/docs/team-manager/instancia-6/descriptor.md';
import I6a from '@site/docs/team-manager/instancia-6/metodologia.mdx';
import I6b from '@site/docs/team-manager/instancia-6/gestion-proyecto.mdx';
import I6c from '@site/docs/team-manager/instancia-6/liderazgo-equipo.mdx';
import I6d from '@site/docs/team-manager/instancia-6/servicio.mdx';
import I6e from '@site/docs/team-manager/instancia-6/desarrollo-profesional.mdx';
import I6f from '@site/docs/team-manager/instancia-6/comunicacion-stakeholders.mdx';

export default function TeamManagerPrint(): React.JSX.Element {
  return (
    <PrintLayout title="Playbook — Team Manager">
      <PrintSection>
        <I1D /><I1a /><I1b /><I1c /><I1d /><I1e /><I1f />
      </PrintSection>
      <PrintSection>
        <I2D /><I2a /><I2b /><I2c /><I2d /><I2e /><I2f />
      </PrintSection>
      <PrintSection>
        <I3D /><I3a /><I3b /><I3c /><I3d /><I3e /><I3f />
      </PrintSection>
      <PrintSection>
        <I4D /><I4a /><I4b /><I4c /><I4d /><I4e /><I4f />
      </PrintSection>
      <PrintSection>
        <I5D /><I5a /><I5b /><I5c /><I5d /><I5e /><I5f />
      </PrintSection>
      <PrintSection>
        <I6D /><I6a /><I6b /><I6c /><I6d /><I6e /><I6f />
      </PrintSection>
    </PrintLayout>
  );
}
