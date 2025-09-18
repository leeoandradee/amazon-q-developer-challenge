# Dev Migration Agent 🚀

Agente Angular para auxiliar desenvolvedores na migração entre linguagens de programação, conectado com MCP (Model Context Protocol) da AWS.

## Qual problema inspirou a ideia

Durante migrações de sistemas legados, desenvolvedores enfrentam desafios constantes:

- **Tempo excessivo** convertendo código manualmente entre linguagens
- **Erros de sintaxe** ao migrar de Java para TypeScript, Python para Go, etc.
- **Falta de contexto** sobre melhores práticas na linguagem de destino
- **Produtividade baixa** em projetos de modernização

O Dev Migration Agent resolve isso oferecendo um assistente IA especializado em migração de código, com interface conversacional familiar aos desenvolvedores.

## Como a solução foi construída

### Arquitetura
- **Frontend:** Angular 17 standalone components
- **Interface:** Chat conversacional com dark theme
- **Seleção:** Linguagens origem/destino (Java, Python, JavaScript, TypeScript, C#, Go)
- **Backend:** Preparado para integração MCP com AWS Bedrock
- **Simulação:** Mock inteligente para demonstração

### Stack Técnica
```
Angular 17 + TypeScript
├── Chat Component (interface conversacional)
├── MCP Service (conexão com IA)
├── AWS SDK (Bedrock integration ready)
└── CSS Dark Theme (dev-friendly)
```

### Funcionalidades Implementadas
- ✅ Interface de chat fluida
- ✅ Seleção de linguagens
- ✅ Simulação de migração inteligente
- ✅ Estrutura MCP preparada
- ✅ Design otimizado para desenvolvedores
- ✅ Testes automatizados (Cypress)
- ✅ Diagrama de arquitetura

### Diagrama de Arquitetura

![Arquitetura](./architecture-diagram.drawio)

O diagrama mostra a arquitetura em camadas:
- **Frontend Layer:** Angular 17 com componentes standalone
- **Service Layer:** MCP Service com simulação
- **AWS Integration:** Cognito + Bedrock (futuro)

## Instruções para rodar

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação e execução
```bash
# Clone o repositório
git clone <repo-url>
cd amazon-q-developer-challenge

# Instale dependências
npm install

# Execute a aplicação
npm start
```

### Acesso
- **Local:** http://localhost:4200
- **Codespaces:** URL automática gerada pelo GitHub

### Teste da aplicação
1. Selecione linguagem origem (ex: Java)
2. Selecione linguagem destino (ex: TypeScript)
3. Cole um código ou descreva o que precisa migrar
4. Veja a migração simulada em tempo real

### Testes automatizados
```bash
# Instalar Cypress
npm install cypress --save-dev

# Executar testes (interface)
npm run cypress:open

# Executar testes (headless)
npm run e2e
```

## Próximos passos

### Integração AWS Real
- [ ] Configurar AWS Cognito Identity Pool
- [ ] Habilitar Amazon Bedrock (Claude 3 Haiku)
- [ ] Implementar autenticação via Cognito
- [ ] Conectar MCP real com Bedrock

### Melhorias de Interface
- [ ] Syntax highlighting para códigos
- [ ] Copy/paste otimizado
- [ ] Histórico de conversas
- [ ] Export de migrações

### Expansão de Funcionalidades
- [ ] Suporte a mais linguagens (Rust, Kotlin, Swift)
- [ ] Análise de dependências e bibliotecas
- [ ] Sugestões de refatoração
- [ ] Integração com IDEs via extensões

### Otimizações
- [ ] WebSocket para tempo real
- [ ] Cache de migrações comuns
- [ ] Modo offline com modelos locais
- [ ] Deploy automatizado na AWS

## Histórico de Desenvolvimento

### Lista de Prompts Enviados

Este projeto foi desenvolvido através de uma conversa iterativa com Amazon Q Developer. Aqui estão os principais prompts que guiaram a construção:

1. **Prompt inicial:** "Quero que me auxilie para criar uma solução que eu tenha um código front end angular para servir como um agente de devs que estão migrando de linguagem de programação, com uma linguagem mais fluida e mais 'dev'. Quero que nesse repo criamos a aplicação angular e que se conecta a um MCP da was que eu consiga falar com IA disponível"

2. **Correção de erros:** "Ao rodar o projeto, está dando erro de schema. Ele deu os erros no console"

3. **Acesso via Codespaces:** "Agora deu certo, eu consigo acessar meu localhost usando o GitHub space?"

4. **Integração MCP:** "Legal, agora que está funcionando, preciso criar a integração com um servidor mcp. Queria colocar que nunca fiz isso e não conheço. Tem algo da AWS que eu consiga usar?"

5. **Configuração Cognito:** "Quero que siga com a configuração do Cognito"

6. **Modelo mais barato:** "Quero habilitar o modelo mais barato"

7. **Configuração use cases:** "Precisa preencher os use cases, como eh"

8. **Website da empresa:** "Esta pedindo o site da empresa, o que coloco?"

9. **Configuração Identity Pool:** "Agora que solicitei, como eu faço a configuração do cognito?"

10. **Criação de roles:** "Tá pedindo para criar um iam role"

11. **Simplificação:** "Eu quero deixar mocado o mcp service por enquanto"

12. **Documentação:** "Quero que crie o read me com esses tópicos: Qual problema inspirou a ideia, Como a solução foi construída, Instruções para rodar, Próximos passos"

### Processo de Desenvolvimento

O desenvolvimento seguiu uma abordagem **iterativa e colaborativa**, onde cada prompt refinava e expandia a solução:

- **Configuração inicial** do projeto Angular 17
- **Estruturação** de componentes e serviços
- **Integração AWS** (Cognito + Bedrock)
- **Simplificação** para demonstração
- **Documentação** completa

Este histórico demonstra como Amazon Q Developer pode auxiliar no desenvolvimento completo de uma aplicação, desde a concepção até a documentação final.

---

**Desenvolvido para o Amazon Q Developer Challenge** 🏆