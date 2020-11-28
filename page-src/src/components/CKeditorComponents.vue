<template>
  <div class="content">
    <div class="row">
      <div class="col-md-12">
      <div class="usage-consideration">
          <h3>Usage Consideration</h3>
          <p class="mbottom-15">
            The ckeditor is used for rich text content.
          </p>
        </div>
        <div class="usage-consideration">
          <h3>Usage Consideration</h3>
          <p>
          Action buttons, like submit, should use the Primary colors.
Delete or Remove buttons that can't be undone are shown using the Danger color.
Actions that are rarely used, like cancel, are shown as a hyper link instead of a button.
          </p>
        </div>
        <div class="box box-default">
          <div class="box-header with-border">
            <h3 class="box-title">Rich Text Editor</h3>
          </div>
          <div class="box-body">
             <ckeditor :editor="editor" v-model="editorData"></ckeditor>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default {
  name: 'CKeditorComponents',
  data () {
    return {
      editor: ClassicEditor,
      editorData: '<p>Rich-text editor content.<br><br><br><br><br><br><br><br></p>'
    }
  }
}
</script>
