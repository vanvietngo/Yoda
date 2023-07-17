import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'yoda-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleMenu: EventEmitter<unknown> = new EventEmitter();
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
