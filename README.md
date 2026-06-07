# 🌐 Atmos — Inteligência Espacial para Cidades Inteligentes

> Plataforma de monitoramento urbano em tempo real que combina dados de satélites, inteligência artificial e sensores distribuídos para tornar cidades mais seguras e sustentáveis.

---

## 📋 Descrição

A **Atmos** é uma solução digital desenvolvida como projeto da disciplina de **Front-End Design Engineering** na FIAP, como parte da **Global Solution 2026/1** com o tema *"O Espaço é a Nova Fronteira"*.

O projeto consiste em um site completo e responsivo que apresenta a proposta da plataforma Atmos: conectar tecnologia espacial — como imagens de satélite SAR e dados orbitais — à gestão urbana inteligente. A solução aborda problemas reais como enchentes, ilhas de calor e falhas de infraestrutura, oferecendo monitoramento preditivo com latência média de 30 segundos e precisão de 98%.

O site foi construído exclusivamente com **HTML, CSS e JavaScript puros**, sem uso de frameworks ou bibliotecas externas, aplicando boas práticas de semântica, acessibilidade, responsividade e modularização de código.

---

## 🚀 Funcionalidades

- **Menu de navegação avançado** com painel de pré-visualização das páginas e toggle responsivo
- **Modal de acesso à plataforma** com formulário e alternância de visibilidade da senha
- **Formulário de contato validado** com mensagens de erro inline, custom select acessível e geração de ticket
- **Accordion de FAQ** com fechamento automático do item anterior
- **Popup de integrantes** com gestão de foco, navegação por teclado e fechamento por Escape
- **Dashboard de monitoramento** com navegação entre módulos e mapa interativo
- **Design totalmente responsivo** adaptado para mobile (320px+), tablet e desktop

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Uso |
|---|---|
| HTML5 semântico | Estrutura e marcação das páginas |
| CSS3 modular | Estilização com variáveis, Grid, Flexbox e clamp() |
| JavaScript (ES6+) | Interatividade, validação e manipulação do DOM |
| Google Fonts | Tipografias Manrope e Barlow Condensed |
| Font Awesome 7 | Ícones de interface |
| Git + GitHub | Versionamento e colaboração |

---

## 📁 Estrutura de Pastas

```
globalSolution-2026-FrontEnd-main/
│
├── index.html                        # Página inicial
│
├── pages/
│   ├── equipe.html                   # Página da equipe
│   ├── faq.html                      # Perguntas frequentes
│   ├── contato.html                  # Formulário de contato
│   ├── solucao.html                  # Apresentação da solução
│   └── solucao-dashboard.html        # Dashboard de monitoramento
│
└── assets/
    ├── css/
    │   ├── base/
    │   │   ├── import.css            # Centralizador de imports
    │   │   ├── variables.css         # Variáveis CSS globais (cores, fontes, tokens)
    │   │   ├── reset.css             # Reset e estilos base
    │   │   └── responsive.css        # Todas as media queries
    │   ├── components/
    │   │   ├── menu.css              # Componente de navegação
    │   │   ├── button.css            # Estilos de botões
    │   │   ├── accordion.css         # Componente accordion
    │   │   ├── popup.css             # Popup de integrante
    │   │   ├── login-modal.css       # Modal de acesso
    │   │   ├── eyebrow.css           # Labels de seção
    │   │   └── modules-content.css   # Cards de módulo reutilizáveis
    │   ├── layouts/
    │   │   ├── header.css            # Header global
    │   │   └── footer.css            # Footer global
    │   └── pages/
    │       ├── home.css
    │       ├── equipe.css
    │       ├── faq.css
    │       ├── contato.css
    │       ├── solucao.css
    │       └── solucao-dashboard.css
    │
    ├── js/
    │   ├── components/
    │   │   ├── menu.js               # Toggle do menu e troca de painéis
    │   │   ├── accordion.js          # Accordion com fechamento automático
    │   │   ├── popup.js              # Popup de integrantes com gestão de foco
    │   │   └── login-modal.js        # Abertura/fechamento do modal de login
    │   └── pages/
    │       ├── contato.js            # Validação e submissão do formulário
    │       └── faq.js                # Busca e filtro de perguntas
    │
    └── img/
        ├── logos/                    # Logo e favicon do projeto
        ├── home/                     # Imagens da página inicial
        ├── equipe/                   # Fotos e ícones da equipe
        ├── faq/                      # Imagens da página de FAQ
        ├── contato/                  # Imagens da página de contato
        ├── solucao/                  # Imagens das páginas de solução
        └── login/                    # Imagem do modal de login
```

