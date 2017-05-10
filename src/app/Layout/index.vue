<template>
  <div>
    <CustomHeader></CustomHeader>
    <div class="main">
      <Sidebar ref="sidebar"></Sidebar>
      <CustomBody></CustomBody>
    </div>
  </div>
</template>

<script>
  import Sidebar from './components/Sidebar'
  import CustomHeader from './components/Header'
  import CustomBody from './components/Body'

  export default {
    name: 'layout',
    components: {
      Sidebar,
      CustomHeader,
      CustomBody
    },
    beforeRouteUpdate (to, from, next) {
      this.$nextTick(() => {
        this.$refs.sidebar.update(to)
      })
      next()
    }
  }
</script>


<style lang="scss" scoped src="./theme/styles/index.scss">
</style>
