<template>
  <div class="content">
    <div class="row">
      <div class="col-md-12">
        <div class="box box-default color-palette-box">
          <div class="box-header with-border">
            <h3 class="box-title"> Loaders</h3>
          </div>
          <div class="box-body">
            <section id="spinner">
              <h3 class="page-header">Spinners</h3>
              <div class="row fontawesome-icon-list">
                <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-circle-o-notch"></i> fa-circle-o-notch</div>
                <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-refresh"></i> fa-refresh</div>
                <div class="col-md-3 col-sm-4"><i class="fa fa-fw fa-spinner"></i> fa-spinner</div>
              </div>
            </section>
          </div>
        </div>
        <div class="box box-default color-palette-box">
          <div class="box-header with-border">
            <h3 class="box-title"> Section Loaders</h3>
          </div>
          <div class="box-body">
            <section id="box-loader">
              <div class="box-placeholder" ng-show="loader">
                <div class="excerpt mbottom-15">
                  <div class="text line"></div>
                  <div class="text line"></div>
                  <div class="text"></div>
                </div>
                <div class="excerpt mbottom-15">
                  <div class="text title line"></div>
                  <div class="text title line"></div>
                  <div class="text"></div>
                </div>
                <div class="excerpt mbottom-15">
                  <div class="text line"></div>
                  <div class="text line"></div>
                  <div class="text title"></div>
                </div>
                <p class="loading-text mbottom-15">
                  Gathering Data..
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LoadersComponents'
}
</script>
