<template>
  <div class="content">
    <div class="row">
      <div class="col-md-12">
        <div class="usage-consideration">
          <h3>Usage Consideration</h3>
          <p class="mbottom-15">
          Action buttons, like submit, should use the Primary colors.
Delete or Remove buttons that can't be undone are shown using the Danger color.
Actions that are rarely used, like cancel, are shown as a hyper link instead of a button.
          </p>
        </div>
        <div class="box box-primary">
          <div class="box-header with-border">
            <h3 class="box-title">  Buttons </h3>
          </div>
          <div class="box-body  table-responsive">
            <table class="table table-bordered text-center">
              <tbody>
                <tr>
                  <th>Normal</th>
                  <th>Small <code>.btn-sm</code></th>
                  <th>X-Small <code>.btn-xs</code></th>
                  <th>Disabled <code>.disabled</code></th>
                </tr>
                <tr>
                  <td>
                    <button type="button" class="btn btn-block btn-default">Default</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-default btn-sm">Default</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-default btn-xs">Default</button>
                  </td>
                   <td>
                    <button type="button" class="btn btn-block btn-default disabled">Default</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b-button class="btn-block btn-primary">Primary</b-button>
                  </td>
                  <td>
                  <b-button size="sm" class="btn-block btn-primary">Primary</b-button>
                  </td>
                  <td>
                  <b-button size="xs" class="btn-block btn-primary">Primary</b-button>
                  </td>
                  <td>
                  <b-button size="xs" disabled  class="btn-block btn-primary">Primary</b-button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button type="button" class="btn btn-block btn-success">Success</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-success btn-sm">Success</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-success btn-xs">Success</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-success disabled">Success</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button type="button" class="btn btn-block btn-info">Info</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-info btn-sm">Info</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-info btn-xs">Info</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-info disabled">Info</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button type="button" class="btn btn-block btn-danger">Danger</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-danger btn-sm">Danger</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-danger btn-xs">Danger</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-danger disabled">Danger</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button type="button" class="btn btn-block btn-warning">Warning</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-warning btn-sm">Warning</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-warning btn-xs">Warning</button>
                  </td>
                  <td>
                    <button type="button" class="btn btn-block btn-warning disabled">Warning</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="">
              <h2 class="action-list-title">Example</h2>
              <p class="action-description">
                iService includes several predefined button styles, each serving its own semantic purpose.
              </p>
              <ul class="item-actions">
                <li>
                  <div>
                    <button class="btn btn-primary" type="button">Save</button>  Save or Add action.
                      <div class="code-container">
                        <p>&lt;b-button class=&quot;btn-block btn-primary&quot;&gt;Primary&lt;/b-button&gt;</p>
                     </div>
                  </div>
               </li>
               <li>
                 <div>
                   <button class="btn btn-danger btn-delete" type="button">Delete...</button>  Delete or Remove action
                   <div class="code-container">
                     <p>&nbsp;&lt;b-button class=&quot;btn-block btn-primary&quot;&gt;Primary&lt;/b-button&gt;</p>
                   </div>
                 </div>
               </li>
               <li>
                 <div>
                   <button class="btn btn-link " type="button">Cancel</button>  Cancel button
                   <div class="code-container">
                     <p>&nbsp;&lt;b-button class=&quot;btn-block btn-primary&quot;&gt;Primary&lt;/b-button&gt;</p>
                   </div>
                 </div>
               </li>
             </ul>
           </div>
         </div>
       </div>
     </div>
     <div class="col-md-12">
       <div class="usage-consideration">
        <h3>Usage Consideration</h3>
        <p class="mbottom-15">
         Split buttons, are used for the buttons with multiple action options.
        </p>
       </div>
       <div class="box">
         <div class="box-header border-primary">
           <h3 class="box-title">Split Buttons</h3>
         </div>
         <div class="box-body">
           <p>Normal split buttons:</p>
           <div class="margin">
             <div class="btn-group">
               <b-button-group>
                 <b-button class="btn-default">Action</b-button>
                 <b-dropdown class="mx-1" right variant="default">
                   <b-dropdown-item>Item 1</b-dropdown-item>
                   <b-dropdown-item>Item 2</b-dropdown-item>
                   <b-dropdown-item>Item 3</b-dropdown-item>
                 </b-dropdown>
               </b-button-group>
             </div>
             <div class="btn-group">
               <div class="btn-group">
               <b-button-group>
                 <b-button class="btn-info">Action</b-button>
                 <b-dropdown class="mx-1" right variant="info">
                   <b-dropdown-item>Item 1</b-dropdown-item>
                   <b-dropdown-item>Item 2</b-dropdown-item>
                   <b-dropdown-item>Item 3</b-dropdown-item>
                 </b-dropdown>
               </b-button-group>
             </div>
             </div>
             <div class="btn-group">
               <b-button-group>
                 <b-button class="btn-danger">Action</b-button>
                 <b-dropdown class="mx-1" right variant="danger">
                   <b-dropdown-item>Item 1</b-dropdown-item>
                   <b-dropdown-item>Item 2</b-dropdown-item>
                   <b-dropdown-item>Item 3</b-dropdown-item>
                 </b-dropdown>
               </b-button-group>
             </div>
             <div class="btn-group">
               <b-button-group>
                 <b-button class="btn-warning">Action</b-button>
                 <b-dropdown class="mx-1" right variant="warning">
                   <b-dropdown-item>Item 1</b-dropdown-item>
                   <b-dropdown-item>Item 2</b-dropdown-item>
                   <b-dropdown-item>Item 3</b-dropdown-item>
                 </b-dropdown>
               </b-button-group>
             </div>
             <div class="btn-group">
               <b-button-group>
                 <b-button class="btn-success">Action</b-button>
                 <b-dropdown class="mx-1" right variant="success">
                   <b-dropdown-item>Item 1</b-dropdown-item>
                   <b-dropdown-item>Item 2</b-dropdown-item>
                   <b-dropdown-item>Item 3</b-dropdown-item>
                 </b-dropdown>
               </b-button-group>
             </div>
           </div>
           <div>
             <textarea class="form-control code-container" cols=40 rows=5><div class="btn-group">
               <b-button-group>
                 <b-button class="btn-success">Action</b-button>
                 <b-dropdown class="mx-1" right variant="success">
                   <b-dropdown-item>Item 1</b-dropdown-item>
                   <b-dropdown-item>Item 2</b-dropdown-item>
                   <b-dropdown-item>Item 3</b-dropdown-item>
                 </b-dropdown>
               </b-button-group>
             </div></textarea>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
</template>
<script>
export default {
  name: 'ButtonsComponents'
}
</script>
