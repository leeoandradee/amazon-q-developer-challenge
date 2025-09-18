# Configuração AWS Cognito

## 1. Criar Identity Pool

1. Acesse AWS Console → Cognito → Identity Pools
2. Clique "Create identity pool"
3. Nome: `dev-migration-agent-pool`
4. Marque "Enable access to unauthenticated identities"
5. Clique "Create pool"

## 2. Configurar Permissões IAM

Na role criada automaticamente, adicione esta policy:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "bedrock:InvokeModel"
            ],
            "Resource": "arn:aws:bedrock:us-east-1::foundation-model/anthropic.claude-3-sonnet-20240229-v1:0"
        }
    ]
}
```

## 3. Atualizar código

No arquivo `mcp.service.ts`, substitua:
```typescript
private identityPoolId = 'us-east-1:SEU_IDENTITY_POOL_ID_AQUI';
```

## 4. Instalar dependências

```bash
npm install @aws-sdk/client-bedrock-runtime @aws-sdk/credential-providers
```

Pronto! Agora o app usará IA real do AWS Bedrock.