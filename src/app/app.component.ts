import { Component,ViewChild } from '@angular/core';
import { SidenavComponent } from './components/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav') sidenavComponent!: SidenavComponent;
  title = 'ShopStream';
}

// public menu(){
//   this.sidenavComponent.sidenavfunction();
// }
//
