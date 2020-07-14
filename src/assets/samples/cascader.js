export default {
  basicHtml: `
<lol-cascader
    :source.sync="source"
    :selected.sync="selected"
    placeholder="Click to Select">
</lol-cascader>`,
  basicJs: `
data() {
    return {
        selected: [],
        source: [{
          name: '山东',
          children: [{
            name: '烟台',
            children: [
              {name: '芝罘区'},
              {name: '福山区'},
              {name: '开发区'}
            ]
          }, {
            name: '青岛',
            children: [
              {name: '崂山区'},
              {name: '黄岛区'},
              {name: '李沧区'}
            ]
          }]
        }, {
          name: '江苏',
          children: [{
            name: '南京',
            children: [
              {name: '鼓楼区'},
              {name: '玄武区'},
              {name: '建邺区'}
            ]
          }, {
            name: '无锡',
            children: [
              {name: '锡山区'},
              {name: '惠山区'},
              {name: '滨湖区'}
            ]
          }]
        }]
    }
}`,
  loadDataHtml: `
<lol-cascader
    :source.sync="source"
    :selected.sync="selected"
    :on-click-item="loadData"
    placeholder="Click to Select">
</lol-cascader>`,
  loadDataJs: `
created() {
    ajax(0).then((lastSelectedItem) => {
        this.source = lastSelectedItem.map(item => {
            item.children = item.children || []
            return item
        })
    })
},
methods: {
    loadData(clickedItem, updateSource) {
        ajax(clickedItem.id).then(updatedChildren => {
            updateSource(updatedChildren)
        })
    }
}`
}
