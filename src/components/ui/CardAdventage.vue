<template>
  <div>
    <div class="card-adventage">
      <div class="content">
        <div class="img">
          <img
            :src="require(`../../assets/cardadvantage/${post.cardPhoto}.png`)"
          />
        </div>
        <h4 class="title">{{ post.cardTitle }}</h4>
        <p class="info">{{ post.cardInfo }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardAdventages",
  props: ["post"],
};
</script>

<style lang="scss" scoped>
.card-adventage {
  position: relative;
  background-color: #dddddd;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 40px;
  background-color: white;
  overflow: hidden;
  border-radius: 10px;
  border: none;
  margin: 20px 0;
  box-shadow: 0 0px 16px rgba(0, 0, 0, 0.08);
  transition: .25s all ease;
  &:hover{
      transform: rotateZ(-5deg);
  }

  .content {
    background: white;
    .img {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      width: 75px;
      height: 75px;
      transition: 0.5s all;
      background-color: #dddddd;
      img {
        width: 30px;
        height: 30px;
      }
    }
    .title {
      color: var(--color-third);
      font-family: "bold";
      font-size: 14px;
      padding-top: 12%;
      padding-bottom: 4%;
    }
    .info{
         color: var(--color-third);
      font-family: "regular";
      font-size: 11px;
    }
  }
}
</style>
