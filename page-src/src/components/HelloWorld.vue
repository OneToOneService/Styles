<template>
  <b-container fluid>
    <div class="left-container">
      <div class="left-container-data">
        <div class="logo"><img src="https://i.ibb.co/Lz9sjK1/iservice-logo-blue.png" alt="logo"></div>
        <b-list-group v-b-scrollspy:listgroup-ex>
          <b-list-group-item href="#list-item-buttons" class="active"> Buttons</b-list-group-item>
          <b-list-group-item href="#list-item-colors">Colors</b-list-group-item>
          <b-list-group-item href="#list-item-charts">Charts</b-list-group-item>
          <b-list-group-item href="#list-item-messages">Error Messages</b-list-group-item>
        <b-list-group-item href="#list-item-forminput"> Form Inputs</b-list-group-item>
          <b-list-group-item href="#list-item-icons">Icons</b-list-group-item>
          <b-list-group-item href="#list-item-loaders">Loaders</b-list-group-item>
          <b-list-group-item href="#list-item-logos">Logos</b-list-group-item>
          <b-list-group-item href="#list-item-panels">Panels</b-list-group-item>
          <b-list-group-item href="#list-item-richtext">Rich Text Editor</b-list-group-item>
        <b-list-group-item href="#list-item-tables">Tables</b-list-group-item>
        <b-list-group-item href="#list-item-tabs">Tabs</b-list-group-item>
          <b-list-group-item href="#list-item-timeline">Timeline</b-list-group-item>
          <b-list-group-item href="#list-item-treeview">Treeview</b-list-group-item>
          <b-list-group-item href="#list-item-typography">Typography</b-list-group-item>
        </b-list-group>
      </div>
    </div>
    <div class="right-container">
      <div class="right-container-data">
        <div id="listgroup-ex" class="list-style">
          <h4 id="list-item-buttons">Buttons</h4>
          <p><ButtonsComponents></ButtonsComponents></p>
          <h4 id="list-item-colors">Colors</h4>
          <p><ColorsComponents></ColorsComponents></p>
          <h4 id="list-item-charts">Charts</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-messages">Error Messages</h4>
          <p><ErrorMessagesComponents></ErrorMessagesComponents></p>
          <h4 id="list-item-forminput">Form Inputs</h4>
          <p><FormsComponents></FormsComponents></p>
          <h4 id="list-item-icons">Icons</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-loaders">Loaders</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-logos">Logos</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-panels">Panels</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-richtext">Rich Text Editors</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-tables">Tables</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-tabs">Tabs</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-timeline">Timeline</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-treeview">Treeview</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-typography">Typography</h4>
          <p>{{ text }}</p>

        </div>
      </div>
    </div>
  </b-container>
</template>
<script>
import ButtonsComponents from './ButtonsComponents'
import ErrorMessagesComponents from './ErrorMessagesComponents'
import ColorsComponents from './ColorsComponents'
import FormsComponents from './FormsComponents'
export default {
  components: {
    ButtonsComponents,
    ErrorMessagesComponents,
    ColorsComponents,
    FormsComponents
  },
  data () {
    return {
      text: 'Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of  the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
  }
}
</script>
