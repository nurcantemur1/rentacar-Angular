import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NaviComponent } from './navi/navi.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    declarations: [FooterComponent, NaviComponent],
    exports: [FooterComponent, NaviComponent],
    imports: [CommonModule, RouterModule, NgbModule]
})
export class SectionsModule {}
