import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavbarComponent],
  imports: [
    CommonModule,
    AngularSvgIconModule.forRoot(),
    HttpClientModule,
    FontAwesomeModule,
    ButtonModule,
  ],
  exports: [HeaderComponent, FooterComponent, NavbarComponent],
})
export class SharedModule {}
