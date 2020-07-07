export default {
  type: `
<lol-button type="primary">Primary</lol-button>
<lol-button type="success">Success</lol-button>
<lol-button type="warning">Warning</lol-button>
<lol-button type="info">Info</lol-button>
<lol-button type="danger">Danger</lol-button>`,
  icon: `
<lol-button type="primary" icon-name="setting">Setting</lol-button>
<lol-button type="danger" icon-name="delete">Delete</lol-button>`,
  iconPosition: `
<lol-button icon-name="up" icon-position="left">Up</lol-button>
<lol-button icon-name="down" icon-position="right">Down</lol-button>`,
  loading: `
<lol-button
    icon-name="loading"
    :is-loading="true">
    Loading...
</lol-button>`,
  event: `
<lol-button
    @click="isLoading = !isLoading"
    icon-name="loading"
    :is-loading="isLoading">
    Loading...
</lol-button>`,
  group: `
<lol-button-group>
    <lol-button icon-name="add" type="primary" icon-position="left">
        More
    </lol-button>
    <lol-button icon-name="subtract" type="primary" icon-position="right">
        Less
    </lol-button>
</lol-button-group>`
}