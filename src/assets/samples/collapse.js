export default {
  basicHtml: `
<lol-collapse-group :selected.sync="selectedCollapse">
    <lol-collapse title="Title1" name="1"> <div>Content 1</div> </lol-collapse>
    <lol-collapse title="Title2" name="2"> <div>Content 2</div> </lol-collapse>
    <lol-collapse title="Title3" name="3"> <div>Content 3</div> </lol-collapse>
</lol-collapse-group>
<span>You select: {{selectedCollapse}}</span>`,
  basicJs: `
data() {
    return {
        sample,
        selectedCollapse: ['1', '2']
    }
}`,
  single: `
<lol-collapse-group :selected.sync="selectedCollapse" :multiSelect="false">
    <lol-collapse title="Title1" name="1"> <div>Content 1</div> </lol-collapse>
    <lol-collapse title="Title2" name="2"> <div>Content 2</div> </lol-collapse>
    <lol-collapse title="Title3" name="3"> <div>Content 3</div> </lol-collapse>
</lol-collapse-group>
<span>You are selecting: {{selectedCollapse}}</span>`
}