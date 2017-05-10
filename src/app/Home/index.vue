<template>
  <Carousel flex :totalSize="totalSize" :windowSize="windowSize" v-model="value1" @on-change="handleChange">
        <Carousel-item>
          <MovieItem></MovieItem>
        </Carousel-item>
        <Carousel-item>
          <div>
            <Row>
              <Col span="6">2</Col>
              <Col span="6">2</Col>
              <Col span="6">2</Col>
              <Col span="6">2</Col>
            </Row>
          </div>
        </Carousel-item>
        <Carousel-item >
          <div>
            <Row>
              <Col span="6">3</Col>
              <Col span="6">3</Col>
            </Row>
          </div>
        </Carousel-item>
    </Carousel>
</template>

<script>
  import MovieItem from './components/movie-item'
  export default {
    name: 'home',
    components: {
      MovieItem
    },
    data () {
      return {
        value1: 0,
        totalSize: 10,
        windowSize: 4
      }
    },
    methods: {
      handleChange (oldValue, value) {
        // value 为索引值
      }
    }
  }
</script>

<style lang="scss" scoped src="./theme/styles/index.scss">
</style>
