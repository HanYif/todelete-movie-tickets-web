<template>
  <div class="container">
    <h3 class="title">{{cTitle}}
      <span class="page-info">{{pageInfo}}</span>
    </h3>
    <Carousel class="body" flex :totalSize="tSize" :windowSize="wSize" :dots="dots" v-model="value1" @on-change="handleChange">
        <Carousel-item v-for="(cItemData, index) in cItemDataList" class="flex" :key="index">
          <MovieItem v-for="(mData, index) in cItemData" :movieData="mData" :key="mData.id"></MovieItem>
        </Carousel-item>
    </Carousel>
  </div>
</template>

<script>
  import MovieItem from '../movie-item'
  export default {
    name: 'movie-item-list',
    props: {
      title: {
        type: String,
        default: ''
      },
      windowSize: {
        type: Number,
        default: 1
      },
      movieListData: {
        type: Object,
        default () {
          return {
            list: [
              {
                id: 0,
                name: 'xxx',
                src: 'http://pic.qiantucdn.com/58pic/26/04/14/41p58PICSIx_1024.jpg!/watermark/url/L3dhdGVybWFyay12MS5wbmc=/align/north/repeat/true',
                point: 0
              }
            ]
          }
        }
      }
    },
    components: {
      MovieItem
    },
    created () {
    },
    data () {
      return {
        cTitle: this.title,
        tSize: this.movieListData.list.length,
        wSize: this.windowSize,
        dots: 'none',
        value1: 0,
        pageNum: 1,
        pageInfo: '1/1',
        cItemDataList: []
      }
    },
    watch: {
      movieListData (val, oldVal) {
        this.cItemDataList = []
        var list = this.movieListData.list
        for (var i = 0, length = list.length; i < length; i += this.windowSize) {
          this.cItemDataList.push(list.slice(i, i + this.windowSize))
        }

        this.tSize = this.movieListData.list.length
        this.pageNum = Math.ceil(this.movieListData.list.length / this.windowSize)
        this.pageInfo = '1/' + this.pageNum
      }
    },
    methods: {
      handleChange (oldVal, val) {
        // value 为索引值
        this.pageInfo = (val + 1) + '/' + this.pageNum
      }
    }
  }
</script>

<style lang="scss" scoped src="./theme/styles/index.scss">
</style>
