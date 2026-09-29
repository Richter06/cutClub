# CUT CLUB

> Landing page editorial para uma barbearia fictícia, construída como peça de apresentação visual para o ecossistema Rouxinol.

**CUT CLUB** é um projeto front-end focado em direção de arte, tipografia, movimento e experiência de navegação. A proposta não é representar um sistema de agendamento completo, mas sim demonstrar como uma marca local pode transformar uma landing page em uma experiência digital com identidade própria.

---

## Ficha técnica

| Item | Detalhe |
| --- | --- |
| **Projeto** | CUT CLUB |
| **Categoria** | Landing page / site institucional |
| **Stack** | React + Vite |
| **Linguagem** | JavaScript / JSX |
| **Estilo** | Editorial / streetwear / barbershop |
| **Renderização** | React DOM |
| **Build** | Vite |
| **Tipografia** | Anton + DM Mono |
| **Imagens** | Unsplash |
| **Estado local** | React `useState` |
| **Animações** | CSS + IntersectionObserver + eventos de ponteiro |
| **Responsividade** | Desktop, tablet e mobile |
| **Backend** | Não possui |
| **Banco de dados** | Não possui |
| **Autenticação** | Não possui |
| **API própria** | Não possui |
| **Status** | Protótipo visual / showcase |

---

## Conceito

O CUT CLUB foi pensado para fugir da aparência genérica de sites comerciais.

A direção visual combina:

- preto e tons muito escuros;
- off-white;
- amarelo ácido;
- tipografia display de grande escala;
- tipografia monoespaçada para informações técnicas;
- imagens em escala de cinza;
- composição assimétrica;
- linhas editoriais;
- elementos deslocados;
- microinterações;
- animações de entrada;
- efeitos de hover físicos;
- sensação de pôster/editorial digital.

A intenção é que o usuário perceba a identidade da barbearia antes mesmo de começar a ler o conteúdo.

### Paleta principal

| Cor | Uso |
| --- | --- |
| `#111` | Fundo escuro principal |
| `#151515` | Seções escuras |
| `#f4f0e8` | Off-white / contraste |
| `#e8ff00` | Amarelo ácido / destaque |

### Tipografia

**Anton**

Usada nos títulos grandes, nomes de cortes, chamadas e elementos de impacto.

**DM Mono**

Usada em labels, números, horários, metadados, navegação e textos de apoio.

As fontes são carregadas pelo Google Fonts em `src/index.css`.

---

# Arquitetura

A aplicação é organizada em componentes independentes. Cada grande seção da página possui seu próprio componente React e, na maioria dos casos, seu próprio arquivo CSS.

```text
cutClub/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Hero.jsx
│   │   ├── Hero.css
│   │   ├── Manifesto.jsx
│   │   ├── Manifesto.css
│   │   ├── Services.jsx
│   │   ├── Services.css
│   │   ├── StyleSelector.jsx
│   │   ├── StyleSelector.css
│   │   ├── Gallery.jsx
│   │   ├── Gallery.css
│   │   ├── Crew.jsx
│   │   ├── Crew.css
│   │   ├── Booking.jsx
│   │   ├── Booking.css
│   │   ├── Spot.jsx
│   │   ├── Spot.css
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── Reveal.jsx
│   │   └── Global.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

# Fluxo da aplicação

O ponto de entrada é `src/main.jsx`.

Ele cria a raiz React em `#root`, envolve a aplicação em `StrictMode` e carrega `App.jsx`.

O `App.jsx` funciona como o compositor principal da página:

```text
Header
  ↓
Hero
  ↓
Manifesto
  ↓
Services
  ↓
StyleSelector
  ↓
Gallery
  ↓
Crew
  ↓
Booking
  ↓
Spot
  ↓
Footer
```

Não existe roteamento entre páginas. A experiência é uma única landing page com navegação por âncoras.

---

# Seções

## 00 — Header

O cabeçalho fica fixo no topo da viewport.

### Recursos

- marca CUT CLUB;
- navegação por âncoras;
- CTA de booking;
- `mix-blend-mode: difference` para adaptação visual sobre diferentes fundos;
- menu mobile em tela cheia;
- estado de abertura controlado por `useState`.

### Âncoras

- `#services`
- `#styles`
- `#crew`
- `#spot`
- `#booking`

---

## 00 — Hero

É a principal peça de direção de arte da página.

### Elementos

- título gigante CUT CLUB;
- imagem de barbearia em escala de cinza;
- selo circular "CUT DIFFERENT";
- metadados de localização e conceito;
- CTA para agendamento;
- marquee inferior;
- indicador de scroll;
- textura de ruído;
- movimento baseado na posição do ponteiro.

