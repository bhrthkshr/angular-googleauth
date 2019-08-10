 import {NgModule} from "@angular/core";
 import { MatToolbarModule,MatIconModule, MatListModule,MatSidenavModule,MatButtonModule, MatCheckboxModule} from "@angular/material";

 @NgModule({
   imports: [
     MatToolbarModule,
     MatIconModule,
     MatButtonModule,
     MatCheckboxModule,
     MatSidenavModule,
     MatListModule
   ],

   exports: [
     MatToolbarModule,
     MatIconModule,
     MatButtonModule,
     MatCheckboxModule,
     MatSidenavModule,
     MatListModule
   ]
 })
 export class MaterialModule {}