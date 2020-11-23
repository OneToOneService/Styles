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
                  <h3>None dismissable alert messages</h3>
                  <p>Broadcast message are global and are not dismissable and can be used with text or without text.</p>
                  <b-alert show fade variant="danger"><h4><i class="icon fa fa-ban"></i> Error Alert!</h4> Danger alert preview. This alert is used or global error message.</b-alert>
                  <b-alert show fade variant="info"><h4><i class="icon fa fa-info"></i> Information Alert!</h4> Info alert preview. This alert is used for global information messages.</b-alert>
                  <b-alert show fade variant="warning"><h4><i class="icon fa fa-warning"></i> Warning Alert!</h4> Warning alert preview. This alert is used for global warning messages.</b-alert>
                  <b-alert show fade variant="success"><h4><i class="icon fa fa-check"></i> Success Alert!</h4> Success alert preview. This alert is used for global success messages.</b-alert>
                  <div class="code-container">
                    <p>&lt;b-alert show fade variant=&quot;success&quot;&gt;&lt;h4&gt;&lt;i class=&quot;icon fa fa-check&quot;&gt;&lt;/i&gt; Success Alert!&lt;/h4&gt; Success alert preview. This alert is used for global success messages.&lt;/b-alert&gt;</p>
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
  name: 'NotificationComponents',
  data () {
    return {
      dismissSecs: 10,
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
