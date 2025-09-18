import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { McpService } from '../../services/mcp.service';

interface Message {
  content: string;
  isUser: boolean;
  timestamp: Date;
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="chat-container">
      <div class="language-selector">
        <label>De: </label>
        <select [(ngModel)]="fromLanguage">
          <option value="java">Java</option>
          <option value="python">Python</option>
          <option value="javascript">JavaScript</option>
          <option value="csharp">C#</option>
        </select>
        <label> Para: </label>
        <select [(ngModel)]="toLanguage">
          <option value="typescript">TypeScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="go">Go</option>
        </select>
      </div>

      <div class="messages">
        <div *ngFor="let message of messages" 
             [class]="message.isUser ? 'message user-message' : 'message ai-message'">
          <div>{{ message.content }}</div>
          <small>{{ message.timestamp | date:'HH:mm' }}</small>
        </div>
      </div>

      <div class="input-area">
        <input 
          [(ngModel)]="currentMessage" 
          (keyup.enter)="sendMessage()"
          placeholder="Cole seu código ou descreva o que precisa migrar..."
          [disabled]="isLoading">
        <button (click)="sendMessage()" [disabled]="isLoading || !currentMessage.trim()">
          {{ isLoading ? '...' : 'Enviar' }}
        </button>
      </div>
    </div>
  `
})
export class ChatComponent {
  messages: Message[] = [{
    content: 'Olá! Sou seu agente de migração. Cole seu código ou me diga o que precisa migrar entre linguagens.',
    isUser: false,
    timestamp: new Date()
  }];
  
  currentMessage = '';
  isLoading = false;
  fromLanguage = 'java';
  toLanguage = 'typescript';

  constructor(private mcpService: McpService) {}

  async sendMessage() {
    if (!this.currentMessage.trim()) return;

    this.messages.push({
      content: this.currentMessage,
      isUser: true,
      timestamp: new Date()
    });

    const userMessage = this.currentMessage;
    this.currentMessage = '';
    this.isLoading = true;

    try {
      const response = await this.mcpService.sendMigrationRequest(
        userMessage, 
        this.fromLanguage, 
        this.toLanguage
      );
      
      this.messages.push({
        content: response,
        isUser: false,
        timestamp: new Date()
      });
    } catch (error) {
      this.messages.push({
        content: 'Erro na conexão. Simulando resposta: Aqui está a migração do seu código...',
        isUser: false,
        timestamp: new Date()
      });
    }

    this.isLoading = false;
  }
}