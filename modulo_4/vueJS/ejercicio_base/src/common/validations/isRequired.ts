import { FieldValidationFunctionSync } from "@lemoncode/fonk";

interface IsRequiredCustomArgs {
    propertyName: string
}

const isRequired: FieldValidationFunctionSync<IsRequiredCustomArgs> = ({ value, customArgs}) => {
  const isValid = !Array.isArray(value) && value.length > 0;
  const errorMessage = customArgs && customArgs.propertyName ? `'${customArgs.propertyName}' is a mandatory field` : "This field is mandatory.";
  return {
    type: "MANDATORY_FIELD",
    succeeded: isValid,
    message: isValid ? "" : errorMessage,
  };
};

export { isRequired };
