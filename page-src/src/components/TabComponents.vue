<template>
  <div class="content">
    <div class="row">
      <div class="col-md-12">
        <div class="box box-default color-palette-box">
          <div class="box-header with-border">
            <h3 class="box-title"><i class="fa fa-circle-o"></i> Tabs</h3>
          </div>
          <div class="box-body">
            <div class="mbottom-15">
              <b-tabs>
                <b-tab active>
                  <template v-slot:title>
                    Summary
                  </template>
                  <p class="p-3">Tab Contents 1</p>
                </b-tab>
                <b-tab>
                  <template v-slot:title>
                    Detail
                  </template>
                  <p class="p-3">Tab Contents 2</p>
                </b-tab>
              </b-tabs>
            </div>
            <div class="mbottom-15">
              <h3>Tabs With Colored Icon</h3>
              <b-tabs class="color-tab-icon">
                <b-tab active>
                  <template v-slot:title>
                   <i class="fa fa-navicon orange"></i> Summary
                  </template>
                  <p class="p-3">Tab Contents 1</p>
                </b-tab>
                <b-tab>
                  <template v-slot:title>
                   <i class="fa fa-ellipsis-h blue"></i> Detail
                  </template>
                  <p class="p-3">Tab Contents 2</p>
                </b-tab>
              </b-tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TabComponents'
}
</script>
