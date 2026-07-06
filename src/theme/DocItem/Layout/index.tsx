import React, {type ReactNode} from 'react';
import Layout from '@theme-original/DocItem/Layout';
import type LayoutType from '@theme/DocItem/Layout';
import type {WrapperProps} from '@docusaurus/types';
import InstanciaStepper from '@site/src/components/InstanciaStepper';

type Props = WrapperProps<typeof LayoutType>;

// Wraps the original doc layout to render the instancia stepper above the
// content. <InstanciaStepper> renders nothing on pages that are not a role's
// instancia page (home, comparativas, etc.).
export default function LayoutWrapper(props: Props): ReactNode {
  return (
    <>
      <InstanciaStepper />
      <Layout {...props} />
    </>
  );
}
