import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatComponent } from './components/chat/chat.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ChatComponent],
  template: `
    <div class="container">
      <h1>🚀 Dev Migration Agent</h1>
      <p>Seu assistente para migração entre linguagens de programação</p>
      <app-chat></app-chat>
    </div>
  `,
  styles: [`
    h1 {
      color: #3182ce;
      margin-bottom: 10px;
    }
    p {
      margin-bottom: 20px;
      color: #a0aec0;
    }
  `]
})
export class AppComponent {}