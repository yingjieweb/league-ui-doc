module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/league-ui-doc/'
        : '/',
    css: {
        loaderOptions: {
            sass: {
                // @ -> /src
                prependData: `
                    @import "@/assets/styles/global.scss";
                    @import "@/assets/styles/reset.scss";
                `
            }
        }
    }
}