<template>
  <div class="avatar-wrap">
    <img :src="imgUrl" class="avatar-img" />
    <div class="member-detail">
      <p class="nickname">Insert Name Here</p>
      <p class="info">Say something about yourself...</p>
    </div>
  </div>
  <div class="post-main-wrap">
    <post v-for="item in posts" :key="item.id" :postItem="item" />
  </div>
</template>

<script lang="ts" setup name="MemberPage">
  import Post from './components/post.vue'
  import { posts } from './posts-data'
  const imgUrl =
    'https://images.pexels.com/photos/1223648/pexels-photo-1223648.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&dpr=1'
</script>

<style lang="scss">
  .avatar-wrap {
    width: 50%;
    display: flex;
    margin: 30px auto;
    align-items: center;
    padding: 16px;
    border: 1px solid #e5e5e5;
    border-radius: 10px;

    .avatar-img {
      height: 80px;
      width: 80px;
      border-radius: 50%;
    }

    .member-detail {
      margin-left: 20px;

      .nickname {
        font-size: 16px;
        font-weight: bold;
      }

      .info {
        margin-top: 10px;
        font-size: 16px;
      }
    }
  }

  .post-main-wrap {
    width: 50%;
    margin: 20px auto;
  }
</style>
