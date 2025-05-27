# Projeto Node PagSeguro2

Este projeto é uma aplicação de exemplo para integração com o PagSeguro, utilizando Node.js no backend e uma interface simples em HTML no frontend.

### Instale as dependencias

npm init -y
npm install express axios dotenv cors body-parser

## Estrutura do Projeto
├── .gitignore
├── package.json 
├── client/ 
│ └── index.html 
├── server/ 
    ├── server.js 
    ├── .env 
    ├── controllers/ 
    │ └── paymentController.js 
    ├── routes/ 
    │ └── paymentRoutes.js 
    └── services/ 
        └── pagseguroService.js



### Descrição dos Arquivos

- **client/index.html**: Interface do usuário para realizar pagamentos.
- **server/server.js**: Configuração do servidor Express.
- **server/controllers/paymentController.js**: Controlador responsável por gerenciar as requisições de sessão e pagamento.
- **server/routes/paymentRoutes.js**: Rotas para as operações de pagamento.
- **server/services/pagseguroService.js**: Serviço para comunicação com a API do PagSeguro.
- **server/.env**: Arquivo de variáveis de ambiente contendo credenciais do PagSeguro.

## Pré-requisitos

- Node.js instalado.
- Conta no [PagSeguro Sandbox](https://sandbox.pagseguro.uol.com.br/).

## Configuração

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   cd Projeto-Node-PgSeguro2


###Instale as dependências:

npm install

###Configure as variáveis de ambiente no arquivo server/.env:

PAGSEGURO_EMAIL=seu-email@dominio.com
PAGSEGURO_TOKEN=seu-token-do-pagseguro


###Executando o Projeto

node server/server.js


### Funcionalidades
Obter Sessão: O backend obtém um sessionId do PagSeguro para inicializar a SDK no frontend.
Processar Pagamento: O frontend coleta os dados do cartão e envia para o backend, que processa o pagamento via API do PagSeguro.
### Tecnologias Utilizadas
Backend: Node.js, Express, Axios, dotenv.
Frontend: HTML, JavaScript.
PagSeguro: Integração com a API do PagSeguro Sandbox.
### Observações
Este projeto utiliza o ambiente de sandbox do PagSeguro para testes. Certifique-se de usar credenciais de sandbox.
Não compartilhe suas credenciais do PagSeguro publicamente.
### Licença
Este projeto está licenciado sob a licença ISC. ```
