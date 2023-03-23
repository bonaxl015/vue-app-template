<template>
  <header class="header">
    <span> {{ $t('title') }}</span>
  </header>
  <div class="intro-header">
    <div>{{ $t('introduction') }}</div>
  </div>
  <div class="body-content">
    <p>{{ $t('home.support') }}</p>
    <ul>
      <li v-for="(item, index) in cellList" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup name="HomePage">
  let cellList = [
    'vue3',
    'vite',
    'vue-router',
    'axios',
    'pinia',
    'vue-i18n'
  ]
</script>

<style lang="scss">
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    margin: 20px 0;
    font-size: 40px;
    img {
      width: 90px;
      height: 90px;
    }
  }

  .intro-header {
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  }

  .body-content {
    width: 50%;
    margin: auto;

    p {
      font-size: 1.5rem;
      font-weight: bold;
    }

    ul {
      li {
        list-style: none;
        font-size: 1.2rem;
        padding: 20px;
      }
    }
  }
</style>
