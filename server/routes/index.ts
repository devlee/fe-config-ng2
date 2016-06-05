import views = require('co-views');

// function

const getAuthorData: any = () => {
  return {
    name: 'devlee',
    email: 'devlee@outlook.com'
  };
};

// router

const render = views('views', {
  map: {
    html: 'swig'
  },
  default: 'html',
  locals: {
    title: 'fe-config-ng2'
  }
});

const renderIndex = async (ctx, next) => {
  ctx.body = await render('index', getAuthorData());
};

const getAuthor = async (ctx, next) => {
  ctx.body = getAuthorData();
  await next();
};

export const init = (router) => {
  router.get('/*', renderIndex);
  router.post('/api/author', getAuthor);
};
