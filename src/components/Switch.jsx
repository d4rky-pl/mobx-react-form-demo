import React from 'react';
import { observer } from 'mobx-react';

import FormMarkdown from './forms/FormMarkdown';
import FormWithNestedFields from './forms/FormWithNestedFields';
import FormRegisterMaterial from './forms/FormRegisterMaterial';
import FormRegisterSimple from './forms/FormRegisterSimple';
import FormCompanyWidgets from './forms/FormCompanyWidgets';
import FormCompanySimple from './forms/FormCompanySimple';

export default observer(({ menu, forms }) => {
  switch (true) {

    case menu.markdown:
      return (<FormMarkdown form={forms.markdown} />);

    case menu.nestedFields:
      return (<FormWithNestedFields form={forms.nestedFields} />);

    case menu.registerMaterial:
      return (<FormRegisterMaterial form={forms.registerMaterial} />);

    case menu.registerSimple:
      return (<FormRegisterSimple form={forms.registerSimple} />);

    case menu.companyWidgets:
      return (<FormCompanyWidgets form={forms.companyWidgets} />);

    case menu.companySimple:
      return (<FormCompanySimple form={forms.companySimple} />);

    default: return null;
  }
});
