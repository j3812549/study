<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音" />
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.search
  height .72rem
  padding 0 .1rem
  background $bgColor
  .search-input
    height .62rem
    line-height .62rem
    width 100%
    text-align center
    border 1px solid #fff
    border-radius .06rem
    color #666
    padding 0 .1rem
    box-sizing border-box
</style>
