import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TemaService, Tema } from '../../../core/services/tema.service';
import { PerguntaService, Pergunta } from '../../../core/services/pergunta.service';
import { NavbarComponent } from '../../../shared/components/navbar/navbar';
import { RelativeTimePipe } from '../../../shared/pipes/relative-time.pipe';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-tema-detalhe',
  imports: [RouterLink, NavbarComponent, RelativeTimePipe, ButtonModule, TagModule],
  templateUrl: './tema-detalhe.html',
  styles: `
    .page-content {
      max-width: 900px;
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
    .tema-header {
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 24px;
      animation: hqFadeInUp 0.4s ease 0.1s both;
    }
    .tema-header-top {
      display: flex;
      justify-content: space-between;
      align-items: start;
      gap: 16px;
    }
    .tema-header h2 {
      font-size: 22px;
      font-weight: 700;
      color: #111827;
      margin: 0 0 4px 0;
    }
    .tema-header p {
      color: #6b7280;
      font-size: 14px;
      margin: 0;
    }
    .tema-actions {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
    }
    .link-section {
      background: #f3f4f6;
      border-radius: 8px;
      padding: 12px 16px;
      margin-top: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .link-section .link-text {
      flex: 1;
      font-size: 13px;
      color: #6b7280;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      min-width: 0;
    }
    .link-copy-mobile { display: none; }
    .link-copy-desktop { display: inline-flex; }
    .icon-muted { color: #9ca3af; }
    .perguntas-title {
      font-size: 16px;
      font-weight: 600;
      color: #111827;
      margin-bottom: 16px;
    }
    .perguntas-title { animation: hqFadeInUp 0.4s ease 0.18s both; }
    .perguntas-list { animation: hqFadeInUp 0.4s ease 0.24s both; }
    .pergunta-card {
      background: #ffffff;
      border: 1px solid #e5e7eb;
      border-radius: 10px;
      padding: 16px 20px;
      margin-bottom: 10px;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    .pergunta-card:hover {
      border-color: #c7d2fe;
      box-shadow: 0 2px 12px rgba(99, 102, 241, 0.08);
    }
    .pergunta-card p {
      color: #374151;
      margin: 0 0 8px 0;
      font-size: 15px;
      line-height: 1.5;
    }
    .pergunta-card small {
      color: #9ca3af;
      font-size: 12px;
    }
    .empty-state {
      text-align: center;
      padding: 48px 0;
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

    @media (max-width: 576px) {
      .page-content { padding: 16px 0; }
      .back-link {
        padding: 8px 16px;
        margin-bottom: 8px;
        font-size: 15px;
        gap: 6px;
      }
      .tema-header {
        border-radius: 0;
        border-left: none;
        border-right: none;
        padding: 20px 16px;
        margin-bottom: 20px;
      }
      .tema-header-top {
        flex-direction: column;
        gap: 16px;
      }
      .tema-header h2 { font-size: 20px; }
      .tema-actions {
        width: 100%;
        justify-content: space-between;
      }

      /* Mobile: hide inline link, show full-width copy button */
      .link-section {
        flex-direction: column;
        align-items: stretch;
        gap: 10px;
        padding: 12px;
      }
      .link-section .link-text {
        font-size: 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .link-section .pi-link { display: none; }
      .link-copy-desktop { display: none; }
      .link-copy-mobile { display: inline-flex; }

      .perguntas-title { padding: 0 16px; }

      /* Edge-to-edge pergunta cards */
      .pergunta-card {
        border-radius: 0;
        border-left: none;
        border-right: none;
        margin-bottom: 0;
        border-bottom: none;
        padding: 16px;
      }
      .pergunta-card:first-of-type { border-top: 1px solid #e5e7eb; }
      .pergunta-card:last-of-type { border-bottom: 1px solid #e5e7eb; }
      .pergunta-card p { font-size: 15px; }

      .empty-state { padding: 40px 24px; }
    }
  `
})
export class TemaDetalheComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private temaService = inject(TemaService);
  private perguntaService = inject(PerguntaService);

  tema = signal<Tema | null>(null);
  perguntas = signal<Pergunta[]>([]);
  linkCopiado = signal(false);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.temaService.getById(id).subscribe(tema => {
      this.tema.set(tema);
      this.perguntaService.getByTema(id).subscribe(perguntas => {
        this.perguntas.set(perguntas);
      });
    });
  }

  toggleAtivo() {
    const tema = this.tema();
    if (!tema) return;
    this.temaService.update(tema.id, { ativo: !tema.ativo }).subscribe(updated => {
      this.tema.set(updated);
    });
  }

  private get baseUrl(): string {
    return document.baseURI.replace(/\/$/, '');
  }

  copiarLink() {
    const link = `${this.baseUrl}/t/${this.tema()?.slug}`;
    navigator.clipboard.writeText(link);
    this.linkCopiado.set(true);
    setTimeout(() => this.linkCopiado.set(false), 2000);
  }

  get link(): string {
    return `${this.baseUrl}/t/${this.tema()?.slug}`;
  }
}
