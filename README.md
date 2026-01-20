# Validador de CPF - Sistema Educacional

Sistema web educacional para validação de CPF, demonstrando como funciona o algoritmo de validação de dígitos verificadores.

## 📋 Características

- ✅ Validação completa de CPF (formato e dígitos verificadores)
- 📚 Conteúdo educacional sobre o algoritmo de validação
- 🎨 Interface moderna e responsiva
- 🔄 Formatação automática durante a digitação
- ⚠️ Avisos claros sobre uso educacional

## 🚀 Como Usar

1. Abra o arquivo `index.html` em um navegador web moderno
2. Digite um CPF no campo de entrada (com ou sem formatação)
3. Clique em "Validar CPF" para verificar
4. O sistema mostrará se o CPF é válido ou inválido, com explicações

## 📁 Estrutura de Arquivos

```
validador-cpf-educacional/
├── index.html      # Estrutura HTML da página
├── styles.css      # Estilos e design
├── script.js       # Lógica de validação
└── README.md       # Este arquivo
```

## 🔍 Algoritmo de Validação

O sistema valida CPF verificando:

1. **Formato**: Deve conter exatamente 11 dígitos
2. **Dígitos iguais**: CPFs com todos os dígitos iguais são inválidos
3. **Primeiro dígito verificador**: Calculado a partir dos 9 primeiros dígitos
4. **Segundo dígito verificador**: Calculado incluindo o primeiro dígito verificador

## ⚠️ Importante

Este sistema é **apenas para fins educacionais**. A validação de formato não garante que o CPF existe ou está ativo. Para validações reais, consulte os órgãos competentes.

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (com gradientes e animações)
- JavaScript (ES6+)
- Sem dependências externas

## 📝 Exemplo de CPF Válido para Teste

Para fins de teste educacional, você pode usar CPFs gerados por algoritmos válidos. Lembre-se: este sistema apenas valida o formato, não verifica se o CPF existe na Receita Federal.
