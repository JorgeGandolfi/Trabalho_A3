# Trabalho_A3

## Descrição do Projeto

Este projeto foi inicialmente desenvolvido em grupo como parte da avaliação da A3 para a disciplina de **Sistemas Distribuídos e Mobile**, no curso de **Sistemas de Informação**. O commit inicial no GitHub representa esse trabalho coletivo, enquanto os commits subsequentes, realizados pelo criador do diretório, incorporaram ajustes, configurações e novas funcionalidades ao projeto.

O objetivo principal é demonstrar a integração entre um backend robusto, um banco de dados relacional e um frontend moderno, aplicando conceitos de desenvolvimento distribuído e boas práticas de integração contínua.

## Tecnologias Utilizadas

- **Backend:**
  - Estruturado com **controladores** e **rotas** que gerenciam a lógica de negócio e a comunicação com o frontend.
  - Implementa uma API REST para facilitar a troca de informações entre as camadas da aplicação.
  
- **Banco de Dados:**
  - Configurado com **MySQL** para gerenciamento e persistência dos dados.
  - Utilizamos o **Docker** para orquestrar o ambiente do banco, garantindo um setup padronizado e isolado.

- **Frontend:**
  - Desenvolvido com **HTML** para a estruturação das páginas.
  - Utilizamos **CSS** para a estilização e criação de uma interface de usuário intuitiva e responsiva.

## Arquitetura e Integração

A aplicação está dividida em três camadas principais:

1. **Frontend:**  
   - Interface gráfica onde os usuários interagem com a aplicação.
   - Realiza chamadas HTTP para o backend e exibe os dados retornados.

2. **Backend:**  
   - Responsável por receber e processar as requisições do frontend.
   - Contém a lógica de negócio implementada por meio de controladores e rotas.
   - Estabelece comunicação com o banco de dados para operações de leitura e escrita.

3. **Banco de Dados:**  
   - Gerencia a persistência dos dados utilizando o MySQL.
   - O ambiente de banco de dados é configurado e executado através do Docker, o que facilita a manutenção e a replicação do ambiente de desenvolvimento.

### Fluxo de Dados

- **Requisições:**  
  O usuário interage com a interface do frontend, que envia requisições HTTP para o backend.
  
- **Processamento:**  
  O backend recebe essas requisições, processa a lógica necessária através dos controladores e, se necessário, realiza consultas ou atualizações no banco de dados.

- **Resposta:**  
  Após o processamento, o backend retorna os dados ou o status da operação para o frontend, que então apresenta a informação ao usuário.

## Como Executar o Projeto

1. **Pré-requisitos:**
   - Docker e Docker Compose instalados.
   - (Opcional) Ambiente Node.js configurado, caso seja necessário executar ou testar o backend de forma local.

2. **Passos para execução:**
   - **Clone o repositório:**
     ```bash
     git clone https://github.com/JorgeGandolfi/Trabalho_A3.git
     cd Trabalho_A3
     ```
   - **Inicie os serviços utilizando Docker Compose:**
     ```bash
     docker-compose up --build
     ```
   - **Acesse a aplicação:**
     - Abra o navegador e acesse o endereço configurado (por exemplo, `http://localhost:3000`).

## Considerações Finais

Este projeto evidencia a aplicação de conceitos modernos na construção de sistemas distribuídos, integrando de forma eficiente as camadas de frontend, backend e banco de dados. A utilização do Docker para a orquestração do ambiente e do MySQL para a gestão de dados reforça as práticas de desenvolvimento e implantação de soluções escaláveis e consistentes.

Sinta-se à vontade para contribuir, sugerir melhorias ou reportar problemas. Feedbacks são sempre bem-vindos para aprimorarmos o projeto!

