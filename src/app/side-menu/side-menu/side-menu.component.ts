import { Component } from '@angular/core';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    AppMaterialModule
  ],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
  badgevisible = false;
  collapsed = false;
  badgevisibility() {
    this.badgevisible = true;
  }

}
