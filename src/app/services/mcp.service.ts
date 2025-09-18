import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class McpService {
  constructor() {}

  async sendMigrationRequest(code: string, fromLang: string, toLang: string): Promise<string> {
    // Simulação de delay para parecer real
    await new Promise(resolve => setTimeout(resolve, 1500));
    return this.simulateResponse(code, fromLang, toLang);
  }



  private simulateResponse(code: string, fromLang: string, toLang: string): string {
    return `// 🚀 Migração de ${fromLang} para ${toLang}
// Agente Dev Migration em ação!

${this.generateMockMigration(code, toLang)}

// ✅ Migração concluída
// 💡 Pronto para usar em ${toLang}!`;
  }

  private generateMockMigration(code: string, toLang: string): string {
    const migrations: { [key: string]: string } = {
      'typescript': `// TypeScript version
interface User {
  name: string;
  age: number;
}

const processUser = (user: User): void => {
  console.log(\`Processing \${user.name}\`);
};`,
      'python': `# Python version
from typing import Dict, Any

def process_user(user: Dict[str, Any]) -> None:
    print(f"Processing {user['name']}")`,
      'go': `// Go version
package main

import "fmt"

type User struct {
    Name string
    Age  int
}

func processUser(user User) {
    fmt.Printf("Processing %s\\n", user.Name)
}`
    };

    return migrations[toLang] || `// Migração para ${toLang}\n// ${code}`;
  }
}