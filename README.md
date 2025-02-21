# IndicaRank Web

Este projeto é parte do evento Next Level Week (NLW) da Rocketseat. O objetivo do projeto é criar uma aplicação web para gerenciar e visualizar rankings de indicações.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Next.js**: Framework React para renderização do lado do servidor e geração de sites estáticos.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática ao código.
- **Tailwind CSS**: Framework CSS para estilização rápida e eficiente.
- **Axios**: Biblioteca para fazer requisições HTTP.
- **Next Image**: Componente de otimização de imagens do Next.js.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```
/home/vane/Documents/nlw/web
├── public
│   ├── assets
│   │   ├── medal-cooper.svg
│   │   ├── medal-gold.svg
│   │   └── medal-silver.svg
├── src
│   ├── app
│   │   ├── invite
│   │   │   └── [subscriberId]
│   │   │       └── ranking.tsx
│   ├── http
│   │   └── api.ts
│   ├── styles
│   │   └── globals.css
│   └── pages
│       └── index.tsx
└── README.md
```

## Funcionalidades

### Ranking de Indicações

A aplicação exibe um ranking de indicações com base nos dados recebidos de uma API. Cada posição no ranking é destacada com uma medalha correspondente:

- **1º Lugar**: Medalha de Ouro
- **2º Lugar**: Medalha de Prata
- **3º Lugar**: Medalha de Bronze

## Como Executar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/g-bolsoni/nlw-connect.git web
   ```

2. Instale as dependências:

   ```bash
   cd web
   npm install
   ```

3. Clone o repositório do backend:

   ```bash
   git clone https://github.com/rocketseat-education/nlw-connect-node.git server
   ```

4. Suba o Docker com o comando:

   ```bash
   docker compose up -d
   ```

5. Rode as migrations:

   ```bash
   npm run db:migrate
   ```

6. Execute o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

7. Abra o navegador e acesse:
   ```
   http://localhost:3000
   ```

## Contribuição

Se você deseja contribuir com o projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
