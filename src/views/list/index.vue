<template>
  <item-card
    style="margin: 16px 120px"
    v-for="(item, index) in list"
    :key="index"
    :img-url="item.imgUrl"
    :title="item.title"
    :price="item.price"
    :vip-price="item.vipPrice"
    :shop-name="item.shopName"
    :shopDesc="item.shopDesc"
    :delivery="item.delivery"
  />
</template>

<script lang="ts" setup name="ListPage">
  import ItemCard from './component/item-card.vue'
  import { listData } from './data'

  let list = ref(listData)
</script>

<style lang="scss" scoped></style>
