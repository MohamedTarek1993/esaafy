<template>
  <div class="last-news">
    <div class="content">
      <img :src="require(`../../assets/blogCards/${post.blogPhoto}.png`)" />
      <h6 class="date">
        <i class="bi bi-calendar-fill"></i> {{ post.blogData }}
      </h6>
      <h4 class="title">{{ post.blogTitle }}</h4>
      <p class="info">{{ post.blogDetials }}</p>
      <router-link :to="{ name: 'Detials' }">عرض المزيد </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "LastNews",
  props: ["post"],
};
</script>

<style lang="scss" scoped>
.last-news {
  .content {
    margin-top: 5%;
    background-color: white;
    border-radius: 8px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    img {
      width: 364px;
      height: 230px;
    }
    .date {
      color: #a8a8a8;
      font-size: 15px;
      font-family: "regular";
      padding: 5% 2%;
      i {
        color: #223140;
      }
    }
    .title {
      color: var(--color-third);
      font-size: 18px;
      font-family: "bold";
      padding: 2% 2%;
    }
    .info {
      color: var(--color-fifth);
      font-size: 14px;
      font-family: "regular";
      padding: 2% 3% 2% 10%;
      line-height: 1.6;
    }
    a {
      color: var(--color-third);
      font-size: 14px;
      font-family: "bold";
      width: 22%;
      margin: 3% 4% 10% 0;
      padding-bottom: 1% ;
      border-bottom: 1px solid transparent;
      transition: 0.25s all ease;
      &:hover {
        border-bottom-color: var(--color-primary);
        color: var(--color-primary);
      }
    }
  }
}
</style>
