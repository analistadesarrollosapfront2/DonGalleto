import { Component,ViewChild } from '@angular/core';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav') sidenavComponent!: SidenavComponent;
  title = 'ShopStream';

constructor(private router: Router) {}

  showSidebar(): boolean {
    const currentRoute = this.router.url;
    return !(
      currentRoute === '/login' ||
      currentRoute === '/accesoLogin' ||
      currentRoute === '/recuperacionLogin'
    );
  }
}
