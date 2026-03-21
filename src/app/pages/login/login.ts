import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-login',
  imports: [FormsModule, InputTextModule, PasswordModule, ButtonModule, MessageModule],
  templateUrl: './login.html',
  styles: `
    .login-page {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      min-height: 100dvh;
      padding: 16px;
      background: #f5f6ff;
      position: relative;
      overflow: hidden;
    }

    /* ── Orbs ── */
    .orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(72px);
      pointer-events: none;
      animation: hqOrbPulse 10s ease-in-out infinite;
    }
    .orb-1 {
      width: 420px; height: 420px;
      background: rgba(99, 102, 241, 0.18);
      top: -120px; right: -120px;
    }
    .orb-2 {
      width: 320px; height: 320px;
      background: rgba(139, 92, 246, 0.12);
      bottom: -100px; left: -100px;
      animation-delay: -5s;
    }

    /* ── Card ── */
    .login-card {
      width: 100%;
      max-width: 400px;
      background: #ffffff;
      border-radius: 20px;
      padding: 40px 32px;
      border: 1px solid rgba(99, 102, 241, 0.14);
      box-shadow: 0 24px 64px rgba(99, 102, 241, 0.13), 0 4px 16px rgba(0, 0, 0, 0.06);
      position: relative;
      z-index: 1;
      animation: hqCardIn 0.5s cubic-bezier(0.34, 1.4, 0.64, 1) both;
    }

    /* ── Logo ── */
    .login-logo {
      width: 60px; height: 60px;
      background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
      border-radius: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 20px;
      box-shadow: 0 8px 24px rgba(99, 102, 241, 0.35);
      animation: hqLogoIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both;
    }
    .login-logo i { font-size: 26px; color: #ffffff; }

    /* ── Text ── */
    .login-title {
      font-size: 24px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 4px;
      color: #111827;
      animation: hqFadeInUp 0.4s ease 0.25s both;
    }
    .login-subtitle {
      font-size: 14px;
      color: #6b7280;
      text-align: center;
      margin-bottom: 32px;
      animation: hqFadeInUp 0.4s ease 0.32s both;
    }

    /* ── Fields ── */
    .login-field {
      margin-bottom: 20px;
      animation: hqFadeInUp 0.4s ease 0.38s both;
    }
    .login-field-senha { animation-delay: 0.44s; }
    .login-field label {
      display: block;
      font-size: 13px;
      font-weight: 500;
      color: #4b5563;
      margin-bottom: 6px;
    }

    /* ── Error ── */
    .erro-wrapper { animation: hqShake 0.4s ease; margin-bottom: 4px; }

    /* ── Button ── */
    .login-btn-wrapper { animation: hqFadeInUp 0.4s ease 0.5s both; }

    .w-full { width: 100%; }
    .spacer { margin-bottom: 16px; }

    @media (max-width: 576px) {
      .login-page { padding: 0; align-items: stretch; }
      .login-card {
        max-width: none;
        border: none;
        border-radius: 0;
        box-shadow: none;
        padding: 48px 24px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 100vh;
        min-height: 100dvh;
      }
      .orb-1 { width: 260px; height: 260px; }
      .orb-2 { width: 200px; height: 200px; }
      .login-title { font-size: 28px; margin-bottom: 8px; }
      .login-subtitle { font-size: 15px; margin-bottom: 40px; }
      .login-field { margin-bottom: 24px; }
      .login-field label { font-size: 14px; margin-bottom: 8px; }
    }
  `
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  nome = '';
  senha = '';
  erro = signal('');
  carregando = signal(false);

  entrar() {
    if (!this.nome || !this.senha) {
      this.erro.set('Preencha todos os campos.');
      return;
    }

    this.carregando.set(true);
    this.erro.set('');

    this.authService.login(this.nome, this.senha).subscribe({
      next: (admin) => {
        if (admin) {
          this.router.navigate(['/admin']);
        } else {
          this.erro.set('Nome ou senha incorretos.');
          this.carregando.set(false);
        }
      },
      error: () => {
        this.erro.set('Erro ao conectar com o servidor.');
        this.carregando.set(false);
      }
    });
  }
}
