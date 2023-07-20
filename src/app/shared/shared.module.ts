import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { CardModule } from 'primeng/card';

const declarations = [
  HeaderComponent,
  FooterComponent,
  NavbarComponent,
  SvgIconComponent,
];

const imports = [
  CommonModule,

  HttpClientModule,
  FontAwesomeModule,
  ButtonModule,
  FormsModule,
  CardModule,
];

@NgModule({
  declarations: declarations,
  imports: [...imports, AngularSvgIconModule.forRoot()],
  exports: [...declarations, ...imports],
})
export class SharedModule {}
