# Preços Bedrock (aproximados)

## Claude 3 Haiku (MAIS BARATO) ✅
- Input: $0.25 por 1M tokens
- Output: $1.25 por 1M tokens
- **~10x mais barato que Sonnet**

## Claude 3 Sonnet
- Input: $3 por 1M tokens  
- Output: $15 por 1M tokens

## Claude 3 Opus (MAIS CARO)
- Input: $15 por 1M tokens
- Output: $75 por 1M tokens

## Para habilitar Claude 3 Haiku:

1. No console AWS → Bedrock → Model access
2. Procure **Anthropic Claude 3 Haiku**
3. Clique **Request access**
4. Atualize a policy IAM para incluir Haiku:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": "bedrock:InvokeModel",
            "Resource": "arn:aws:bedrock:us-east-1::foundation-model/anthropic.claude-3-haiku-20240307-v1:0"
        }
    ]
}
```