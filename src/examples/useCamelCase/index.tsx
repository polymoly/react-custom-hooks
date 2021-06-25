import { useCamelCase } from "../../hooks";

function _useCamelCaseExample() {
  const camelCasedValue = useCamelCase("john-doe", "-");

  console.log(camelCasedValue); // johnDoe

  return <div></div>;
}

export default _useCamelCaseExample;
