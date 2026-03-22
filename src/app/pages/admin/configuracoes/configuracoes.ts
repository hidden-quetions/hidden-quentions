import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { AdminService } from '../../../core/services/admin.service';
import { NavbarComponent } from '../../../shared/components/navbar/navbar';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-configuracoes',
  imports: [FormsModule, RouterLink, NavbarComponent, InputTextModule, PasswordModule, ButtonModule, MessageModule],
  templateUrl: './configuracoes.html',
  styles: `
    .page-content {
      max-width: 600px;
      margin: 0 auto;
      padding: 32px 24px;
      animation: hqFadeIn 0.35s ease both;
    }
    .back-link {
      color: #6b7280;
      text-decoration: none;
      font-size: 14px;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      margin-bottom: 24px;
      cursor: pointer;
      padding: 4px 0;
      transition: color 0.2s, transform 0.2s;
      animation: hqFadeInUp 0.4s ease 0.05s both;
    }
    .back-link:hover { color: #374151; transform: translateX(-3px); }
    .config-card {
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 16px;
      animation: hqFadeInUp 0.4s ease both;
      transition: box-shadow 0.2s;
    }
    .config-card:hover { box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06); }
    .config-card:nth-child(2) { animation-delay: 0.1s; }
    .config-card:nth-child(3) { animation-delay: 0.18s; }
    .config-card h3 {
      font-size: 16px;
      font-weight: 600;
      color: #111827;
      margin: 0 0 20px 0;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .config-field {
      margin-bottom: 16px;
    }
    .config-field label {
      display: block;
      font-size: 13px;
      font-weight: 500;
      color: #4b5563;
      margin-bottom: 6px;
    }
    .w-full { width: 100%; }
    .btn-row { text-align: right; }
    .spacer { margin-bottom: 16px; }

    @media (max-width: 576px) {
      .page-content { padding: 16px 0; }
      .back-link {
        padding: 8px 16px;
        margin-bottom: 8px;
        font-size: 15px;
        gap: 6px;
      }
      .config-card {
        border-radius: 0;
        border-left: none;
        border-right: none;
        padding: 20px 16px;
      }
      .config-card h3 { font-size: 17px; }
      .config-field label { font-size: 14px; margin-bottom: 8px; }
      .btn-row { text-align: right; }
    }
  `
})
export class ConfiguracoesComponent {
  private authService = inject(AuthService);
  private adminService = inject(AdminService);

  admin = this.authService.getAdmin()!;
  novoNome = this.admin.nome;
  novaSenha = '';
  confirmarSenha = '';
  msgNome = signal('');
  msgSenha = signal('');
  msgSenhaTipo = signal<'success' | 'error'>('success');

  salvarNome() {
    if (!this.novoNome.trim()) return;

    this.adminService.update(this.admin.id, { nome: this.novoNome }).subscribe(updated => {
      this.admin = updated;
      this.msgNome.set('Nome atualizado com sucesso!');
      setTimeout(() => this.msgNome.set(''), 3000);
    });
  }

  salvarSenha() {
    if (!this.novaSenha || !this.confirmarSenha) {
      this.msgSenha.set('Preencha os dois campos.');
      this.msgSenhaTipo.set('error');
      return;
    }

    if (this.novaSenha !== this.confirmarSenha) {
      this.msgSenha.set('As senhas não coincidem.');
      this.msgSenhaTipo.set('error');
      return;
    }

    this.adminService.update(this.admin.id, { senha: this.novaSenha }).subscribe(updated => {
      this.admin = updated;
      this.novaSenha = '';
      this.confirmarSenha = '';
      this.msgSenha.set('Senha atualizada com sucesso!');
      this.msgSenhaTipo.set('success');
      setTimeout(() => this.msgSenha.set(''), 3000);
    });
  }
}
