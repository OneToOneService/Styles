<template>
<div class="content">
   <div class="row">
      <div class="col-md-12">
         <div class="box box-primary">
            <div class="box-header">
               <h3 class="box-title"><i class="fa fa-circle-o"></i> Broadcast Error Messages </h3>
            </div>
            <div class="box-body  table-responsive">
               <div class="box-body">
                  <h3>Dismissable alert messages</h3>
                  <p>Broadcast message are global and are not dismissable and can be used with text or without text.</p>
                  <b-alert show fade variant="danger" dismissible><h4><i class="icon fa fa-ban"></i> Error Alert!</h4> Danger alert preview. This alert is used or global error message.</b-alert>
                  <b-alert show fade variant="info" dismissible><h4><i class="icon fa fa-info"></i> Information Alert!</h4> Info alert preview. This alert is used for global information messages.</b-alert>
                  <b-alert show fade variant="warning" dismissible><h4><i class="icon fa fa-warning"></i> Warning Alert!</h4> Warning alert preview. This alert is used for global warning messages.</b-alert>
                  <b-alert show fade variant="success" dismissible><h4><i class="icon fa fa-check"></i> Success Alert!</h4> Success alert preview. This alert is used for global success messages.</b-alert>
                  <div class="code-container">
                  <p>&lt;b-alert show fade variant=&quot;success&quot; dismissible&gt;&lt;h4&gt;&lt;i class=&quot;icon fa fa-check&quot;&gt;&lt;/i&gt; Success Alert!&lt;/h4&gt; Success alert preview. This alert is used for global success messages.&lt;/b-alert&gt;</p>
<p><br></p>
                  </div>
                </div>
            </div>
         </div>
         <div class="box box-primary">
            <div class="box-header">
               <h3 class="box-title"> Forms Action Alerts or Error Messages </h3>
            </div>
            <div class="box-body  table-responsive">
               <div class="box-body">
                 <b-alert variant="success" class="form-success" show>Success Message</b-alert>
                  <div class="code-container">
                    <p>&lt;b-alert variant=&quot;success&quot; show&gt;Success Message&lt;/b-alert&gt;</p>
                  </div>
                  <b-alert variant="danger" class="form-danger" show>
                    Error Message!
                  </b-alert>
                  <div class="code-container">
                    <p>&lt;b-alert variant=&quot;danger&quot; show&gt;Error Message&lt;/b-alert&gt;</p>
                  </div>
                  <b-button @click="showAlert" variant="info" class="m-1">
                   Click to see success notice
                  </b-button>
                  <br><br>
                  <b-alert
                  :show="dismissCountDown"
                        dismissible
                        variant="success"
                        @dismissed="dismissCountDown=0"
                        @dismiss-count-down="countDownChanged"
                        class="form-success"
                   >
                        <span>This alert will dismiss after 5 seconds...</span>
                  </b-alert>
                  <div class="code-container">
                    <p>&lt;b-alert :show=&quot;dismissCountDown&quot;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; dismissible</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; variant=&quot;danger&quot;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; @dismissed=&quot;dismissCountDown=0&quot;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; @dismiss-count-down=&quot;countDownChanged&quot;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&gt;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &lt;p&gt;This alert will dismiss after {{ dismissCountDown }} seconds...&lt;/p&gt;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &lt;b-progress</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; variant=&quot;danger&quot;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :max=&quot;dismissSecs&quot;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :value=&quot;dismissCountDown&quot;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; height=&quot;4px&quot;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &gt;&lt;/b-progress&gt;</p>
<p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &lt;/b-alert&gt;</p>
<p><br></p>
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
  name: 'ErrorMessagesComponents',
  data () {
    return {
      dismissSecs: 5,
      dismissCountDown: 0,
      showDismissibleAlert: false
    }
  },
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    }
  }
}
</script>
