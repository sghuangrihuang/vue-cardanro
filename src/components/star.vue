<template>
  <div class="star">
    <i class="fa" :class="star" v-for="(star, starid) in itemClasses" :key="starid"></i>
  </div>
</template>

<script>
export default {
  props: ['score'],
  data () {
    return {
      starClass: ['fa-star','fa-star-half-o', 'fa-star-o']
    }
  },
  computed: {
    itemClasses() {
      let result = [];
      let score = Math.floor(this.score * 2) / 2;
      let hasDecimal = score % 1 !=0;
      let integer = Math.floor(score);
      for ( let i=0; i<integer; i++ ) {
        result.push(this.starClass[0]);
      }
      if ( hasDecimal ) {
        result.push(this.starClass[1]);
      }
      while ( result.length < 5 ) {
        result.push(this.starClass[2]);
      }
      return result;
    }
  }
}
</script>

<style lang="stylus">
.star
  font-size 0
  display inline-block
  i
    color #f22626
    font-size .8rem
</style>
