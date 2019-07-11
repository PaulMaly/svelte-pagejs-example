import page from 'page';

import App from './App.svelte';

const app = new App({
	target: document.body
});

page('/posts/:id', ctx => {
    app.$set({ component: import('./pages/Post.svelte'), ...ctx });
});

page('/posts', ctx => {
    app.$set({ component: import('./pages/Posts.svelte'), ...ctx });
});

page('/', ctx => {
    app.$set({ component: import('./pages/Home.svelte'), ...ctx });
});

page.start();

export default app;