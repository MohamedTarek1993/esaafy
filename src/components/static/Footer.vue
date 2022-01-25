<template>
  <footer>
    <div class="container">
      <div class="row">
        <!-- start col -->
        <div class="col-lg-2 col-md-6 col-sm-12 py-3">
          <router-link :to="{ name: 'Home' }">
            <img class="logo-footer" src="../../assets/logo.png" alt="" />
          </router-link>
          <p class="about">{{ aboutCompany }}</p>
          <div class="social-icon">
            <router-link to="#" target="_blank"
              ><i class="bi bi-whatsapp"></i
            ></router-link>
            <router-link to="#" target="_blank"
              ><i class="bi bi-messenger"></i
            ></router-link>
            <router-link to="#" target="_blank"
              ><i class="bi bi-facebook"></i
            ></router-link>
            <router-link to="#" target="_blank"
              ><i class="bi bi-twitter"></i
            ></router-link>
          </div>
        </div>
        <!-- finish col -->
        <!-- start col -->
        <div class="col-lg-2 col-md-6 col-sm-12 py-3">
          <div class="links-footer">
            <h4 class="head-footer">روابط سريعة</h4>
            <ul>
              <li><router-link class="links" to="#">اتصل بنا </router-link></li>
              <li>
                <router-link class="links" :to="{ name: 'About' }">
                  عن التطبيق
                </router-link>
              </li>
              <li>
                <router-link class="links" :to="{ name: 'News' }">
                  اخبار
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <!-- finish col -->
        <!-- start col -->
        <div class="col-lg-2 col-md-6 col-sm-12 py-3">
          <div class="links-footer">
            <h4 class="head-footer">المساعدة</h4>
            <ul>
              <li>
                <router-link class="links" :to="{ name: 'Privacy' }">
                  ساسية الخصوصية
                </router-link>
              </li>
              <li>
                <router-link class="links" :to="{ name: 'Condition' }">
                  شروط الاستخدام
                </router-link>
              </li>
              <li>
                <router-link class="links" :to="{ name: 'Common' }">
                  الاسألة الشائعة
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <!-- finish col -->
        <!-- start col -->
        <div class="col-lg-3 col-md-6 col-sm-12 py-3">
          <div class="information">
            <h4 class="head-footer">معلومات التواصل</h4>
            <ul>
              <li>
                <i class="bi bi-geo-alt"></i>
                <span>شارع عبدة الصعيدي ، المنصورة</span>
              </li>
              <li>
                <i class="bi bi-telephone"></i>
                <a v-bind:href="'mailto:' + personTel">{{ personTel }}</a>
              </li>
              <li>
                <i class="bi bi-envelope"></i>
                <a v-bind:href="'mailto:' + personEmail">{{ personEmail }}</a>
              </li>
            </ul>
          </div>
        </div>
        <!-- finish col -->
        <!-- start col -->
        <div class="col-lg-2 col-md-6 col-sm-12 py-3">
          <div class="download">
            <h4 class="head-footer">حمل التطبيق</h4>
            <router-link to="#" class="store">
              <div>
                <span>Apple store</span>
                <img src="../../assets/app-store.png" alt="apple store" />
              </div>
            </router-link>
            <router-link to="#" class="store">
              <div>
                <span>Google store </span>
                <img src="../../assets/google-play.png" alt="google play" />
              </div>
            </router-link>
          </div>
        </div>
        <!-- finish col -->
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      aboutCompany: "كل الخدمات الطبية في مكان واحدوفر ٧٥%  عند اول رحلة",
      personTel: "01010101",
      personEmail: "WWW.MT@GMAIL.COM",
    };
  },
};
</script>

<style lang="scss" scoped>
footer {
  position: relative;
  background: #e5ebf5;
  padding-top: 30px;
  .logo-footer {
    width: 100%;
    height: 65px;
    @media (max-width:800px){
     width: 160px;
     height: 65px;
    }
  }
  .about {
    font-family: "regular";
    font-size: 15px;
    padding-top: 8%;
  }
  .social-icon {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media(max-width:800px){
        width: 60%;
        text-align: center;
    }
    i {
      font-size: 25px;
      color: var(--color-third);
      transition: 0.25s all ease;
      &:hover {
        color: var(--color-primary);
      }
    }
  }
  .links-footer {
    ul {
      padding: 10px 0;
      text-align: center;
    @media (max-width:800px) {
              text-align: start;

    }
      li {
        padding: 4% 0;
        .links {
          font-size: 14px;
          font-family: "regular";
          color: var(--color-secound);
          transition: 0.25s all ease;
          &:hover {
            font-family: "bold";
          }
        }
      }
    }
  }
  .information {
    h4 {
      width: 65%;
      @media (max-width:800px) {
                width: 95%;

      }
    }
    ul {
      padding: 3% 0;
      li {
        padding: 4% 0;
        i {
          color: var(--color-third);
          background: white;
          border-radius: 50%;
          font-size: 20px;
          padding: 1%;
        }
        span,
        a {
          font-family: "regular";
          font-size: 14px;
          color: var(--color-third);
          padding-right: 3%;
        }
      }
    }
  }
  .download {
    h4 {
      margin-bottom: 23%;
      @media (max-width:800px) {
          margin-bottom: 10%;
      }
    }
    div {
      width: 188px;
      height: 50px;
      background-color: white;
      margin: 10% 0 5% 0;
      border-radius: 10px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: .25s all ease;
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
}
</style>
