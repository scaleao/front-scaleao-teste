<h1>Como rodar localmente o FRONT: </h1>
<h3>REQUISITOS:</h3>
<ul>
<li>Node 16.x</li>
<li>NPM</li>
</ul>
<h3>COMANDOS:</h3>
<p>Instale as dependencias do projeto: Vue 3.x e Quasar</p>

<h3>CONFIRA O PROJETO HOSPEDADO <a href="http://front-scaleao-teste.s3-website-sa-east-1.amazonaws.com/dashboard">AQUI<a></h3>

```
npm install
```

<p>O build do projeto sera gerado dentro da pasta <code>./dist</code> na raiz do projeto, para <code>gerar o build</code> use:</p>

```
npm run build
```

<p>Para rodar o <code>servidor local</code> use:</p>

```
npm run serve
```

<h3>DICAS UTEIS:</h3>

<h4>A <code>BASEURL</code> do projeto esta configurada em <code>./src/utils/api.ts</code></h4>
<p>O endereço do produção:</p>

```
http://15.229.23.85
```

<p>O endereço de development, usando a API local, acesse o repo <a href="https://github.com/scaleao/back-scaleao-teste#como-rodar-localmente-a-api-">aqui</a></p>

```
http://localhost:80
```