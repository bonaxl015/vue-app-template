<template>
  <div class="nav-main">
    <div class="nav-logo">LOGO</div>
    <div class="nav-item">
      <ul>
        <li v-for="item in navItems" :key="item" @click="navbarSwitch(item)">
          {{ $t(`tabbar.${item}`) }}
        </li>
      </ul>
    </div>
    <div class="nav-lang">
      <select @change="changeLanguage">
        <option value="en-us">{{ $t('language.en') }}</option>
        <option value="zh-cn">{{ $t('language.zh') }}</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
  import { useRouter } from 'vue-router'
  import { setLang } from '@/i18n'

  export default {
    name: 'Navbar',
    setup() {
      const router = useRouter()

      const navItems: string[] = ['home', 'list', 'member', 'demo']

      const navbarSwitch = (item: string) => {
        if (item === 'home') router.push('home')
        if (item === 'list') router.push('list')
        if (item === 'member') router.push('member')
        if (item === 'demo') router.push('demo')
      }

      const changeLanguage = (e) => {
        setLang(e.target.value)
      }

      return {
        navItems,
        navbarSwitch,
        changeLanguage
      }
    }
  }
</script>

<style lang="scss">
  .nav-main {
    height: 28px;
    padding: 16px 60px;
    background: pink;
    color: #000;
    display: flex;
    align-items: center;

    .nav-logo {
      flex: 1;
      font-size: 28px;
      font-weight: bold;
    }

    .nav-item {
      ul {
        display: flex;
        list-style: none;

        li {
          margin-right: 12px;
          cursor: pointer;
        }
      }
    }

    .nav-lang {
      margin: 0 10px;

      select {
        padding: 6px 8px;
        border: none;
        border-radius: 4px;

        &:focus,
        &:active {
          border: none;
        }
      }
    }
  }
</style>
