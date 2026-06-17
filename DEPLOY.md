# 🚀 Guia de Deploy - GitHub Pages

## Pré-requisitos

- Conta no GitHub
- Git instalado no seu computador

## Passo 1: Criar um Repositório no GitHub

1. Acesse [github.com](https://github.com)
2. Faça login ou crie uma conta
3. Clique em **New Repository**
4. Nome do repositório: **uniliva.github.io** (importante: use exatamente esse nome)
5. Descrição: "Uni & Kelly - Nossa História"
6. Escolha "Public"
7. Clique em **Create Repository**

## Passo 2: Clonar e Fazer Upload dos Arquivos

No terminal, execute os comandos abaixo:

```bash
cd /home/uni/Downloads/Caseii

# Inicializar git
git init
git add .
git commit -m "Inicial commit: Uni & Kelly website"

# Adicionar o repositório remoto (substitua YOUR_USERNAME por seu usuário)
git remote add origin https://github.com/uniliva/uniliva.github.io.git

# Fazer push para o repositório
git branch -M main
git push -u origin main
```

## Passo 3: Configurar GitHub Pages

1. No repositório, vá para **Settings**
2. No menu à esquerda, clique em **Pages**
3. Em "Source", selecione **Deploy from a branch**
4. Selecione branch **main** e folder **root (/)**
5. Clique em **Save**

## Passo 4: Configurar Domínio Customizado

### No GitHub:

1. Vá para **Settings** → **Pages**
2. Em "Custom domain", digite: **kelly.e.uniii.com.br**
3. Clique em **Save**
4. Marque "Enforce HTTPS" (quando disponível)

### No seu Registrador de Domínio (Registro.br ou similar):

Configure os registros DNS:

#### Opção A: Usar CNAME (Recomendado)

1. Vá para as configurações de DNS do seu domínio
2. Crie um registro **CNAME**:
   - Name/Host: `kelly.e.uniii`
   - Value/Points to: `uniliva.github.io`
   - TTL: 3600

#### Opção B: Usar A Records (Alternativa)

Se não conseguir usar CNAME, use os A records do GitHub:
- Name/Host: `@` ou `kelly.e.uniii`
- Type: A
- Value: `185.199.108.153`
- Value: `185.199.109.153`
- Value: `185.199.110.153`
- Value: `185.199.111.153`

## Passo 5: Verificar o Deploy

1. Após fazer push, vá para **Actions** no seu repositório
2. Você verá o workflow "Deploy para GitHub Pages" rodando
3. Espere completar (deve levar ~1 minuto)
4. Quando ficar verde ✅, está pronto!

## Acessar o Site

Você poderá acessar:
- `https://uniliva.github.io` (URL padrão do GitHub Pages)
- `https://kelly.e.uniii.com.br` (Seu domínio customizado)

## ⏱️ Tempo de Propagação do DNS

- GitHub Pages: Deploy imediato após push
- Domínio customizado: Pode levar 24-48 horas para propagar globalmente
- Você pode monitorar em: https://www.whatsmydns.net

## Fazer Atualizações

Sempre que fizer alterações no código:

```bash
cd /home/uni/Downloads/Caseii
git add .
git commit -m "Descrição da mudança"
git push
```

O workflow automático fará o deploy em segundos!

## 🔒 HTTPS Automático

O GitHub Pages fornece certificado SSL/TLS gratuitamente. Após configurar o domínio customizado, você verá a opção "Enforce HTTPS" - ative para maior segurança.

## 📋 Estrutura do Repositório

```
uniliva.github.io/
├── index.html          # Página principal
├── style.css           # Estilos
├── script.js           # JavaScript
├── README.md           # Este arquivo
├── CNAME               # Domínio customizado
├── sobre.md            # Histórico
├── assets/             # Fotos (55 imagens)
└── .github/
    └── workflows/
        └── deploy.yml  # Workflow automático
```

## ✅ Checklist Final

- [ ] Repositório criado como `uniliva.github.io`
- [ ] Arquivos fazem push para `main` branch
- [ ] GitHub Pages configurado
- [ ] Domínio customizado adicionado no GitHub
- [ ] DNS configurado (CNAME ou A records)
- [ ] Workflow executado com sucesso (aba Actions verde)
- [ ] Site acessível em `kelly.e.uniii.com.br`

## 🆘 Troubleshooting

**Domínio não carrega:**
- Aguarde até 48h para propagação DNS
- Verifique os registros DNS em: https://www.whatsmydns.net
- Limpe cache do navegador (Ctrl+F5)

**Workflow falha:**
- Verifique se o arquivo CNAME existe
- Verifique se todos os arquivos foram fazer push
- Veja detalhes do erro em Settings → Pages

**HTTPS não funciona:**
- Aguarde alguns minutos após adicionar o domínio
- Remova e adicione o domínio novamente se necessário

## 📞 Suporte

Para dúvidas sobre GitHub Pages:
- https://docs.github.com/en/pages
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site

---

**Pronto para compartilhar sua história com o mundo! 💑💕**
