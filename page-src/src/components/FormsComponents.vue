<template>
  <div class="content">
    <div class="row">
      <div class="col-md-6">
        <div class="box box-primary">
          <div class="box-header with-border">
            <h3 class="box-title">Vertical Form Example</h3>
          </div>
          <div class="box-body">
            <div>
              <b-form>
                <b-form-group id="input-group-1" label="Email address" label-for="input-1" label-size="sm" description="We'll never share your email with anyone else.">
                  <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Enter email" size="sm"></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="Your Name" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="form.name"
                    required
                    placeholder="Enter name"
                    size="sm"
                  ></b-form-input>
                </b-form-group>
                 <b-form-group id="input-group-2" label="Discription" label-for="textarea-2">
                  <b-form-textarea
                  id="textarea-1"
                  placeholder="Enter something..."
                  rows="3"
                  size="sm"
                  max-rows="6"
                ></b-form-textarea>
                </b-form-group>
                <b-form-group id="input-group-3" label="Food" label-for="input-3">
                  <b-form-select
                    id="input-3"
                    v-model="form.food"
                    :options="foods"
                    required
                    size="sm"
                  ></b-form-select>
                </b-form-group>
                <b-form-group id="input-group-4">
                  <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                    <b-form-checkbox value="me">Check me out</b-form-checkbox>
                    <b-form-checkbox value="that">Check that out</b-form-checkbox>
                  </b-form-checkbox-group>
                </b-form-group>
                <b-button type="submit" variant="primary" class="mright-15">Submit</b-button>
                <b-link type="reset" variant="info">Cancel</b-link>
              </b-form>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="box box-primary">
          <div class="box-header with-border">
            <h3 class="box-title">Horizontal Form Example</h3>
          </div>
          <div class="box-body">
            <div>
              <b-form-group
                id="fieldset-horizontal"
                label-cols-sm="4"
                label-cols-lg="3"
                description="Let us know your name."
                label="Enter Your Name"
                label-for="input-horizontal"
              >
                <b-form-input id="input-horizontal" size="sm"></b-form-input>
              </b-form-group>
              <b-form-group
                  id="fieldset-horizontal"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  description="Let us know your last name."
                  label="Enter Last Name"
                  label-for="input-horizontal"
                >
                <b-form-input id="input-horizontal" size="sm"></b-form-input>
              </b-form-group>
              <b-form-group
                  id="fieldset-horizontal"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  label="Description"
                  label-for="input-horizontal"
                >
                <b-form-textarea
                id="textarea"
                placeholder="Enter something..."
                rows="3"
                max-rows="6"
                size="sm"
                ></b-form-textarea>
              </b-form-group>
              <b-form-group
                  id="fieldset-horizontal"
                  label-cols-sm="4"
                  label-cols-lg="3"
                  label="Food"
                  label-for="input-horizontal"
                >
                 <b-form-select
                    id="input-3"
                    v-model="form.food"
                    :options="foods"
                    required
                    size="sm"
                  ></b-form-select>
              </b-form-group>
               <b-form-group id="input-group-4">
                  <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                    <b-form-checkbox value="me">Check me out</b-form-checkbox>
                    <b-form-checkbox value="that">Check that out</b-form-checkbox>
                  </b-form-checkbox-group>
                </b-form-group>
                <b-button type="submit" variant="primary" class="mright-15">Submit</b-button>
                <b-link type="reset" variant="info">Cancel</b-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="box box-primary">
          <div class="box-header with-border">
            <h3 class="box-title">Other Form Elements</h3>
          </div>
          <div class="box-body">
            <h3>Required Input</h3>
            <div>
             <b-form-group>
                <label class="typo__label required">Email Address <span>(required)</span></label>
                <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Enter email" size="sm"></b-form-input>
              </b-form-group>
            </div>
            <h3>Input Group With Button</h3>
            <b-input-group class="mt-3">
              <b-form-input size="sm"></b-form-input>
              <b-input-group-append>
                <b-button variant="primary" class="btn-sm">Button</b-button>
              </b-input-group-append>
            </b-input-group>
            <br>
            <h3>Radio Buttons</h3>
            <div>
              <b-form-group label="Individual radios">
                <b-form-radio name="some-radios" value="A">Option A</b-form-radio>
                <b-form-radio name="some-radios" value="B">Option B</b-form-radio>
              </b-form-group>
            </div>
            <br>
            <h3>DatePicker</h3>
            <div>
              <label for="example-input">Choose a date time picker</label>
              <b-input-group>
                <div class="btn btn-default btn-calendar-left">
                  <i class="fa fa-calendar"></i>
                </div>
                <datetime format="MM/DD/YYYY h:i A" v-model="val"></datetime>
              </b-input-group>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="box box-primary">
          <div class="box-header with-border">
            <h3 class="box-title">Select List Options</h3>
          </div>
          <div class="box-body">
            <div class="mb-3">
              <label class="typo__label">Single select</label>
              <multiselect v-model="value" placeholder="-Default Mailbox-" label="title" track-by="title" :options="options" :option-height="104"  :show-labels="false">
                <template slot="option" slot-scope="props">
                  <div class="option__desc"><span class="option__title">{{ props.option.title }}</span><br><span class="option__small">{{ props.option.email }}</span></div>
                </template>
              </multiselect>
            </div>
            <div class="mb-3">
              <label class="typo__label">Select Mulitiple</label>
              <multiselect v-model="value2" :options="options2" :searchable="true" :multiple="true" :close-on-select="true" :show-labels="false" placeholder="Select Topics"></multiselect>
            </div>
            <div>
              <label class="typo__label">Select Groups</label>
              <multiselect class="multiselect-group" v-model="value3" :options="options3" :multiple="false" group-values="libs" group-label="language" :show-labels="false" :group-select="false" placeholder="Type to search" track-by="name" label="name"><span slot="noResult">Oops! No elements found. Consider changing the search query.</span></multiselect>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import datetime from 'vuejs-datetimepicker'
