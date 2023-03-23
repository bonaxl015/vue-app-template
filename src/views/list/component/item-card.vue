<template>
  <div class="item-card">
    <div class="item-img-container">
      <img :src="imgUrl" alt="Product image" />
    </div>
    <div class="item-details-container">
      <p class="item-title">{{ title }}</p>
      <div class="item-price-info">
        <span class="item-orig-price">₱{{ price }}</span>
        <span class="item-disc-price">₱{{ vipPrice }}</span>
      </div>
      <div class="item-tag-info">
        <span class="item-tag">{{ shopDesc }}</span>
        <span class="item-tag-details">{{ delivery }}</span>
      </div>
      <p class="item-seller">{{ shopName }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ItemCard',
    props: {
      imgUrl: String,
      title: String,
      price: String,
      vipPrice: String,
      shopDesc: String,
      delivery: String,
      shopName: String
    },
    setup(props) {
      console.log(props.imgUrl)
    }
  }
</script>

<style lang="scss" scoped>
  .item-card {
    display: flex;
    padding: 16px;
    margin: 16px;
    border: 1px solid #e5e5e5;
    border-radius: 10px;

    .item-img-container {
      height: 140px;
      width: 140px;
      margin-right: 16px;

      img {
        height: 100%;
        width: 100%;
      }
    }

    .item-price-info {
      .item-orig-price {
        color: #ff6853;
        margin-right: 0.5rem;
      }

      .item-disc-price {
        color: #ff9953;
        margin-right: 0.5rem;
      }
    }

    .item-details-container {
      .item-title {
        font-size: 1.1rem;
        color: #006600;
        margin-bottom: 8px;
      }

      .item-tag-info {
        margin: 10px 0;
        display: flex;
        align-items: center;

        .item-tag {
          display: inline-block;
          margin-right: 0.5rem;
          background: #ff1153;
          padding: 0.2rem;
          color: #fff;
          font-size: 0.6rem;
          border-radius: 0.4rem;
        }

        .item-tag-details {
          font-size: 0.8rem;
        }
      }

      .item-seller {
        color: #999999;
        font-size: 0.8rem;
      }
    }
  }
</style>
