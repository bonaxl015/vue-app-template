<template>
  <Navbar />
  <RouterView v-slot="{ Component }" v-if="$route.meta.keepAlive">
    <keep-alive>
      <component :is="Component" :key="$route.path" />
    </keep-alive>
  </RouterView>
  <RouterView v-if="!$route.meta.keepAlive" :key="$route.path" />
</template>

<script lang="ts" setup name="BasicLayoutPage">
  import Navbar from '@/components/nav-bar/index.vue'
</script>

<style scoped lang="scss">
  .nut-navbar {
    margin-bottom: 0;
  }

  .main-page {
    box-sizing: border-box;
    height: calc(100vh - 92px);
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .tabbar {
    height: calc(100vh - 92px);
    padding-bottom: 100px;
  }

  .border {
    padding-left: 30px;
    padding-right: 30px;
  }
</style>
