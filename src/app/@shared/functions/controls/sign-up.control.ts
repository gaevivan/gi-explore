import { AbstractControl, FormControl, FormGroup } from "@angular/forms";
import { Auth } from "@shared/interfaces/auth.interface";
import { isNil } from "../is-nil.function";
import { minLengthValidator } from "../validators/min-length.validator";
import { requiredValidator } from "../validators/required.validator";

export function getSignUpControl(
  data: Partial<Auth.SignUp> = null
): FormGroup {
  const signUpControlData: Record<keyof Auth.SignUp, AbstractControl> = {
    login: new FormControl('', [requiredValidator, minLengthValidator(6)]),
    password: new FormControl('', [requiredValidator, minLengthValidator(8)]),
    verify: new FormControl('', [requiredValidator, minLengthValidator(8)]),
  };
  const signUpFormGroup: FormGroup = new FormGroup(signUpControlData);
  if (!isNil(data)) {
    signUpFormGroup.reset(data);
  }
  return signUpFormGroup;
}
