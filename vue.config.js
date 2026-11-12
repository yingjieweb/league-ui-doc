const fs = require('fs')
const path = require('path')

const localSource = path.resolve(__dirname, '../league-ui/src')
const useLocalLibrary = fs.existsSync(path.join(localSource, 'entry.js'))

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/league-ui-doc/'
        : '/',
    chainWebpack(config) {
        if (useLocalLibrary) {
            config.resolve.alias
                .set('league-ui$', path.join(localSource, 'entry.js'))
                .set('league-ui/dist/league-ui.css$', path.join(localSource, 'assets/styles/reset.css'))
                .set('vue$', require.resolve('vue/dist/vue.runtime.esm.js'))
        }

        config.plugin('define').tap(([definitions]) => [{
            ...definitions,
            __LEAGUE_UI_LOCAL__: JSON.stringify(useLocalLibrary)
        }])
    },
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