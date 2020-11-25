<template>
  <div class="content">
    <div class="row">
      <div class="col-md-12">
        <div class="box box-default color-palette-box">
          <div class="box-header with-border">
            <h3 class="box-title"> Tabs</h3>
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
              <div class="code-container">
                <pre>
                <p>&lt;b-tabs&gt;</p>
<p>&nbsp; &nbsp; &lt;b-tab active&gt;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &lt;template v-slot:title&gt;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; Summary</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &lt;/template&gt;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &lt;p class=&quot;p-3&quot;&gt;Tab Contents 1&lt;/p&gt;</p>
<p>&nbsp; &nbsp; &lt;/b-tab&gt;</p>
<p>&nbsp; &nbsp; &lt;b-tab&gt;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &lt;template v-slot:title&gt;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; Detail</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &lt;/template&gt;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &lt;p class=&quot;p-3&quot;&gt;Tab Contents 2&lt;/p&gt;</p>
<p>&nbsp; &nbsp; &lt;/b-tab&gt;</p>
<p>&lt;/b-tabs&gt;</p>
                </pre>
              </div>
            </div>
            <div class="mbottom-15">
              <h3>Tabs With Icon</h3>
              <b-tabs>
                <b-tab active>
                  <template v-slot:title>
                   <i class="fa fa-envelope-o"></i> Email Addresses & Subject for Response
                  </template>
                  <p class="p-3">Tab Contents 1</p>
                </b-tab>
                <b-tab>
                  <template v-slot:title>
                   <i class="fa fa-paperclip"></i> Details & Attachments
                  </template>
                  <p class="p-3">Tab Contents 2</p>
                </b-tab>
              </b-tabs>
              <div class="code-container">
                <pre>
                <p>&lt;b-tabs&gt;</p>
<p>&nbsp; &nbsp; &lt;b-tab active&gt;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &lt;template v-slot:title&gt;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &lt;i class=&quot;fa fa-envelope-o&quot;&gt;&lt;/i&gt; Email Addresses &amp; Subject for Response</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &lt;/template&gt;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &lt;p class=&quot;p-3&quot;&gt;Tab Contents 1&lt;/p&gt;</p>
<p>&nbsp; &nbsp; &lt;/b-tab&gt;</p>
<p>&nbsp; &nbsp; &lt;b-tab&gt;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &lt;template v-slot:title&gt;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &lt;i class=&quot;fa fa-paperclip&quot;&gt;&lt;/i&gt; Details &amp; Attachments</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &lt;/template&gt;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &lt;p class=&quot;p-3&quot;&gt;Tab Contents 2&lt;/p&gt;</p>
<p>&nbsp; &nbsp; &lt;/b-tab&gt;</p>
<p>&lt;/b-tabs&gt;</p>
                </pre>
              </div>
            </div>
            <div class="mbottom-15">
              <h3>Tabs With Colored Icon And Background</h3>
              <b-tabs class="color-tab-icon box-bg-color">
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
              <div class="code-container">
                <pre>
                <p>&lt;b-tabs class=&quot;color-tab-icon box-bg-color&quot;&gt;</p>
<p>&nbsp; &nbsp; &lt;b-tab active&gt;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &lt;template v-slot:title&gt;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &lt;i class=&quot;fa fa-navicon orange&quot;&gt;&lt;/i&gt; Summary</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &lt;/template&gt;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &lt;p class=&quot;p-3&quot;&gt;Tab Contents 1&lt;/p&gt;</p>
<p>&nbsp; &nbsp; &lt;/b-tab&gt;</p>
<p>&nbsp; &nbsp; &lt;b-tab&gt;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &lt;template v-slot:title&gt;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &lt;i class=&quot;fa fa-ellipsis-h blue&quot;&gt;&lt;/i&gt; Detail</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &lt;/template&gt;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &lt;p class=&quot;p-3&quot;&gt;Tab Contents 2&lt;/p&gt;</p>
<p>&nbsp; &nbsp; &lt;/b-tab&gt;</p>
<p>&lt;/b-tabs&gt;</p>
                </pre>
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
  name: 'TabComponents'
}
</script>
