import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { ToolbarSideNavComponent } from './menu/toolbar-side-nav/toolbar-side-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    MatToolbarModule,
    RouterLink,
    RouterLinkActive,
    MatTableModule,
    MatCardModule,
    HttpClientModule,
    ToolbarSideNavComponent,
    AppMaterialModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'painel-coffeeJava';
}
