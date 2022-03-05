<template>
  <section>
    <!-- start about story -->
    <div class="about-story">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-12">
            <div class="first py-5">
              <h4 class="title">{{ aboutStory.title }}</h4>
              <p class="info">{{ aboutStory.text }}</p>
              <router-link to="#"> أعرف المزيد</router-link>
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <div class="img">
              <img :src="aboutStory.image" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- finish about story -->
    <!-- start card service -->
    <div class="card-services">
      <h4 class="main-head">الخدمات</h4>
      <div class="container">
        <div class="row">
          <card-service
            class="col-lg-4 col-md-6.col-sm-12"
            :post="post"
            v-for="(post, index) in cardService"
            :key="index"
          />
        </div>
      </div>
    </div>
    <!-- finish card service -->
    <!-- start card adventage -->
    <div class="card-advantages">
      <h4 class="main-head">المميزات</h4>
      <div class="container">
        <div class="row">
          <card-adventage
            class="col-lg-3 col-md-6.col-sm-12 py-3 px-3"
            :post="post"
            v-for="(post, index) in cardAdventage"
            :key="index"
          />
        </div>
      </div>
    </div>
    <!-- finish card adventage -->
    <!-- start download app -->
    <div class="download-app">
      <download-app :post="downloadApp" />
    </div>
    <!-- finish download app -->
    <!-- start last news -->
    <div class="last-news">
      <h4 class="main-head">أخر الاخبار</h4>
      <div class="container">
        <div class="row">
          <last-news
            class="col-lg-4 col-md-6.col-sm-12 px-2 py-2a"
            :post="post"
            v-for="(post, index) in lastNews"
            :key="index"
          />
        </div>
      </div>
    </div>
    <!-- finish last news-->
    <!-- start app work-->
    <div class="app-work">
      <div class="container">
        <app-work :post="appWork" />
      </div>
    </div>
    <!-- finish app work-->
    <!-- start contact -->
    <div class="contact">
      <h4 class="main-head">أخر الاخبار</h4>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-12">
            <div class="map">
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1B1lAsUpYFg82Je7XN1_cxRPf1UU&ehbc=2E312F"
                width="440"
                height="480"
              ></iframe>
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <form-create />
          </div>
        </div>
      </div>
    </div>
    <!-- finish contact -->
  </section>
</template>

<script>
import axios from "axios";
import CardService from "../components/ui/CardService.vue";
import CardAdventage from "../components/ui/CardAdventage.vue";
import DownloadApp from "../components/ui/DownloadApp.vue";
import LastNews from "../components/ui/LastNews.vue";
import AppWork from "../components/ui/AppWork.vue";
import FormCreate from "../components/static/FormCreate.vue";

export default {
  name: "Home",
  components: {
    CardService,
    CardAdventage,
    DownloadApp,
    LastNews,
    AppWork,
    FormCreate,
  },
  created() {
    this.About(), this.getServices(), this.getDownloadApp();
  },
  data() {
    return {
      showModal: false,
      aboutStory: {
        id: "1",
        title: "تعرف علي قصتنا",
        info: "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
        link: "",
      },
      cardService: [
        {
          id: "0",
          title: "  ",
          text: " ",
        },
        {
          id: "1",
          title: " ",
          text: "",
        },
        {
          id: "2",
          title: " ",
          text: " ",
        },
      ],
      cardAdventage: [
        {
          cardPhoto: "adv-1",
          cardTitle: " جدولة الحجز  ",
          cardInfo: "   تستطيع حجز السيارة متي شئت وأي وقت في اي مكان ",
        },
        {
          cardPhoto: "adv-2",
          cardTitle: " البحث عن اقرب سيارة اسعاف ",
          cardInfo:
            "  البحث في الارجاء عن اقرب سيارة اسعاف متاحة وتطلبها مباشرة ",
        },
        {
          cardPhoto: "adv-3",
          cardTitle: " التحدث مع السائق مباشرة",
          cardInfo:
            "التحدث مع السائق لمعرفة كل تفاصيل الرحلة ومعرفة الامور المختلفة ",
        },
        {
          cardPhoto: "adv-4",
          cardTitle: "  المحفظة الالكترونيه   ",
          cardInfo:
            " إضافة نقود في المحفظة الافتراضية لكي تدفع بها تمن الخدمات بكل سهولة",
        },
      ],
      downloadApp: {
        id: "1",
        image: "",
        title: "",
        text: "",
      },
      lastNews: [
        {
          blogPhoto: "blog-1",
          blogData: " ٢٤ اكتوبر ٢٠٢١",
          blogTitle: "طائم اسعاف الطبي دائما في خدمتك",
          blogDetials:
            "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
        },
        {
          blogPhoto: "blog-2",
          blogData: " ٢٤ اكتوبر ٢٠٢١",
          blogTitle: "طائم اسعاف الطبي دائما في خدمتك",
          blogDetials:
            "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
        },
        {
          blogPhoto: "blog-3",
          blogData: " ٢٤ اكتوبر ٢٠٢١",
          blogTitle: "طائم اسعاف الطبي دائما في خدمتك",
          blogDetials:
            "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
        },
      ],
      appWork: {
        cardPhoto: "Screenshot",
        cardTitle: " كيفية عمل تطبيق إسعافي  ",
        cardInfo:
          "قم بزيادة الإنتاجية باستخدام تطبيق بسيط متعدد الإستخدامات لكل الخدمات الإسعافية",
      },
      map: "",
    };
  },
  methods: {
      About() {   //about section
      axios
        .get("https://esaafy.crazyideaco.com/public/api/get_about")
        .then((response) => {
          // console.log(response.data)
          this.aboutStory = response.data.data;
        });
    },
    getServices() { //service section
      axios
        .get("https://esaafy.crazyideaco.com/public/api/get_service")
        .then((response) => {
          // console.log(response.data)
          this.cardService = response.data.data;
        });
    },
    getDownloadApp() { //download app section 
      axios
        .get("https://esaafy.crazyideaco.com/public/api/get_app")
        .then((response) => {
          // console.log(response.data)
          this.downloadApp = response.data.data;
          console.log(response.data);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
// start card service
.card-services {
  padding: 30px 0;
  background: white;
}
.last-news {
  padding: 30px 0;
  background: #e5ebf5;
}
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
</style>
