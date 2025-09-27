# Projeto 1 - Tabela do Brasileirão (Programação Web Fullstack)

## Visão Geral

Projeto 1 para a disciplina **ES47B-ES71 - Programação Web Fullstack** da Universidade Tecnológica Federal do Paraná (UTFPR), Campus Cornélio Procópio.

A aplicação consiste em uma tabela de classificação do Campeonato Brasileiro de 2023. 
O usuário pode selecionar uma rodada e a tabela é calculada para mostrar a classificação do campeonato atualizada.

- **Single Page Application (SPA)** 
- **React.js** 
- **AJAX**. 

## 🔗 Link para o Deploy

Deploy realizado no GitHub Pages:

**[https://ricardohsousa.github.io/webfullstack-fut/](https://ricardohsousa.github.io/webfullstack-fut/)**

## 🛠️ Tecnologias e Ferramentas

* **React.js**: Biblioteca principal para a construção da interface de usuário.
* **Vite**: Ferramenta de build utilizada para a criação e desenvolvimento do projeto.
* **Material-UI (MUI)**: Biblioteca de componentes para a estilização da interface (Tabelas, Menus, Alertas, etc.).
* **API**: `api-football.com` para obtenção dos dados de partidas e rodadas (Versão Free).
* **Git & GitHub**: Para controle de versão e hospedagem do código-fonte.
* **GitHub Pages**: Plataforma de deploy da aplicação.

## ✅ Atendimento aos Requisitos do Projeto

**Busca com Parâmetros para API**

As chamadas para a API `api-football.com` utilizam parâmetros como `league=71` e `season=2023` para buscar os dados corretos. Com o usuário selecionando uma rodada do campeonato.

## 🚀 Como Executar o Projeto Localmente

Para executar o projeto em sua máquina, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/ricardohsousa/webfullstack-fut.git
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd webfullstack-fut/
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Configure as Variáveis de Ambiente:**
    * Crie um arquivo chamado `.env` na raiz do projeto.
    * Adicione sua chave da API-Football neste arquivo:
        ```
        VITE_API_FOOTBALL_KEY=sua_chave
        ```

5.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    A aplicação estará disponível em `http://localhost:5173`.

## 🧑‍💻 Autor

* Ricardo Henrique