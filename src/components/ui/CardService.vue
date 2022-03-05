<template>
  <div>
    <div class="card-service">
      <div class="content">
        <div class="img">
         <i v-if="index=0" class="bi bi-bag"></i>
           <i v-if="index=1" class="bi bi-alarm-fill"></i>
             <i v-if="index=2" class="bi bi-alarm-fill"></i>
        
        </div>
        <h4 class="title">{{ post.Title }}</h4>
        <p class="info">{{ post.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardService",
  
  props: ["post"],
};
</script>

<style lang="scss" scoped>
.card-service {
  position: relative;
  box-shadow: 0 0 30 rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  padding: 40px;
  background-color: white;
  overflow: hidden;
  border-radius: 10px;
  border: none;
  margin: 20px 0;
  &:hover {
    box-shadow: 0 29px 47px rgba(167, 130, 101, 0.33);
    .title {
      color: white;
    }
    &::before {
      bottom: 0;
    }
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    bottom: -100%;
    background-color: var(--color-primary);
    z-index: 1;
    transition: 0.5s;
  }
  .content {
    position: relative;
    z-index: 3;
    margin: auto;
    text-align: center;
    transition: 0.3s;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      margin: auto;
      background: var(--color-primary);
      width: 75px;
      height: 75px;
      transition: 0.5s all;

      img {
        width: 30px;
        height: 30px;
        transform: rotateZ(360deg);
      }
    }
    .title {
      font-size: 30px;
      color: var(--color-secound);
      font-family: "bold";
      padding-top: 3%;
      padding-bottom: 4%;
    }
    .info {
      font-size: 20px;
      font-family: "regular";
      color: var(--color-third);
    }
  }
  &:hover .img {
    background: var(--color-secound);
    img {
      transform: rotateY(0deg);
    }
  }
  &:hover .title,
  &:hover .info {
    color: white;
  }
}
</style>
