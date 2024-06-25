import { Component } from '@angular/core';
import { AppMaterialModule } from '../../shared/app-material/app-material.module';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-toolbar-side-nav',
  standalone: true,
  imports: [AppMaterialModule, RouterOutlet],
  templateUrl: './toolbar-side-nav.component.html',
  styleUrl: './toolbar-side-nav.component.scss'
})
export class ToolbarSideNavComponent {
  opened = false;
}
