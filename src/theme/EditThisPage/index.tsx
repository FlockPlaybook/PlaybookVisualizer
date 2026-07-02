import React, {type ReactNode} from 'react';
import Translate from '@docusaurus/Translate';
import {ThemeClassNames} from '@docusaurus/theme-common';
import Link from '@docusaurus/Link';
import IconEdit from '@theme/Icon/Edit';
import type {Props} from '@theme/EditThisPage';

export default function EditThisPage({editUrl}: Props): ReactNode {
  return (
    <Link to={editUrl} className={ThemeClassNames.common.editThisPage}>
      <IconEdit />
      <Translate
        id="theme.common.proposeEdit"
        description="The link label to propose an edit to the current page">
        Proponer una edición
      </Translate>
    </Link>
  );
}
