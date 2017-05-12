<template>
  <div class="sidebar">
    <Menu mode="horizontal" :theme="theme1" ref="menu" :active-name="activeName" width="auto" :open-names="openNames" @on-select="handleSelect">
      <Menu-item name="/">
        <Icon type="home"></Icon>
        首页
      </Menu-item>
      <Menu-item name="movie-list">
        <Icon type="ios-list"></Icon>
        影片
      </Menu-item>
      <Menu-item name="theaters">
        <Icon type="easel"></Icon>
        影院
      </Menu-item>
    </Menu>
  </div>
</template>

<script>
  export default {
    name: 'sidebar',
    data () {
      return {
        activeName: '',
        openNames: [],
        theme1: 'dark'
      }
    },
    created () {
      this.update()
    },
    methods: {
      handleSelect (name) {
        this.$router.push(name)
      },
      update (route) {
        const path = route ? route.path : this.$route.path
        const openName = path.split('/')[1]
        const activeName = '/' + openName

        this.$set(this, 'activeName', activeName)
        this.$set(this, 'openNames', [openName])

        this.$nextTick(() => {
          this.$refs.menu.updateActiveName()
          this.$refs.menu.$children.forEach((item) => {
            item.opened = false
          })
          this.$refs.menu.updateOpened()
        })
      }
    }
  }
</script>

<style lang="scss" scoped src="./theme/styles/index.scss">
</style>
