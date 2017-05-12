<template>
  <div class="container">
    <div class="img-container">
      <img :src="mData.src" alt="img">
    </div>
    <p class="title">{{mData.name}}</p>
    <div class="footer">
      <a :href="mHref">选票定座</a>
      <span>{{mData.point}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MovieItem',
    props: {
      movieData: {
        type: Object,
        default () {
          return {
            id: 0,
            name: 'xxx',
            src: 'http://pic.qiantucdn.com/58pic/26/04/14/41p58PICSIx_1024.jpg!/watermark/url/L3dhdGVybWFyay12MS5wbmc=/align/north/repeat/true',
            point: 0
          }
        }
      }
    },
    data () {
      return {
        mData: this.movieData,
        mHref: '#/movie_detail/' + this.movieData.id
      }
    }
  }
</script>

<style lang="scss" scoped src="./theme/styles/index.scss">
</style>
