export default {
install: `
$ yarn add league-ui

or

$ npm install league-ui --save`,
importing: `
// Import the library
import LeagueUI from 'league-ui'
import 'league-ui/dist/index.css'

// Use some plugins
Vue.use(LeagueUI.plugins.$lolAlert)

// Register components that you need in the root component
new Vue({
    components: {
        ...LeagueUI.Components
    },
    router,
    render: h => h(App)
}).$mount('#app')`,
    basicHtml: `
<lol-button type="primary">Primary</lol-button>
<lol-button type="success">Success</lol-button>
<lol-button type="info">Info</lol-button>
<lol-button type="warning">Warning</lol-button>
<lol-button type="danger">Danger</lol-button>

<lol-popover position="right">
    <template slot="content">
        <div>Hello, League UI!</div>
    </template>
    <lol-button>Pop It!</lol-button>
</lol-popover>`
}