### Interação de ponteiro

O componente `Hero.jsx` usa `useRef` e `useEffect` para observar `pointermove`.

A posição do cursor é convertida em pequenos deslocamentos:

```text
X → --mx
Y → --my
```

Essas variáveis CSS movimentam a imagem principal de forma sutil, criando profundidade sem recorrer a uma biblioteca de animação.

---

## 01 — Manifesto

Seção de posicionamento da marca.

Conteúdo central:

> Não é só cabelo.  
> É presença.

A seção utiliza amarelo ácido como fundo e uma composição dividida entre:

- mensagem principal;
- texto institucional;
- bloco lateral "BUILT FOR THE STREETS".

A tipografia grande recebe animações independentes para permitir controle separado das duas linhas principais.

---

## 02 — Services

Apresenta os quatro serviços do protótipo:

| Serviço | Descrição | Preço | Duração |
| --- | --- | ---: | ---: |
| THE CUT | Corte + acabamento | R$ 45 | 45 min |
| THE BEARD | Barba + toalha quente | R$ 30 | 30 min |
| THE COMBO | Corte + barba | R$ 65 | 70 min |
| THE DETAIL | Acabamento + desenho | R$ 20 | 20 min |

Os dados são mantidos em um array dentro de `Services.jsx`, e renderizados com `map()`.

### Interações

Ao passar o cursor sobre um serviço:

- a linha recebe fundo amarelo;
- o conteúdo sofre pequeno deslocamento;
- o CTA de seta pode rotacionar;
- a composição ganha uma resposta física sem alterar sua estrutura.

---

## 03 — Style Selector

É a seção interativa do projeto.

Os quatro estilos disponíveis são:

1. FADE
2. CLASSIC
3. TEXTURED
4. STREET

O estado atual é controlado por:

```jsx
const [active, setActive] = useState(0)
```

O índice ativo determina:

- imagem;
- número;
- nome;
- descrição;
- conteúdo do CTA.

Os quatro botões inferiores funcionam como tabs visuais.

Não existe biblioteca externa de tabs: a interação é implementada diretamente com React.

---

## 04 — Gallery / Archive

A galeria possui **12 imagens**.

Ela é dividida em duas partes:

### Featured

As quatro primeiras imagens recebem uma composição editorial de 12 colunas.

As posições são deliberadamente assimétricas:

- `gallery-card-1`
- `gallery-card-2`
- `gallery-card-3`
- `gallery-card-4`

Cada uma possui proporções e offsets diferentes.

### Archive Feed

As oito imagens restantes formam um segundo bloco com outra distribuição de grid.

A ideia é evitar que a galeria pareça apenas uma sequência repetitiva de cards.

### Interações

Cada imagem possui:

- grayscale inicial;
- aumento de escala no hover;
- retorno parcial de cor;
- overlay;
- movimento do título;
- movimento do índice;
- pequeno deslocamento do próprio card.

Em telas menores, a composição muda para grids de uma ou duas colunas.

---

## 05 — Crew

Apresenta três integrantes fictícios:

- MARCOS — FADE / DESIGN
- CAIO — CLASSIC / SCISSOR
- LEO — BEARD / TEXTURE

Cada membro possui:

- fotografia;
- identificação numérica;
- nome;
- especialidade;
- indicação de disponibilidade.

As imagens começam em escala de cinza e recebem leve recuperação de cor no hover.

---

## 06 — Booking

É o principal CTA comercial do protótipo.

A composição usa:

- fundo amarelo ácido;
- título gigante;
- cartão preto inclinado;
- CTA para WhatsApp;
- horário de funcionamento.

O cartão possui movimento de rotação e elevação no hover.

### Importante

O link atual do WhatsApp é apenas um placeholder:

```text
https://wa.me/
```

Antes de transformar o projeto em um site real, esse endereço deve ser substituído pelo número comercial correto.

---

## 07 — The Spot

Apresenta o espaço físico da barbearia.

Inclui:

- fotografia;
- descrição;
- endereço;
- horário;
- CTA "COMO CHEGAR".

Os dados atuais são fictícios:

```text
R. EXEMPLO, 120
FORTALEZA — CE
SEG — SÁB / 09:00 — 20:00
```

O CTA ainda aponta para a área de booking e deve ser conectado a um serviço de mapas quando houver endereço real.

---

## Footer

O rodapé encerra a experiência com:

- marca;
- localização;
- ano;
- tipografia em escala extrema;
- links para Instagram;
- booking;
- retorno ao topo.

O Instagram também é um placeholder no estado atual.

---

# Sistema de animações

O projeto evita dependências como GSAP, Framer Motion ou Three.js.

