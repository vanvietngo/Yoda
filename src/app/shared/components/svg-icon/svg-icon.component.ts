import { Component, Input, OnInit } from "@angular/core";
import { SvgStyleModel } from "@shared/models/svg.model";

@Component({
  selector: 'yoda-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss'],
})
export class SvgIconComponent implements OnInit {
  @Input() path: string = '';
  @Input() style: SvgStyleModel = {};

  fullPath: string = '';
  SVG: string = 'assets/images/svgs/';

  constructor() {}

  ngOnInit(): void {
    this.fullPath = this.SVG + this.path + '.svg';
  }
}
