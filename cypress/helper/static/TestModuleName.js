/**
 * COMPONENT Specifies the Module name to be used in all the test cases
 * The Component name should be provided in the Top Most describe() of all the tests in every spec file
 *      Component name should not be provided in the inner describes
 * Format - describe(`${<COMPONENT_NAME.>}<<JIRA ID: Test Case Name>>`, () => {})
 */

 const COMPONENT = {
    textBox: 'Text Box',
    checkBox: 'Check Box',
    radioBtn: 'Radio Button',
    webTable: 'Web Tables',
    button: 'Buttons',
};

export default {
    COMPONENT,
};
