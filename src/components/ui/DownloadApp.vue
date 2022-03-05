<template>
  <div class="download-app">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-12">
          <div class="content">
            <h4 class="title">{{ post.title }}</h4>
            <p class="info">{{ post.text }}</p>
            <div class="d-flex justify-content-between w-75">
              <router-link to="#" class="store">
                <div class="icon">
                  <span>Apple store</span>
                  <img src="../../assets/app-store.png" alt="apple store" />
                </div>
              </router-link>
              <router-link to="#" class="store">
                <div class="icon">
                  <span>Google store </span>
                  <img src="../../assets/google-play.png" alt="google play" />
                </div>
              </router-link>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-12">
          <div class="img">
            <img :src="post.image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DownloadApp",
  props: ["post"],
};
</script>

<style lang="scss" scoped>
.download-app {
  padding: 30px 0;
  position: relative;
  .content {
    padding-top: 30%;
    .title {
      font-family: "bold";
      font-size: 40px;
      color: var(--color-secound);
    }
    .info {
      font-family: "regular";
      font-size: 20px;
      padding-top: 10%;
      line-height: 1.6;
    }
      .icon {
      width: 188px;
      height: 50px;
      background-color: white;
      margin: 10% 10% 5% 5%;
      border-radius: 10px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: .25s all ease;
      box-shadow: 0 6px 9px rgba(147, 147, 147, .16);
      &:hover{
          background-color: var(--color-third);
      }
      &:hover span{
          color: white;
      }
      img {
        width: 30px;
        height: 30px;
      }
      span {
        font-family: "bold";
        font-size: 16px;
        color: var(--color-third);
        padding-left: 4%;
      }
    }
  }
  .img {
    position: relative;
    img {
      width: 600px;
      height: 511px;
    }
  }
}
</style>
