import { Component, HostListener, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, ToolbarModule, ButtonModule, AvatarModule, TooltipModule],
  templateUrl: './navbar.html',
  styles: `
    .app-toolbar {
      background: #ffffff !important;
      border-bottom: 1px solid #e5e7eb;
      padding: 8px 24px;
      border-radius: 0;
      transition: box-shadow 0.25s ease, border-color 0.25s ease;
      animation: hqFadeIn 0.3s ease both;
    }
    :host ::ng-deep .app-toolbar.scrolled {
      box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
      border-bottom-color: transparent;
    }
    .brand {
      font-size: 18px;
      font-weight: 700;
      color: #111827;
      letter-spacing: -0.5px;
      text-decoration: none;
      transition: color 0.2s, opacity 0.2s;
    }
    .brand:hover { opacity: 0.75; }
    .admin-greeting {
      font-size: 13px;
      color: #6b7280;
      margin-right: 8px;
    }
    .navbar-actions {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    @media (max-width: 576px) {
      .app-toolbar { padding: 6px 16px; }
      .brand { font-size: 16px; }
      .admin-greeting { display: none; }
      .navbar-actions { gap: 2px; }
      ::ng-deep .navbar-actions .p-avatar { display: none; }
    }
  `
})
export class NavbarComponent {
  scrolled = signal(false);

  get admin() {
    return this.authService.getAdmin();
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 8);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
