<template>
  <b-container class="hours-log-page">
    <b-row>
      <b-col sm="8" offset-sm="2">
        <b-row class="mt-5 mb-4">
          <b-col>
            <h1>Hours</h1>
          </b-col>
          <b-col>
            <b-btn
              variant="primary"
              @click="$router.push({ name: 'TimeEntry' })"
              >+ Add Entry</b-btn
            >
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <b-table striped hover :fields="fields" :items="timeEntries" />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "HoursLog",
  components: {},
  data() {
    return {
      fields: ["startDate", "endDate"]
    };
  },
  computed: {
    ...mapState(["timeEntries"])
  },
  mounted() {
    this.readTimeEntries();
  },
  methods: {
    ...mapActions(["readTimeEntries"])
  }
};
</script>
