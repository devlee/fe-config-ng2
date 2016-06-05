declare module "co-views" {
	interface IEngineMap {
		html: string
	}
	interface ICoViewsOpts {
		ext?: string,
		default?: string,
		map?: IEngineMap,
		partials?: Object,
		cache?: boolean,
		locals?: Object
	}
	function views(dir?: string, opts?: ICoViewsOpts): {
		(view: string, locals?: Object): any
	};
	export = views;
}
