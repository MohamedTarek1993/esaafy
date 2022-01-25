<template>
  <div class="app-work">
    <h4 class="title">{{ post.cardTitle }}</h4>
    <p class="info">{{ post.cardInfo }}</p>
    <div></div>
    <img :src="require(`../../assets/${post.cardPhoto}.png`)" />
  </div>
</template>

<script>
export default {
  name: "AppWork",
  props: ["post"],
};
</script>

<style lang="scss" scoped>
.app-work {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 0 30px;
  .title {
    font-size: 50px;
    font-family: "bold";
  }
  .info {
    font-family: "regular";
    font-size: 28px;
    color: var(--color-fifth);
    padding-top: 20px;
    width: 50%;
  }
  img {
    width: 500px;
    height: 450px;
  }
}
</style>
