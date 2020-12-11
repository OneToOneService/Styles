<template>
  <div class="content">
    <div class="row">
      <div class="col-md-12">
      <div class="usage-consideration">
          <h3>Usage Consideration</h3>
          <p class="mbottom-15">
            Timeline schemes has been used in contact details.
          </p>
        </div>
        <div class="box box-default color-palette-box">
          <div class="box-header with-border">
            <h3 class="box-title">Timeline</h3>
          </div>
          <div class="box-body">
            <time-line></time-line>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TimeLine from './time-line.vue'
export default {
  name: 'TimelineComponents',
  components: {
    TimeLine
  }
}
</script>
