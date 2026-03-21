import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TemaService, Tema } from '../../core/services/tema.service';
import { PerguntaService } from '../../core/services/pergunta.service';
import { ButtonModule } from 'primeng/button';
import { TextareaModule } from 'primeng/textarea';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-tema-publico',
  imports: [FormsModule, ButtonModule, TextareaModule, ProgressSpinnerModule],
  templateUrl: './tema-publico.html',
  styles: `
    .public-page {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      min-height: 100dvh;
      padding: 40px 16px;
      background: #f5f6ff;
    }
    .public-card {
      width: 100%;
      max-width: 480px;
      background: #ffffff;
      border: 1px solid rgba(99, 102, 241, 0.14);
      border-radius: 20px;
      padding: 36px 32px;
      box-shadow: 0 20px 60px rgba(99, 102, 241, 0.1), 0 4px 16px rgba(0, 0, 0, 0.05);
      animation: hqCardIn 0.5s cubic-bezier(0.34, 1.4, 0.64, 1) both;
    }
    .public-card h2 {
      font-size: 22px;
      font-weight: 700;
      color: #111827;
      margin: 0 0 4px 0;
    }
    .public-card .desc {
      color: #6b7280;
      font-size: 14px;
      margin: 0 0 24px 0;
    }
    .public-field {
      margin-bottom: 20px;
    }
    .public-field label {
      display: block;
      font-size: 13px;
      font-weight: 500;
      color: #4b5563;
      margin-bottom: 6px;
    }
    .public-success {
      text-align: center;
      padding: 20px 0;
      animation: hqFadeInUp 0.4s ease both;
    }
    .public-success i {
      font-size: 48px;
      color: #22c55e;
      margin-bottom: 16px;
      display: block;
      animation: hqBounceIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s both;
    }
    .public-success h3 {
      font-size: 20px;
      font-weight: 600;
      color: #111827;
      margin: 0 0 8px 0;
    }
    .public-success p {
      color: #6b7280;
      font-size: 14px;
      margin: 0 0 20px 0;
    }
    .empty-state {
      text-align: center;
      padding: 20px 0;
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
      margin: 0;
    }
    .loading-state {
      text-align: center;
      padding: 40px 0;
    }
    .powered-by {
      text-align: center;
      margin-top: 24px;
      font-size: 12px;
      color: #9ca3af;
    }
    .powered-by strong { color: #6b7280; }
    .w-full { width: 100%; }

    @media (max-width: 576px) {
      .public-page {
        padding: 0;
        align-items: stretch;
        min-height: 100vh;
        min-height: 100dvh;
      }
      .public-card {
        max-width: none;
        border: none;
        border-radius: 0;
        padding: 32px 20px;
        min-height: 100vh;
        min-height: 100dvh;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .public-card h2 { font-size: 24px; margin-bottom: 8px; }
      .public-card .desc { font-size: 15px; margin-bottom: 32px; }
      .public-field { margin-bottom: 24px; }
      .public-field label { font-size: 15px; margin-bottom: 8px; }
      .public-success i { font-size: 56px; margin-bottom: 20px; }
      .public-success h3 { font-size: 22px; }
      .public-success p { font-size: 15px; margin-bottom: 28px; }
      .powered-by { margin-top: auto; padding-top: 32px; }
    }
  `
})
export class TemaPublicoComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private temaService = inject(TemaService);
  private perguntaService = inject(PerguntaService);

  tema = signal<Tema | null>(null);
  naoEncontrado = signal(false);
  conteudo = '';
  enviado = signal(false);
  enviando = signal(false);

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug')!;
    this.temaService.getBySlug(slug).subscribe(temas => {
      if (temas.length === 0) {
        this.naoEncontrado.set(true);
      } else {
        this.tema.set(temas[0]);
      }
    });
  }

  enviarPergunta() {
    const tema = this.tema();
    if (!this.conteudo.trim() || !tema) return;

    this.enviando.set(true);
    this.perguntaService.create({
      temaId: tema.id,
      conteudo: this.conteudo,
      criadoEm: new Date().toISOString()
    }).subscribe(() => {
      this.enviado.set(true);
      this.enviando.set(false);
      this.conteudo = '';
    });
  }
}
