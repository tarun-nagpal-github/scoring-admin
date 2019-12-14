import React from "react";
import { injectIntl, FormattedMessage } from "react-intl";

const InjectMassage = props => <FormattedMessage {...props} />;

// const InjectMassage = props => {
//     console.log('props', props)
//     return (
//         <FormattedMessage {...props} children={
//             (message) => <Fragment>{message}</Fragment>
//         }/>
//     )
// }

export default injectIntl(InjectMassage, {
  withRef: false
});
