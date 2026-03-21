import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { TemaService, Tema } from '../../core/services/tema.service';
import { NavbarComponent } from '../../shared/components/navbar/navbar';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { TagModule } from 'primeng/tag';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-admin',
  imports: [
    RouterLink, FormsModule, NavbarComponent,
    DialogModule, ButtonModule, InputTextModule, TextareaModule, TagModule, ProgressSpinnerModule
  ],
  templateUrl: './admin.html',
  styles: `
    .page-content {
      max-width: 900px;
      margin: 0 auto;
      padding: 32px 24px;
      animation: hqFadeIn 0.35s ease both;
    }
    .stats-row {
      display: flex;
      gap: 16px;
      margin-bottom: 32px;
    }
    .stat-card {
      flex: 1;
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      padding: 20px;
      min-width: 0;
      animation: hqFadeInUp 0.4s ease both;
      transition: box-shadow 0.2s, transform 0.2s;
    }
    .stat-card:hover {
      box-shadow: 0 4px 16px rgba(99, 102, 241, 0.1);
      transform: translateY(-2px);
    }
    .stat-card:nth-child(1) { animation-delay: 0.05s; }
    .stat-card:nth-child(2) { animation-delay: 0.12s; }
    .stat-card .stat-value {
      font-size: 28px;
      font-weight: 700;
      color: #111827;
    }
    .stat-card .stat-label {
      font-size: 13px;
      color: #6b7280;
      margin-top: 4px;
    }
    .dashboard-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
      animation: hqFadeInUp 0.4s ease 0.18s both;
    }
    .dashboard-header h2 {
      font-size: 22px;
      font-weight: 700;
      color: #111827;
      margin: 0;
    }
    .temas-list { animation: hqFadeInUp 0.4s ease 0.24s both; }
    .tema-card {
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      padding: 20px;
      margin-bottom: 12px;
      cursor: pointer;
      transition: border-color 0.2s, background 0.2s, transform 0.2s, box-shadow 0.2s;
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-decoration: none;
      color: inherit;
    }
    .tema-card:hover {
      border-color: #6366f1;
      background: #eef2ff;
      transform: translateX(4px);
      box-shadow: 0 4px 16px rgba(99, 102, 241, 0.1);
    }
    .tema-card .tema-info {
      min-width: 0;
      flex: 1;
    }
    .tema-card .tema-info h3 {
      font-size: 16px;
      font-weight: 600;
      color: #111827;
      margin: 0 0 6px 0;
    }
    .tema-card .tema-info p {
      font-size: 13px;
      color: #6b7280;
      margin: 0;
    }
    .tema-card .tema-meta {
      display: flex;
      align-items: center;
      gap: 12px;
      flex-shrink: 0;
      margin-left: 12px;
    }
    .icon-muted { color: #9ca3af; }
    .loading-state {
      text-align: center;
      padding: 48px 0;
    }
    .empty-state {
      text-align: center;
      padding: 48px 0;
      animation: hqFadeInUp 0.4s ease 0.22s both;
    }
    .empty-state i {
      font-size: 48px;
      color: #d1d5db;
      margin-bottom: 16px;
    }
    .empty-state h3 {
      font-size: 18px;
      font-weight: 600;
      color: #6b7280;
      margin: 0 0 8px 0;
    }
    .empty-state p {
      font-size: 14px;
      color: #9ca3af;
      margin: 0 0 16px 0;
    }
    .modal-field {
      margin-bottom: 20px;
    }
    .modal-field label {
      display: block;
      font-size: 13px;
      font-weight: 500;
      color: #4b5563;
      margin-bottom: 6px;
    }
    .w-full { width: 100%; }
    ::ng-deep .dialog-md { width: 450px; max-width: 90vw; }

    /* ---- Mobile FAB + cards edge-to-edge ---- */
    .fab {
      display: none;
      position: fixed;
      bottom: 24px;
      right: 20px;
      z-index: 50;
    }
    .desktop-new-btn { display: inline-flex; }

    @media (max-width: 576px) {
      .page-content { padding: 20px 0; }
      .stats-row {
        padding: 0 16px;
        gap: 10px;
        margin-bottom: 24px;
      }
      .stat-card {
        padding: 16px;
        border-radius: 10px;
        text-align: center;
      }
      .stat-card .stat-value { font-size: 24px; }
      .stat-card .stat-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; }
      .dashboard-header {
        padding: 0 16px;
        margin-bottom: 16px;
      }
      .dashboard-header h2 { font-size: 18px; }
      .desktop-new-btn { display: none; }
      .fab { display: flex; }
      .tema-card {
        border-radius: 0;
        border-left: none;
        border-right: none;
        margin-bottom: 0;
        border-bottom: none;
        padding: 16px;
      }
      .tema-card:first-of-type { border-top: 1px solid #e5e7eb; }
      .tema-card:last-of-type { border-bottom: 1px solid #e5e7eb; }
      .tema-card .tema-info h3 { font-size: 15px; margin-bottom: 4px; }
      .tema-card .tema-info p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .empty-state { padding: 40px 24px; }
      .loading-state { padding: 40px 0; }

      ::ng-deep .dialog-md {
        width: 100vw !important;
        max-width: 100vw !important;
      }
      ::ng-deep .p-dialog {
        margin: 0 !important;
        border-radius: 16px 16px 0 0 !important;
        position: fixed !important;
        bottom: 0 !important;
        left: 0 !important;
        right: 0 !important;
      }
      .modal-field label { font-size: 14px; margin-bottom: 8px; }
    }
  `
})
export class AdminComponent implements OnInit {
  private authService = inject(AuthService);
  private temaService = inject(TemaService);

  admin = this.authService.getAdmin()!;
  temas = signal<Tema[]>([]);
  novoTema = { titulo: '', descricao: '' };
  salvando = signal(false);
  carregando = signal(true);
  erro = signal(false);
  modalVisivel = signal(false);

  temasAtivos = computed(() => this.temas().filter(t => t.ativo).length);

  ngOnInit() {
    this.carregarTemas();
  }

  carregarTemas() {
    this.carregando.set(true);
    this.erro.set(false);
    this.temaService.getByAdmin(this.admin.id).subscribe({
      next: temas => {
        this.temas.set(temas);
        this.carregando.set(false);
      },
      error: () => {
        this.carregando.set(false);
        this.erro.set(true);
      }
    });
  }

  abrirModal() {
    this.modalVisivel.set(true);
  }

  criarTema() {
    if (!this.novoTema.titulo.trim()) return;

    this.salvando.set(true);
    const slug = this.temaService.generateSlug(this.novoTema.titulo);

    this.temaService.create({
      titulo: this.novoTema.titulo,
      descricao: this.novoTema.descricao,
      adminId: this.admin.id,
      slug,
      ativo: true
    }).subscribe(() => {
      this.novoTema = { titulo: '', descricao: '' };
      this.salvando.set(false);
      this.modalVisivel.set(false);
      this.carregarTemas();
    });
  }
}
