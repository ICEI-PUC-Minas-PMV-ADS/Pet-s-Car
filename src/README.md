# Instruções de utilização

## Instalação do Aplicativo

- Abra o arquivo PetsCarApp pelo terminal.
- Execute o comando `npm install`.
- Após isso, execute o comando `npx expo start`.
- Abra o aplicativo Expo Go no celular e leia o QR Code gerado pelo comando anterior.

O aplicativo também poderá ser testado utilizando o arquivos gerados para Android e iOS, basta acessar a pasta <a href="BuildsTest">BuildsTest</a>.

## Histórico de versões

### [1.0.0] - 07/05/2023

#### Adicionado

- Adicionado o desenvolvimento front-end de todas as telas e a navegação das telas.

### [1.5.0] - 04/06/2023

#### Adicionado

- Adicionado a configuração para integrar com o banco de dados Firebase;
- Adicionado as requisições para o database de acordo com as necessidades de cada tela;
- Adicionado a validação dos campos obrigatórios e nos formatos dos campo de e-mail, senha, nome e telefone;
- Adicionado tratamento de erros de requisição e listagens vazias retornadas pelas requisições;
- Adicionado as mensagens de confirmação de cadastros, edições e exclusões;
- Adicionado o refinamento das lógicas da aplicação;
- Adicionado loadings para todas as telas que necessitam de atualização de dados vindo do database.
