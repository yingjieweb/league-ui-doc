export default {
  basicHtml: `
<lol-tabs :selected="selectedTab">
    <lol-tabs-head>
        <lol-tabs-item name="data">Data</lol-tabs-item>
        <lol-tabs-item name="career">Career</lol-tabs-item>
        <lol-tabs-item name="position">Position</lol-tabs-item>
    </lol-tabs-head>

    <lol-tabs-body>
        <lol-tabs-pane class="pane" name="data">Data</lol-tabs-pane>
        <lol-tabs-pane class="pane" name="career">Career</lol-tabs-pane>
        <lol-tabs-pane class="pane" name="position">Position</lol-tabs-pane>
    </lol-tabs-body>
</lol-tabs>`,
  basicJs: `
data() {
    return {
        selectedTab: 'data'
    }
}`,
  disabledHtml: `
<lol-tabs :selected="selectedTab">
    <lol-tabs-head>
        <lol-tabs-item name="data">Data</lol-tabs-item>
        <lol-tabs-item name="career" disabled>Career</lol-tabs-item>
        <lol-tabs-item name="position">Position</lol-tabs-item>
    </lol-tabs-head>

    <lol-tabs-body>
        <lol-tabs-pane class="pane" name="data">Data</lol-tabs-pane>
        <lol-tabs-pane class="pane" name="career">Career</lol-tabs-pane>
        <lol-tabs-pane class="pane" name="position">Position</lol-tabs-pane>
    </lol-tabs-body>
</lol-tabs>`,
  disabledJs: `
data() {
    return {
        selectedTab: 'data'
    }
}`,
  actionHtml: `
<lol-tabs :selected="selectedTab">
    <lol-tabs-head>
        <lol-tabs-item name="data">Data</lol-tabs-item>
        <lol-tabs-item name="career">Career</lol-tabs-item>
        <lol-tabs-item name="position">Position</lol-tabs-item>
        <template slot="actions">
            <lol-button>Setting</lol-button>
        </template>
    </lol-tabs-head>

    <lol-tabs-body>
        <lol-tabs-pane class="pane" name="data">Data</lol-tabs-pane>
        <lol-tabs-pane class="pane" name="career">Career</lol-tabs-pane>
        <lol-tabs-pane class="pane" name="position">Position</lol-tabs-pane>
    </lol-tabs-body>
</lol-tabs>`,
}