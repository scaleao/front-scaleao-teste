# nutricao-inteligente-frontend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Deploy
É necessário apenas rodar o comondo `npm run build` e copiar o conteúdo da pasta `dist` para a raiz do bucket do S3

## Para produção (após os testes)

O arquivo `src/utils/api.ts` deve ter a url (https://localhost:80) alterada para a url final da API
