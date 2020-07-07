export default {
  basicHtml: `
<lol-collapse :selected.sync="selectedCollapseItem">
    <lol-collapse-item title="Title1" name="1">Content 1</lol-collapse-item>
    <lol-collapse-item title="Title2" name="2">Content 2</lol-collapse-item>
    <lol-collapse-item title="Title3" name="3">Content 3</lol-collapse-item>
</lol-collapse>
<span>You select: {{selectedCollapseItem}}</span>`,
  basicJs1: `
data() {
    return {
        selectedCollapseItem: ['1', '2']
    }
}`,
  single: `
<lol-collapse :selected.sync="selectedCollapseItem" :multiSelect="false">
    <lol-collapse-item title="Title1" name="1">Content 1</lol-collapse-item>
    <lol-collapse-item title="Title2" name="2">Content 2</lol-collapse-item>
    <lol-collapse-item title="Title3" name="3">Content 3</lol-collapse-item>
</lol-collapse>
<span>You are selecting: {{selectedCollapseItem}}</span>`,
  basicJs2: `
data() {
    return {
        selectedCollapseItem: ['1']
    }
}`
}