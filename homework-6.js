const Koa = require('koa');
const app = new Koa();

const port = 3000;

app.use(ctx => {
    if (ctx.originalUrl === '/') {
        ctx.body = '<h2>Index Page</h2>';
        ctx.response.type = 'text/html';
        ctx.body = '<h2>Index Page</h2>';
    } else if (ctx.originalUrl === '/about') {
        ctx.body = '<h2>About Page</h2>';
        ctx.response.type = 'text/html';
        ctx.body = '<h2>About Page</h2>';
    } else {
        ctx.body = '<h2>404 Page</h2>';
        ctx.response.type = 'text/html';
        ctx.body = '<h2>404 Page</h2>';
    }
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})
