<template>
  <div class="containers">
    <MovieItemList :title="title1" :windowSize="windowSize1" :movieListData="movieListData1"></MovieItemList>
  </div>
</template>

<script>
  import MovieItemList from '../components/movie-item-list'
  import Model from '../../../models/movie'
  export default {
    name: 'dashboard',
    components: {
      MovieItemList
    },
    created () {
      new Model()
        .GET({ uri: 'movieList' })
        .then((res) => {
          this.movieListData1 = {
            list: res.data.slice(0, 39)
          }
        })
    },
    data () {
      return {
        title1: '正在热映',
        windowSize1: 6,
        movieListData1: {
          list: []
        }
      }
    }
  }

</script>