import Multiselect from 'vue-multiselect'
export default {
  components: { datetime, Multiselect },
  name: 'FormsComponents',
  computed: {
    state () {
      return this.name.length >= 4
    },
    invalidFeedback () {
      if (this.name.length > 0) {
        return 'Enter at least 4 characters.'
      }
      return 'Please enter something.'
    }
  },
  data () {
    return {
      name: '',
      formatted: '',
      selected: '',
      form: {
        email: '',
        name: '',
        food: null,
        checked: []
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true,
      value: '',
      value2: '',
      options2: ['eshop All Topics', '.._feedback', '.._Newsletter Subscription', '.._Spam', '.._Undeliverable', '..Acount Questions', '....Orders', '....Refund', '....Return', '..Products', '....Audio Video', '....Camera', '....Television'],
      options: [
        { title: 'Segment1 Topic 1 (default)', email: 's1topic@example.com' },
        { title: 'Segment1 Topic 1,2 (default)', email: 's1s2topic@example.com' },
        { title: 'Segment1 Topic 1,2,3', email: 's1s2s3topic@example.com' },
        { title: 'Segment1 Topic 1,2,3,4', email: 's1s2s3s4topic@example.com' }
      ],
      options3: [
        {
          language: 'Finance',
          libs: [
            { name: 'Finance All Topics' },
            { name: '..Spam' },
            { name: '.._Undeliverable' }
          ]
        },
        {
          language: 'Financial Services',
          libs: [
            { name: 'Financial Services - All Topics' },
            { name: '.._Undeliverable' },
            { name: '..Spam' },
            { name: '..CM Approved' },
            { name: '..CM Finance Pre Approval' },
            { name: '..CM Pending Final Approval' }
          ]
        }
      ],
      value3: []
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    onContext (ctx) {
      // The date formatted in the locale, or the `label-no-date-selected` string
      this.formatted = ctx.selectedFormatted
      // The following will be an empty string until a valid date is entered
      this.selected = ctx.selectedYMD
    }
  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
