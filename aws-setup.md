# Configuração AWS para MCP

## Opção 1: AWS Cognito (Recomendado para frontend)

1. Crie um Identity Pool no AWS Cognito
2. Configure permissões para Bedrock
3. Use AWS SDK no Angular:

```bash
npm install @aws-sdk/client-bedrock-runtime @aws-sdk/credential-providers
```

## Opção 2: API Gateway + Lambda

1. Crie uma Lambda function que chama Bedrock
2. Exponha via API Gateway
3. Chame a API do Angular

## Opção 3: Servidor MCP separado

1. Crie servidor Node.js com AWS SDK
2. Use WebSocket ou HTTP
3. Deploy no AWS Lambda ou EC2

## Configuração rápida (Cognito)

```typescript
import { BedrockRuntimeClient } from '@aws-sdk/client-bedrock-runtime';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-providers';

const client = new BedrockRuntimeClient({
  region: 'us-east-1',
  credentials: fromCognitoIdentityPool({
    identityPoolId: 'us-east-1:your-pool-id'
  })
});
```