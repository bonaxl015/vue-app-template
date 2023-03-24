<template>
  <div class="post-wrapper">
    <div class="post-img-container">
      <img class="post-img" :src="postItem?.userImg" />
    </div>
    <div class="post-details">
      <p class="post-author">{{ postItem?.user }}</p>
      <span class="post-date">{{ postItem?.updatedAt }}</span>
      <p class="post-text">{{ postItem?.post }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Post',
    props: {
      postItem: Object
    }
  }
</script>

<style lang="scss">
  .post-wrapper {
    display: flex;
    padding: 16px;
    margin: 16px;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    background: pink;

    .post-img-container {
      margin-right: 16px;

      .post-img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
      }
    }

    .post-details {
      .post-author {
        font-weight: bold;
      }

      .post-date {
        color: #333;
        font-size: 0.7rem;
      }

      .post-text {
        margin-top: 16px;
        font-size: 0.9rem;
      }
    }
  }
</style>
