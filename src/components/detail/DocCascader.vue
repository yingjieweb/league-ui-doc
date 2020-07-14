<template>
  <div class="doc-cascader">
    <doc-post>
      <h1>Cascader</h1>

      <h2>Basic</h2>
      <p>You can use Cascader component for displaying different level data.</p>
      <div class="samples">
        <lol-cascader
                :source.sync="source"
                :selected.sync="selected"
                placeholder="Click to Select">
        </lol-cascader>
        <p> You are selecting: {{selected.map(item => item.name).join('/')}} </p>
      </div>
      <p>Here's template codes.</p>
      <pre>
        <code class="html">{{sample.basicHtml}}</code>
      </pre>
      <p>Then define the <code>source</code> and <code>selected</code> in <code>data()</code> function.</p>
      <pre>
        <code class="js">{{sample.basicJs}}</code>
      </pre>

      <h2>Load Data from Server</h2>
      <p>You can bind a listener to fetch data when clicking each item.</p>
      <div class="sample">
        <lol-cascader
                :source.sync="source2"
                :selected.sync="selected2"
                :load-data="loadData"
                placeholder="Click to Select">
        </lol-cascader>
        <p> You are selecting: {{selected2.map(item => item.name).join('/')}} </p>
      </div>
      <p>Pass a function as listener for item click event.</p>
      <pre>
        <code class="html">{{sample.loadDataHtml}}</code>
      </pre>
      <p>Define function <code>loadData</code> in <code>methods</code>.</p>
      <pre>
        <code class="js">{{sample.loadDataJs}}</code>
      </pre>

      <!--Properties-->
      <h2>Properties</h2>
      <table>
        <thead>
        <tr> <th>Property</th> <th>Description</th> <th>Type</th> <th>Default</th> </tr>
        </thead>
        <tbody>
        <tr>
          <td>source</td><td>Data source</td><td>Object</td><td>{}</td>
        </tr>
        <tr>
          <td>selected</td><td>Selected Item</td><td>String, Number</td><td>-</td>
        </tr>
        <tr>
          <td>placeholder</td><td>Placeholder of Input box</td><td>String</td><td>""</td>
        </tr>
        </tbody>
      </table>
    </doc-post>
  </div>
</template>

<script>
  import sample from "../../assets/samples/cascader"
  import district from "../../assets/samples/district"

  function ajax(parentId = 0) {
    return new Promise((success, fail) => {
      setTimeout(() => {
        let result = district.filter((item) => item.parentId === parentId)
        result.forEach(node => {
          node.isLeaf = district.filter(item => item.parentId === node.id).length <= 0
        })
        success(result)
      }, 300)
    })
  }

  export default {
    name: "DocCascader",
    data() {
      return {
        sample,
        selected: [],
        selected2: [],
        source2: [],
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
    },
    created() {
      ajax(0).then((lastSelectedItem) => {
        this.source2 = lastSelectedItem.map(item => {
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
    }
  }
</script>

<style lang="scss" scoped>

</style>