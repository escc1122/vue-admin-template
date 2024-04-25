<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ name }}</div>
    <!-- <div class="dashboard-text">routes: {{ routes }}</div> -->
    <div class="dashboard-text">permission_routes: {{ permission_routes }}</div>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name', 'permission_routes'
    ]),
    routes() {
      return this.$router.options.routes
    }
  }

}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
