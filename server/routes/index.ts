const getAuthor = async (ctx, next) => {
	ctx.body = {
		name: 'devlee',
		email: 'devlee@outlook.com'
	};
	await next();
};

export const init = (router) => {
	router.get('/', getAuthor);
};
	