As animações são construídas com três mecanismos principais.

## 1. CSS transitions / keyframes

Usadas para:

- hover;
- entrada de títulos;
- escala de imagens;
- deslocamentos;
- rotação;
- marquee;
- microinterações.

As curvas utilizadas priorizam movimentos rápidos no início e desaceleração suave, principalmente:

```css
cubic-bezier(.16, 1, .3, 1)
```

---

## 2. Reveal + IntersectionObserver

`Reveal.jsx` é um componente reutilizável.

Ele observa quando um elemento entra na viewport:

```text
elemento fora da viewport
        ↓
IntersectionObserver
        ↓
is-visible
        ↓
transição CSS
```

O componente também aceita `delay`, permitindo criar entradas escalonadas.

Exemplo conceitual:

```jsx
<Reveal delay={120}>
  ...
</Reveal>
```

Isso mantém a lógica de viewport fora dos componentes de conteúdo.

---

## 3. Movimento baseado no ponteiro

O Hero é a única região que acompanha diretamente o ponteiro.

O movimento é propositalmente pequeno para preservar a legibilidade e evitar que a interação pareça um efeito decorativo excessivo.

---

# Acessibilidade

O projeto já possui algumas decisões de acessibilidade importantes:

- navegação com elementos `<a>`;
- botão mobile com `aria-expanded`;
- botão mobile com `aria-label`;
- navegação com `aria-label`;
- tabs do Style Selector usam `role="tablist"` e `role="tab"`;
- `aria-selected` identifica a tab ativa;
- imagens possuem `alt`;
- imagens decorativas do Hero usam descrição acessível via `role="img"`;
- existe tratamento para `prefers-reduced-motion`.

O suporte a redução de movimento é aplicado globalmente e também possui regras específicas na galeria.

---

# Responsividade

O projeto possui breakpoints principais em:

- `800px`
- `750px`
- `700px`
- `900px` para ajustes específicos da galeria.

### Desktop

Prioriza:

- grids assimétricos;
- tipografia gigante;
- composição horizontal;
- offsets;
- elementos sobrepostos.

### Mobile

A interface adapta:

- navegação para menu;
- grids para uma ou duas colunas;
- tamanhos tipográficos;
- posicionamento da imagem do Hero;
- informações da equipe;
- booking;
- galeria;
- detalhes do espaço.

A intenção é manter a identidade visual, não simplesmente reduzir todos os elementos proporcionalmente.

---

# Estilo de código

A organização segue alguns princípios simples:

### Componentização

Cada seção visual importante é um componente próprio.

### Dados próximos da interface

Informações pequenas e específicas da seção ficam em arrays dentro do próprio componente, como:

```jsx
const services = [...]
const styles = [...]
const shots = [...]
const crew = [...]
```

Isso evita criar uma camada de dados desnecessária para um projeto que atualmente é estático.

### CSS por componente

Os estilos ficam próximos da seção que controlam:

```text
Hero.jsx      → Hero.css
Services.jsx  → Services.css
Gallery.jsx   → Gallery.css
...
```

O `Global.css` concentra apenas regras realmente compartilhadas.

---

# Dependências

## Runtime

```text
react        ^19.2.8
react-dom    ^19.2.8
```

## Desenvolvimento

```text
vite                    ^8.3.0
@vitejs/plugin-react     ^6.1.1
eslint                  ^10.10.0
@eslint/js              ^10.0.1
eslint-plugin-react-hooks ^7.1.1
eslint-plugin-react-refresh ^0.5.6
globals                  ^17.12.0
```

O projeto não depende de bibliotecas externas de animação, UI, roteamento ou gerenciamento global de estado.

---

# Scripts

Instalação:

```bash
npm install
```

Desenvolvimento:

```bash
npm run dev
```

Build de produção:

```bash
npm run build
```

Preview do build:

```bash
npm run preview
```

Lint:

```bash
npm run lint
```

---

# Como executar

## 1. Clonar

```bash
git clone https://github.com/Richter06/cutClub.git
cd cutClub
```

## 2. Instalar dependências

```bash
npm install
```

## 3. Iniciar o ambiente

```bash
npm run dev
```

O Vite disponibilizará o endereço local indicado no terminal.

---

# Build e publicação

O projeto utiliza o fluxo padrão do Vite.

```bash
npm run build
```

O resultado é gerado na pasta:

```text
dist/
```

A pasta `dist` pode ser publicada em plataformas compatíveis com aplicações front-end estáticas, como Vercel, Netlify, Cloudflare Pages ou GitHub Pages com a configuração adequada.

Não existe servidor Node próprio no projeto.

---

# Fontes externas

