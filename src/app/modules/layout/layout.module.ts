import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, LayoutRoutingModule, SharedModule, ButtonModule],
})
export class LayoutModule {}
