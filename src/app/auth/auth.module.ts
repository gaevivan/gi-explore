import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core';
import {TuiInputModule} from '@taiga-ui/kit';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';



@NgModule({
  declarations: [AuthComponent],
  imports: [
    TuiButtonModule,
    TuiLinkModule,
    TuiInputModule,
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
