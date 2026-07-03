import React from 'react';
import PrintLayout, {PrintSection} from '@site/src/components/PrintLayout';

// Instancia 1 (5 files)
import I1D from '@site/docs/disenio-ux-ui/instancia-1/descriptor.md';
import I1a from '@site/docs/disenio-ux-ui/instancia-1/diseno-prototipos.mdx';
import I1b from '@site/docs/disenio-ux-ui/instancia-1/calidad-validacion.mdx';
import I1c from '@site/docs/disenio-ux-ui/instancia-1/estrategia-producto.mdx';
import I1d from '@site/docs/disenio-ux-ui/instancia-1/servicio.mdx';

// Instancia 2 (5 files)
import I2D from '@site/docs/disenio-ux-ui/instancia-2/descriptor.md';
import I2a from '@site/docs/disenio-ux-ui/instancia-2/diseno-prototipos.mdx';
import I2b from '@site/docs/disenio-ux-ui/instancia-2/calidad-validacion.mdx';
import I2c from '@site/docs/disenio-ux-ui/instancia-2/estrategia-producto.mdx';
import I2d from '@site/docs/disenio-ux-ui/instancia-2/servicio.mdx';

// Instancia 3 (5 files)
import I3D from '@site/docs/disenio-ux-ui/instancia-3/descriptor.md';
import I3a from '@site/docs/disenio-ux-ui/instancia-3/diseno-prototipos.mdx';
import I3b from '@site/docs/disenio-ux-ui/instancia-3/calidad-validacion.mdx';
import I3c from '@site/docs/disenio-ux-ui/instancia-3/estrategia-producto.mdx';
import I3d from '@site/docs/disenio-ux-ui/instancia-3/servicio.mdx';

// Instancia 4 (5 files)
import I4D from '@site/docs/disenio-ux-ui/instancia-4/descriptor.md';
import I4a from '@site/docs/disenio-ux-ui/instancia-4/diseno-prototipos.mdx';
import I4b from '@site/docs/disenio-ux-ui/instancia-4/calidad-validacion.mdx';
import I4c from '@site/docs/disenio-ux-ui/instancia-4/estrategia-producto.mdx';
import I4d from '@site/docs/disenio-ux-ui/instancia-4/servicio.mdx';

// Instancia 5 (6 files — desarrollo-profesional present from I5+)
import I5D from '@site/docs/disenio-ux-ui/instancia-5/descriptor.md';
import I5a from '@site/docs/disenio-ux-ui/instancia-5/diseno-prototipos.mdx';
import I5b from '@site/docs/disenio-ux-ui/instancia-5/calidad-validacion.mdx';
import I5c from '@site/docs/disenio-ux-ui/instancia-5/estrategia-producto.mdx';
import I5e from '@site/docs/disenio-ux-ui/instancia-5/desarrollo-profesional.mdx';
import I5d from '@site/docs/disenio-ux-ui/instancia-5/servicio.mdx';

// Instancia 6 (6 files)
import I6D from '@site/docs/disenio-ux-ui/instancia-6/descriptor.md';
import I6a from '@site/docs/disenio-ux-ui/instancia-6/diseno-prototipos.mdx';
import I6b from '@site/docs/disenio-ux-ui/instancia-6/calidad-validacion.mdx';
import I6c from '@site/docs/disenio-ux-ui/instancia-6/estrategia-producto.mdx';
import I6e from '@site/docs/disenio-ux-ui/instancia-6/desarrollo-profesional.mdx';
import I6d from '@site/docs/disenio-ux-ui/instancia-6/servicio.mdx';

// Instancia 7 (6 files)
import I7D from '@site/docs/disenio-ux-ui/instancia-7/descriptor.md';
import I7a from '@site/docs/disenio-ux-ui/instancia-7/diseno-prototipos.mdx';
import I7b from '@site/docs/disenio-ux-ui/instancia-7/calidad-validacion.mdx';
import I7c from '@site/docs/disenio-ux-ui/instancia-7/estrategia-producto.mdx';
import I7e from '@site/docs/disenio-ux-ui/instancia-7/desarrollo-profesional.mdx';
import I7d from '@site/docs/disenio-ux-ui/instancia-7/servicio.mdx';

export default function DisenioUxUiPrint(): React.JSX.Element {
  return (
    <PrintLayout title="Playbook — Diseño UX/UI">
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