Atualmente, alguns recursos são carregados diretamente de serviços externos.

### Google Fonts

As famílias Anton e DM Mono são importadas em:

```text
src/index.css
```

### Unsplash

As imagens utilizadas no protótipo são referenciadas por URLs do Unsplash diretamente nos componentes.

Isso significa que o projeto não possui atualmente uma biblioteca local de imagens da barbearia.

Para produção, recomenda-se substituir as imagens de demonstração por assets próprios e controlados pelo projeto.

---

# Estado atual e dados fictícios

Este repositório representa uma **peça de showcase**, portanto algumas informações foram deliberadamente deixadas como conteúdo demonstrativo.

Devem ser substituídos antes de uma publicação comercial:

- preços;
- nomes da equipe;
- endereço;
- horário;
- número do WhatsApp;
- Instagram;
- imagens;
- favicon/título final;
- textos institucionais, caso o cliente real tenha outra identidade.

O projeto não possui backend para validar ou processar reservas.

O botão de booking atualmente funciona apenas como navegação/placeholder.

---

# Decisões técnicas importantes

## Sem framework de animação

A escolha de CSS + IntersectionObserver reduz o peso da aplicação e mantém as animações diretamente relacionadas ao layout.

## Sem gerenciamento global de estado

Existe apenas estado local relevante no Style Selector e no menu mobile.

Adicionar Redux, Zustand ou outra solução global não traria benefício para a arquitetura atual.

## Sem roteamento

Toda a experiência está concentrada em uma única landing page. A navegação por âncoras é suficiente para o escopo atual.

## Sem backend

O projeto foi intencionalmente mantido como front-end visual.

Caso seja transformado em produto real, o backend pode ser introduzido posteriormente para:

- reservas;
- disponibilidade;
- cadastro de clientes;
- gestão de serviços;
- horários;
- equipe;
- painel administrativo;
- integração com WhatsApp;
- banco de dados.

---

# Pontos de atenção para evolução

### 1. Dados reais

Substituir todo conteúdo fictício por dados fornecidos pelo negócio.

### 2. Imagens locais

Migrar imagens críticas para assets próprios ou CDN controlada.

### 3. Booking real

Definir se o fluxo final será:

- WhatsApp;
- formulário;
- sistema externo;
- agenda própria;
- integração com calendário.

### 4. SEO

Para uma versão comercial, revisar:

- `<title>`;
- meta description;
- Open Graph;
- favicon;
- dados estruturados;
- textos alternativos;
- headings;
- canonical;
- sitemap.

### 5. Performance

Avaliar:

- compressão das imagens;
- formatos WebP/AVIF;
- lazy loading;
- carregamento de fontes;
- cache;
- impacto das imagens externas.

### 6. Conteúdo

O projeto já possui estrutura para crescer sem transformar o código em uma página monolítica.

---

# Estrutura visual resumida

```text
┌─────────────────────────────────────┐
│ HEADER                              │
├─────────────────────────────────────┤
│ HERO                                │
│ CUT CLUB                            │
├─────────────────────────────────────┤
│ MANIFESTO                           │
│ Não é só cabelo. É presença.       │
├─────────────────────────────────────┤
│ SERVICES                            │
│ 04 serviços                         │
├─────────────────────────────────────┤
│ STYLE SELECTOR                      │
│ 04 estilos interativos              │
├─────────────────────────────────────┤
│ GALLERY                             │
│ 04 featured + 08 archive            │
├─────────────────────────────────────┤
│ CREW                                │
│ 03 profissionais                    │
├─────────────────────────────────────┤
│ BOOKING                             │
│ CTA principal                       │
├─────────────────────────────────────┤
│ THE SPOT                            │
│ espaço + endereço + horário         │
├─────────────────────────────────────┤
│ FOOTER                              │
└─────────────────────────────────────┘
```

---

# Objetivo do projeto

O CUT CLUB demonstra uma abordagem de desenvolvimento em que **identidade visual, composição, interação e código trabalham juntos**.

Mais do que uma coleção de componentes React, o projeto foi estruturado para mostrar:

- domínio de componentização;
- organização de CSS;
- criação de interfaces responsivas;
- manipulação de estado local;
- IntersectionObserver;
- eventos de ponteiro;
- animações CSS;
- microinterações;
- acessibilidade básica;
- construção de layouts editoriais;
- preocupação com experiência visual.

O resultado é uma landing page que pode servir como base para um negócio real de barbearia e, ao mesmo tempo, como demonstração de capacidade de front-end e direção visual.

---

## Status

**Projeto em evolução — showcase front-end.**

A branch principal é `main`.

Última análise técnica deste README: **29/09/2026**.
