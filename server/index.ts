import * as Koa from 'koa';

import * as Router from 'koa-router';

const siteRoutes = require('./routes');

const app = new Koa();

const router = new Router();

siteRoutes.init(router);

app.use(router.routes()).use(router.allowedMethods());

app.listen(3789, () => {
  console.log('Server started at http://localhost:3789');
});

