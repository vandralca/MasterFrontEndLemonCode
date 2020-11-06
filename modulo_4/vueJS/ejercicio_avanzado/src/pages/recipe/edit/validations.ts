import { createFormValidation, Validators, ValidationSchema } from "@lemoncode/fonk";
import { hasItems, isRequired } from "../../../common/validations";

const validationSchema: ValidationSchema = {
  field: {
    name: [{ validator: isRequired, customArgs: { propertyName: "Name" } }],
    description: [{ validator: isRequired, customArgs: { propertyName: "Description" } }],
    ingredients: [hasItems],
  },
};

export const validations = createFormValidation(validationSchema);
