<template>
  <div class="userinfo" @click="$router.go(-1)">
    111
  </div>
</template>

<script>
import vHeader from '@/components/vHeader'
import vChildHeader from '@/components/vChildHeader'
export default {
  components: {
    vChildHeader,
    vHeader
  }
}
</script>

<style lang="stylus">

</style>
