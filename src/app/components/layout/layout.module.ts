import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ToastrModule } from "ngx-toastr";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "src/app/app-routing.module";

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      NgbModule,
      ToastrModule.forRoot(),
      AppRoutingModule,
    ],
    declarations: [

    ]
  })
  
  export class LayoutModule {}