export default {
  importing: `
import LeagueUI from 'league-ui'

Vue.use(LeagueUI.plugins.$lolToast)`,
  useHtml: `
<lol-button type="primary" @click="showToast">Toast it</lol-button>`,
  useJs: `
methods: {
    showToast() {
        this.$lolToast({
            type: 'loading',
            message: 'This is a toast message!',
            closeButton: {
                text: 'OK',
                callback(vm) {
                    console.log('Yes')
                }
            }
        })
    }
}`,
  typeHtml: `
<lol-button class="button" type="primary" @click="showToast('info')">Notification</lol-button>
<lol-button class="button" type="success" @click="showToast('success')">Success</lol-button>
<lol-button class="button" type="warning" @click="showToast('warning')">Warning</lol-button>
<lol-button class="button" type="danger" @click="showToast('danger')">Danger</lol-button>
<lol-button class="button" type="primary" @click="showToast('loading')">Loading</lol-button>`,
  typeJs: `
methods: {
    showToast(type) {
        this.$lolToast({
            type: type,
            message: 'This is a toast message!',
            closeButton: {
                text: 'OK',
                callback(vm) {
                    console.log('Yes')
                }
            }
        })
    }
}`
}