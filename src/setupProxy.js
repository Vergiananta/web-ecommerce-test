const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports=function (app) {

    app.use(
        '/api',

        createProxyMiddleware({
            target:`https://acbc4734fb2b.ngrok.io`,
            changeOrigin:true,
            pathRewrite:{'^/api':''}
        })
    )

}
