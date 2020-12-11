<template>
  <b-container fluid>
    <div class="left-container">
      <div class="left-container-data">
        <div class="logo"><img src="https://i.ibb.co/Lz9sjK1/iservice-logo-blue.png" alt="logo"></div>
        <b-list-group v-b-scrollspy:listgroup-ex>
          <b-list-group-item href="#list-item-buttons" class="active"> Buttons</b-list-group-item>
          <b-list-group-item href="#list-item-colors">Colors</b-list-group-item>
          <b-list-group-item href="#list-item-charts">Charts</b-list-group-item>
          <b-list-group-item href="#list-item-forminput"> Form Inputs</b-list-group-item>
          <b-list-group-item href="#list-item-icons">Icons</b-list-group-item>
          <b-list-group-item href="#list-item-loaders">Loaders</b-list-group-item>
          <b-list-group-item href="#list-item-logos">Logos</b-list-group-item>
          <b-list-group-item href="#list-item-notification">Notifications And Error Messages</b-list-group-item>
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
          <h4 id="list-item-colors" class="mtop-15">Colors</h4>
          <p><ColorsComponents></ColorsComponents></p>
          <h4 id="list-item-charts" class="mtop-15">Charts</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-forminput" class="mtop-15">Form Inputs</h4>
          <p><FormsComponents></FormsComponents></p>
          <h4 id="list-item-icons" class="mtop-15">Icons</h4>
          <p><IconsComponents></IconsComponents></p>
          <h4 id="list-item-loaders" class="mtop-15">Loaders</h4>
          <p><LoadersComponents></LoadersComponents></p>
          <h4 id="list-item-logos" class="mtop-15">Logos</h4>
           <p><LogoComponents></LogoComponents></p>
          <h4 id="list-item-notification" class="mtop-15">Notifications and Alerts</h4>
          <p><NotificationComponents></NotificationComponents></p>
          <h4 id="list-item-panels" class="mtop-15">Panels</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-richtext" class="mtop-15">Rich Text Editors</h4>
          <p><CKeditorComponents></CKeditorComponents></p>
          <h4 id="list-item-tables" class="mtop-15">Tables</h4>
          <p>{{ text }}</p>
          <h4 id="list-item-tabs" class="mtop-15">Tabs</h4>
          <p><TabComponents></TabComponents></p>
          <h4 id="list-item-timeline" class="mtop-15">Timeline</h4>
          <TimelineComponents></TimelineComponents>
          <h4 id="list-item-treeview" class="mtop-15">Treeview</h4>
          <p><TreeviewComponents></TreeviewComponents></p>
          <h4 id="list-item-typography" class="mtop-15">Typography</h4>
          <p>{{ text }}</p>
        </div>
      </div>
    </div>
  </b-container>
</template>
<script>
import ButtonsComponents from './ButtonsComponents'
import ColorsComponents from './ColorsComponents'
import FormsComponents from './FormsComponents'
import CKeditorComponents from './CKeditorComponents'
import NotificationComponents from './NotificationComponents'
import IconsComponents from './IconsComponents'
import LoadersComponents from './LoadersComponents'
import LogoComponents from './LogoComponents'
import TabComponents from './TabComponents'
import TreeviewComponents from './TreeviewComponents'
import TimelineComponents from './TimelineComponents'
export default {
  components: {
    ButtonsComponents,
    ColorsComponents,
    FormsComponents,
    CKeditorComponents,
    NotificationComponents,
    IconsComponents,
    LoadersComponents,
    LogoComponents,
    TabComponents,
    TreeviewComponents,
    TimelineComponents
  },
  data () {
    return {
      text: 'Lorem Ipsum is simply dummy text of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of   of Lorem Ipsum is simply dummy text of  the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
  }
}
</script>