---

## 🖥️ Como Executar Localmente

Não é necessário instalar dependências. Basta clonar o repositório e abrir o arquivo no navegador:

```bash
# 1. Clone o repositório
git clone https://github.com/pedroamarop/globalSolution-2026-FrontEnd.git

# 2. Acesse a pasta do projeto
cd globalSolution-2026-FrontEnd-main

# 3. Abra o index.html no navegador
# Ou use a extensão Live Server no VS Code para melhor experiência
```

> **Recomendação:** utilize a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no VS Code para evitar restrições de CORS com as imagens locais.

---

## 📸 Imagens do Projeto

### Página Inicial — Hero e Módulos
> Seção principal com call-to-action, estatísticas da plataforma (12+ cidades, 98% precisão, 30s latência) e cards de funcionalidades.

### Dashboard de Monitoramento
> Interface de visualização de riscos urbanos com mapa de São Paulo, navegação por módulos e métricas em tempo real.

### Página da Solução
> Apresentação completa da proposta Atmos: overview tecnológico, linha do tempo de implementação e casos de impacto.

### Formulário de Contato
> Formulário validado com campo custom select, feedback visual de erro e geração de ticket de atendimento.

---

## 👥 Autores e Créditos

| Foto | Nome | RM | Turma | GitHub | LinkedIn |
|---|---|---|---|---|---|
| ![Pedro](./assets/img/equipe/foto-pedro.jpeg) | **Pedro Amaro Pires** | RM570636 | 1TDSPJ | [pedroamarop](https://github.com/pedroamarop) | [pedro-amaro-pires](https://www.linkedin.com/in/pedro-amaro-pires/) |
| ![Matheus](./assets/img/equipe/foto-matheus.jpeg) | **Matheus Matsushita de Souza** | RM570017 | 1TDSPJ | [Matsushita1907](https://github.com/Matsushita1907) | [matheus-matsushita](https://www.linkedin.com/in/matheus-matsushita-de-souza-543269346/) |
| ![Juan](./assets/img/equipe/foto-juan.jpeg) | **Juan Souza Marques** | RM573469 | 1TDSPJ | [juansouzamarques](https://github.com/juansouzamarques) | [juan-marques](https://www.linkedin.com/in/juan-marques-297b293b4/) |
| ![Lucas](./assets/img/equipe/foto-lucas.jpeg) | **Lucas Leite Carlos** | RM571985 | 1TDSPJ | [Leite-1309](https://github.com/Leite-1309) | [lucas-leite-carlos](https://www.linkedin.com/in/lucas-leite-carlos-5b72973a9/) |

---

## 🔗 Repositório

[![GitHub](https://img.shields.io/badge/GitHub-Repositório_Público-181717?style=for-the-badge&logo=github)](https://github.com/pedroamarop/globalSolution-2026-FrontEnd)

> **Link direto:** https://github.com/pedroamarop/globalSolution-2026-FrontEnd

---

## 📬 Contato

Para dúvidas, sugestões ou demonstrações da plataforma Atmos:

- 📧 **Pedro Amaro** — [LinkedIn](https://www.linkedin.com/in/pedro-amaro-pires/) · [GitHub](https://github.com/pedroamarop)
- 📧 **Matheus Matsushita** — theus.matsu@gmail.com · [LinkedIn](https://www.linkedin.com/in/matheus-matsushita-de-souza-543269346/)
- 📧 **Juan Marques** — [LinkedIn](https://www.linkedin.com/in/juan-marques-297b293b4/)
- 📧 **Lucas Leite** — [LinkedIn](https://www.linkedin.com/in/lucas-leite-carlos-5b72973a9/)

---

## 📄 Licença

Projeto desenvolvido para fins acadêmicos — **FIAP Global Solution 2026/1**.  
Todos os direitos reservados aos autores.

---

<p align="center">
  Desenvolvido com 🛰️ pela equipe <strong>Atmos</strong> — FIAP 2026
</p>
