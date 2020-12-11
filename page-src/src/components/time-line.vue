<template>
  <ul class="timeline">
    <li v-for="(timelines, x) in timeline" :key="x">
      <div :class="timelines.badge_color"><i :class="timelines.icon_class" ></i></div>
        <div class="timeline-panel">
          <div class="timeline-heading">
            <h3 class="timeline-header"><a href="#">{{ timelines.title }}</a></h3>
            <div class="timeline-panel-controls">
              <div class="controls">
              </div>
              <div class="timestamp">
                <small class="text-muted"></small>
              </div>
            </div>
          </div>
          <div class="timeline-body">{{ timelines.body }}</div>
        </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'TimeLine',
  data () {
    return {
      timeline: [
        {
          id: 5,
          badge_color: 'timeline-badge bg-blue',
          icon_class: 'fa fa-envelope',
          icon_status: '',
          title: 'Customer Email',
          created: '24. Sep 17:03',
          body: 'Take me to your leader! Switzerland is small and neutral! We are more like Germany, ambitious and misunderstood!'
        },
        {
          id: 4,
          badge_color: 'timeline-badge bg-orange',
          icon_class: 'fa fa-ticket',
          icon_status: 'success',
          title: 'Ticket',
          controls: [],
          created: '24. Sep 14:48',
          body: 'Take me to your leader! Switzerland is small and neutral! We are more like Germany, ambitious and misunderstood!'
        },
        {
          id: 3,
          badge_color: 'timeline-badge bg-teal-active',
          icon_class: 'fa  fa-question',
          icon_status: 'warning',
          title: 'Ask a question',
          controls: [],
          created: '23. Sep 11:12',
          body: 'Take me to your leader! Switzerland is small and neutral! We are more like Germany, ambitious and misunderstood!'
        },
        {
          id: 2,
          badge_color: 'timeline-badge bg-yellow',
          icon_class: 'fa fa-comments',
          icon_status: 'danger',
          title: 'Chat',
          controls: [],
          created: '20. Sep 15:56',
          body: 'Take me to your leader! Switzerland is small and neutral! We are more like Germany, ambitious and misunderstood!'
        },
        {
          id: 1,
          badge_color: 'timeline-badge bg-red',
          icon_class: 'fa fa-reply',
          icon_status: '',
          title: 'Notification',
          controls: [],
          created: '19. Sep 19:49',
          body: 'Take me to your leader! Switzerland is small and neutral! We are more like Germany, ambitious and misunderstood!'
        }
      ]
    }
  }
}
</script>
