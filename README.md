# bellatrix-api

## Comandos

### Instalar dependências

yarn

### Criar migrations

yarn db create **nome**

### Rodar migrations

yarn migrate

### Rodar servidor de desenvolvimento

yarn dev

## Rotas

### Criar usuário

Endpoint: /user POST

Body:

```json
{
  "name": "Axl Rose",
  "email": "guns@roses.com",
  "password": "MySweetChild"
}
```

Response:

Status: 201 Created

```json
{
  "id": "630caa263662b7fe2637d1af",
  "name": "Axl Rose",
  "email": "guns@roses.com"
}
```

## To-do

### Rota de login

Criar rota de login, recebendo e-mail e senha e retornando um token JWT

### Middleware para verificar token

Criar um middleware que receba o token do header da requisição e adicione informações de cadastro ao request

### Rota de perfil

Criar rota que retorne as informações do usuário logado

### Criar interface para revisões

Interface deve incluir nome, descrição, momento de criação, um array numérico de dias para a próxima revisão, data da primeira revisão, uma data de criação e uma data de deleção

### Criar rota para criar revisões

/reviews POST

### Criar rota que retorne as revisões

/reviews GET

Retorna todas as revisões do usuário

### Criar rota para modificar uma revisão

/reviews/:id PATCH

Permite alterar as informações de uma revisão

### Criar rota para exluir uma revisão

/reviews/:id DELETE

Será um soft delete, permitindo que o usuário recupere as revisões deletadas, em um versão futura
