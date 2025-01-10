# bellatrix-api

## Comandos

### Instalar dependências

yarn

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

### Login

Endpoint: /user POST

Body:

```json
{
  "email": "guns@roses.com",
  "password": "MySweetChild"
}
```

Response:

Status: 200 OK

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imd1bnNAcm9zZXMuY29tIiwiaWF0IjoxNjY1NDQyODAyLCJleHAiOjE2NjU1MjkyMDJ9.JxpA6Xmd0tEHP2VHpcNVQQBbp3iKc3X-njQGJcQ-zec"
}
```

### Buscar revisões

Endpoint: /review GET

Response:
Status: 200 OK
Body:

```json
[
  {
    "_id": "677ec3ed1cf3102c400989bd",
    "userId": "677e6e681cf3102c400989ae",
    "title": "Title",
    "text": "editedText",
    "firstDate": "2025/01/08",
    "reviewDays": [1, 1, 3, 5],
    "reviewTimes": 0,
    "deletedAt": null,
    "createdAt": "2025-01-08T18:29:01.714Z"
  },
  {
    "_id": "677ec44f1cf3102c400989c9",
    "userId": "677e6e681cf3102c400989ae",
    "title": "Title",
    "text": "text",
    "firstDate": "2025/01/08",
    "reviewDays": [1, 1, 3, 5],
    "reviewTimes": 0,
    "deletedAt": null,
    "createdAt": "2025-01-08T18:30:39.958Z"
  }
]
```

### Criar revisão

Endpoint: /review POST

Body:

```json
{
  "title": "Title",
  "text": "text",
  "reviewDays": [1, 1, 3, 5],
  "firstDate": "2025/01/08",
  "reviewTimes": 0
}
```

Response:
Status: 201 Created
Body:

```json
{
  "userId": "677e6e681cf3102c400989ae",
  "title": "Title",
  "text": "text",
  "firstDate": "2025/01/08",
  "reviewDays": [1, 1, 3, 5],
  "reviewTimes": 0,
  "deletedAt": null,
  "_id": "677ec44f1cf3102c400989c9",
  "createdAt": "2025-01-08T18:30:39.958Z"
}
```

### Modificar uma revisão

Endpoint: /reviews/:id PATCH

Body:

{
"text":"editedText"
}

Response:
Status: 200 OK
Body:

```json
{
  "userId": "677e6e681cf3102c400989ae",
  "title": "Title",
  "text": "editedText",
  "firstDate": "2025/01/08",
  "reviewDays": [1, 1, 3, 5],
  "reviewTimes": 0,
  "deletedAt": null,
  "_id": "677ec44f1cf3102c400989c9",
  "createdAt": "2025-01-08T18:30:39.958Z"
}
```

### Exluir uma revisão

/reviews/:id DELETE

Response:
Status: 204 No Content
