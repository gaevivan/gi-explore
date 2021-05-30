import { AbstractControl, FormControl, FormGroup } from "@angular/forms";
import { Auth } from "@shared/interfaces/auth.interface";
import { isNil } from "../is-nil.function";
import { minLengthValidator } from "../validators/min-length.validator";
import { requiredValidator } from "../validators/required.validator";

export function getSignInControl(
  data: Partial<Auth.SignIn> = null
): FormGroup {
  const signInControlData: Record<keyof Auth.SignIn, AbstractControl> = {
    login: new FormControl('', [requiredValidator, minLengthValidator(6)]),
    password: new FormControl('', [requiredValidator, minLengthValidator(8)]),
    remember: new FormControl(false, requiredValidator),
  };
  const signInFormGroup: FormGroup = new FormGroup(signInControlData);
  if (!isNil(data)) {
    signInFormGroup.reset(data);
  }
  return signInFormGroup;
}
