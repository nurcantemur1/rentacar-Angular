import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  private _router: PushSubscription;
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  ngOnInit() {
   
      const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');

  }
}
