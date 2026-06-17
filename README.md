# 💕 Uni & Kelly - Nosso Site

Bem-vindo ao site oficial de Uni e Kelly! Um site moderno e responsivo que conta nossa história de amor, com galeria de fotos, link para presentes e PIX.

## 📋 Características

✨ **Design Moderno e Responsivo**
- Funciona em todos os dispositivos (desktop, tablet, mobile)
- Interface limpa e intuitiva
- Animações suaves e elegantes

📖 **Seções Principais**
- **Início**: Página de boas-vindas com chamadas principais
- **Sobre**: Nossa história de 6 anos juntos
- **Galeria**: 55 fotos especiais do casal com visualizador em modal
- **Presentes**: Link direto para nossa lista de presentes na Amazon
- **PIX**: QR code do PIX e email para contribuições

🎨 **Recursos Interativos**
- Modal com visualizador de fotos com navegação por setas e teclado
- QR code do PIX gerado dinamicamente
- Barra de navegação fixa e fluida
- Animações de scroll suave

## 📁 Estrutura do Projeto

```
Caseii/
├── index.html          # Página principal
├── style.css           # Estilos (CSS)
├── script.js           # Lógica interativa (JavaScript)
├── sobre.md            # Conteúdo da história (original)
└── assets/             # Pasta com as 55 fotos do casal
    ├── eu_e_ela1.jpg
    ├── eu_e_ela2.jpg
    └── ... (até eu_e_ela55.jpeg)
```

## 🚀 Como Usar

### Opção 1: Abrir localmente
1. Abra o arquivo `index.html` no seu navegador
2. Navegue pelas seções usando a barra de menu

### Opção 2: Usar um servidor local (recomendado)

**Com Python 3:**
```bash
cd /home/uni/Downloads/Caseii
python -m http.server 8000
```

Depois acesse: `http://localhost:8000`

**Com Node.js (se tiver http-server instalado):**
```bash
http-server /home/uni/Downloads/Caseii
```

**Com PHP:**
```bash
cd /home/uni/Downloads/Caseii
php -S localhost:8000
```

## 📸 Galeria de Fotos

- **55 fotos** do casal em diferentes momentos
- **Modal interativo** para visualizar fotos em tamanho grande
- **Navegação** com setas do mouse, setas do teclado ou clicando nos botões
- **ESC** para fechar o modal
- **Clique fora** da imagem para fechar

## 💝 PIX e Presentes

### PIX
- **Email**: Uni.e.kelly@gmail.com
- **QR Code**: Gerado automaticamente na página

### Lista de Presentes
- Link direto para [Amazon Wishlist](https://www.amazon.com.br/hz/wishlist/ls/NO8GHOZDP0ND?ref_=wl_share)

## 🎯 Dicas de Personalização

### Mudar cores:
Edite o arquivo `style.css` e altere as variáveis no `:root`:
```css
:root {
    --primary-color: #e91e63;      /* Rosa principal */
    --secondary-color: #ff6090;    /* Rosa secundária */
    /* ... outras cores ... */
}
```

### Adicionar novas fotos:
1. Adicione a foto à pasta `assets/`
2. No arquivo `script.js`, adicione o caminho à lista `photos`

### Modificar conteúdo:
Edite o arquivo `index.html` diretamente nas seções HTML

## 📱 Responsividade

O site é totalmente responsivo e se adapta a:
- Desktops (1200px+)
- Tablets (768px - 1199px)
- Celulares (até 767px)

## 🌐 Compartilhar Online

Para colocar o site online, você pode usar:

1. **GitHub Pages** (grátis)
   - Crie um repositório com o nome `username.github.io`
   - Faça upload dos arquivos
   - Site fica em `username.github.io`

2. **Vercel** (grátis)
   - Conecte seu repositório GitHub
   - Deploy automático

3. **Netlify** (grátis)
   - Arraste a pasta para o Netlify.com
   - Site fica online em segundos

4. **Servidores tradicionais**
   - Contrate hospedagem
   - Faça upload via FTP

## 📝 Notas

- ⚡ O site é completamente estático (sem servidor necessário)
- 🔒 Seguro e privado (todas as fotos locais)
- 📊 Rápido e leve
- 🎨 Customizável facilmente

## 💌 Créditos

Site criado com ❤️ para celebrar a história de Uni & Kelly.

---

**Aproveitem compartilhando sua história com amigos e família! 💑**
# caseiiii
