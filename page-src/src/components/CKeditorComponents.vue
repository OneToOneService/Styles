<template>
  <div class="content">
    <div class="row">
      <div class="col-md-12">
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
      editorData: '<p>Rich-text editor content.</p>'
    }
  }
}
</script>
