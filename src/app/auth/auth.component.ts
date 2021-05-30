import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@shared/enums/route.enum';
import { getSignInControl } from '@shared/functions/controls/sign-in.control';
import { getSignUpControl } from '@shared/functions/controls/sign-up.control';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  public readonly projects: Route = Route.projects;
  public readonly signInRoute: Route = Route.signin;
  public readonly signUpRoute: Route = Route.signup;

  public readonly signInControl: FormGroup = getSignInControl();
  public readonly signUpControl: FormGroup = getSignUpControl();

  public readonly isSignIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(public readonly activatedRoute: ActivatedRoute, private readonly router: Router) {
    const isSignIn: boolean = this.activatedRoute.snapshot.data?.mode === Route.signin;
    this.isSignIn$.next(isSignIn);
  }

  public signIn(): void {
    console.log(this.signInControl);
  }

  public signUp(): void {
    console.log(this.signUpControl);
  }

}
