# API de Gerenciamento de Biblioteca

## 1. Visão Geral

Este projeto consiste em uma API desenvolvida para a gestão de uma biblioteca, incluindo funcionalidades essenciais como gerenciamento de usuários, livros e empréstimos.

## 2. Tecnologias Implementadas

Este projeto foi construído com diversas tecnologias chave:

- **Node.js**: Ambiente de execução para JavaScript no servidor.
- **Express.js**: Framework para aplicações web em Node.js.
- **Sequelize**: ORM utilizado para interagir com o banco de dados.
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional.
- **Nodemon**: Ferramenta para atualização automática do servidor durante o desenvolvimento.
- **Swagger**: Utilizado para documentar a API.

## 3. Procedimentos para Instalação

Para configurar e executar este projeto, siga os passos abaixo:

1. **Clonar o Repositório**:
   Clone o repositório usando o seguinte comando:
   ```bash
   git clone https://github.com/GabrielPVCau/api-library.git
   ```

2. **Instalação de Dependências**:
   Instale todas as dependências necessárias executando:
   ```bash
   npm install
   ```

3. **Configuração do Ambiente**:
   Configure as variáveis de ambiente no arquivo `.env` na raiz do projeto:
   ```bash
   DB_NAME=biblioteca
   DB_USER=postgres
   DB_PASSWORD=123
   DB_HOST=localhost
   DB_PORT=5432
   JWT_SECRET=e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
   ```

4. **Iniciar o Servidor**:
   Execute o servidor utilizando o Nodemon:
   ```bash
   npm start
   ```

5. **Configuração do Banco de Dados**:
   Acesse a rota de instalação para configurar as tabelas no banco de dados:
   ```
   http://localhost:3000/install
   ```

6. **Acesso à Documentação da API**:
   Confira a documentação completa da API em:
   ```
   http://localhost:3000/api-docs
   ```

## 4. Autenticação e Segurança

Para garantir a segurança, alguns endpoints exigem autenticação. Um token JWT é gerado ao efetuar login e deve ser incluído no cabeçalho `Authorization` para acessar esses endpoints.

**Exemplo de Autenticação**:
```
Authorization: Bearer SEU_TOKEN_JWT
```
