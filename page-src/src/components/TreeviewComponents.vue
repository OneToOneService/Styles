<template>
  <div class="content">
    <div class="row">
      <div class="col-md-12">
        <div class="usage-consideration">
          <h3>Usage Consideration</h3>
          <p class="mbottom-15">
            The treeview has been used in topic selection.
          </p>
        </div>
        <div class="box box-default color-palette-box">
          <div class="box-header with-border">
            <h3 class="box-title">Treeview</h3>
          </div>
          <div class="box-body">
            <div class="row">
              <div class="col-md-12">
                <div class="tree-block">
                    <v-tree ref='tree1' :canDeleteRoot="true" :data='treeData1' :draggable='true' :tpl='tpl' :halfcheck='true' :multiple="true"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      searchword: '',
      initSelected: ['All Topic'],
      treeData1: [{
        title: 'All Topic',
        expanded: true,
        children: [{
          title: '_Feedback',
          expanded: true,
          children: [{
            title: 'Newsletter Subscription'
          }, {
            title: '_Spam'
          }, {
            title: '_Undeliverable'
          }]
        }, {
          title: 'Account Questions',
          children: [{
            title: "<span style='color: red'>Orders</span>"
          }, {
            title: "<span style='color: red'>Refunds</span>"
          }]
        }]
      }],
      treeData2: [{
        title: 'All Topic',
        expanded: false,
        async: true
      }],

      treeData3: [{
        title: 'node1',
        expanded: true,
        children: [{
          title: 'node 1-1',
          expanded: true,
          children: [{
            title: 'node 1-1-1'
          }, {
            title: 'node 1-1-2'
          }, {
            title: 'node 1-1-3'
          }]
        }]
      }]
    }
  },
  methods: {
    nodechekced (node, v) {
    },
    tpl (node, ctx) {
      let titleClass = node.selected ? 'node-title node-selected' : 'node-title'
      if (node.searched) titleClass += ' node-searched'
      return <span>
        <span class={titleClass} domPropsInnerHTML={ node.title } onClick={ () => {
          this.$refs.tree1.nodeSelected(node)
        }}></span>
      </span>
    },
    async asyncLoad1 (node) {
      this.$set(node, 'loading', true)
      const pro = new Promise((resolve, reject) => {
        setTimeout(resolve, 2000, ['async node1', 'async node2'])
      })
      this.$refs.tree1.addNodes(node, await pro)
      this.$set(node, 'loading', false)
    },
    async asyncLoad2 (node) {
      this.$set(node, 'loading', true)
      this.$set(node, 'loading', false)
    },
    search () {
      this.$refs.tree1.searchNodes(this.searchword)
    }
  }
}
</script>
<style>
.tree-block{
  float: left;
  width: 33%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px dotted #ccccdd;
  overflow: auto;
  height: 800px;
}
.treebtn1{
  background-color: transparent;
  border: 1px solid #ccc;
  padding: 1px 3px;
  border-radius: 5px;
  margin-right: 5px;
  color: rgb(148, 147, 147);

}
.treebtn2{
   background-color: transparent;
   border: 1px solid #ccc;
   padding: 3px 5px;
   border-radius: 5px;
   margin-left: 5px;
  color: rgb(97, 97, 97);

}
.treebtn3{
 background-color: transparent;
 border: 1px solid #ccc;
 padding: 3px 5px;
 border-radius: 5px;
 margin-left: 5px;
  color: rgb(63, 63, 63);

}
.tree-search-input{
  width: 70%;
  padding: 6px 8px;
  outline: none;
  border-radius: 6px;
  border:1px solid #ccc;
}
.tree-search-btn{
width: 25%;
padding: 6px 8px;
outline: none;
border-radius: 6px;
background-color: rgb(218, 218, 218);
border:1px solid rgb(226, 225, 225);
color: rgb(117, 117, 117);
}
</style>
