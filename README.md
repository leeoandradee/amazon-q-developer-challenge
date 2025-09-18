# Dev Migration Agent 🚀

Agente Angular para auxiliar desenvolvedores na migração entre linguagens de programação, conectado com MCP (Model Context Protocol) da AWS.

## Funcionalidades

- Interface de chat fluida e "dev-friendly"
- Seleção de linguagens origem/destino
- Conexão com MCP da AWS para IA
- Simulação de migração de código
- Design dark theme otimizado

## Como usar

```bash
npm install
npm start
```

## Estrutura

- `src/app/components/chat/` - Interface de chat
- `src/app/services/mcp.service.ts` - Conexão com MCP
- Configuração mínima Angular 17

## Próximos passos

1. Configurar endpoint MCP real da AWS
2. Implementar WebSocket para tempo real
3. Adicionar syntax highlighting
4. Expandir suporte a mais linguagens