import { AuthService } from '../services/auth.service';
import { NgModule } from '@angular/core';

import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";


@NgModule({
  declarations: [],
  imports: [AngularFireAuthModule, AngularFirestoreModule],
  providers:[AuthService]
})
export class CoreModule {}
