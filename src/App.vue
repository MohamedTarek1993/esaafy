<template>
  <section>
    <Navbar />
    <router-view />
    <Footer />
  </section>
</template>

<script>
import Navbar from "./components/static/Navbar.vue";
import Footer from "./components/static/Footer.vue";

export default {
  name: "app",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css");

:root {
  --color-primary: #4a5cd0;
  --color-secound: #223140;
  --color-third: #142028;
  --color-fourth: #ffbd03;
  --color-fifth: #707070;
  --color-sixth: #4a95d2;
}
@font-face {
  font-family: "light";
  src: url("../fonts/alfont_com_Somar-Light.otf");
}
@font-face {
  font-family: "regular";
  src: url("../fonts/alfont_com_Somar-Regular.otf");
}

@font-face {
  font-family: "semibold";
  src: url("../fonts/alfont_com_ArbFONTS-Somar-Bold.otf");
}

@font-face {
  font-family: "bold";
  src: url("../fonts/alfont_com_Somar-Bold.otf");
}
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  list-style: none;
  direction: rtl;
  height: 100vh;
}
html {
  scroll-behavior: smooth;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
}
.form-control {
  font-family: "regular";
}
.form-control:focus,
.btn:focus,
.form-check-input:focus {
  box-shadow: none;
}
select:focus {
  box-shadow: unset !important;
}
.main-head {
  color: var(--color-third);
  font-family: "semibold";
  font-size: 70px;
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &::after {
    content: "";
    height: 4px;
    width: 14px;
    background: var(--color-primary);
    color: var(--color-primary);
    position: absolute;
    left: 48%;
    bottom: -5px;
    @media (max-width: 800px) {
      left: 10%;
    }
  }
  &::before {
    content: "";
    height: 4px;
    width: 80px;
    background: var(--color-primary);
    color: var(--color-primary);
    position: absolute;
    left: 50%;
    bottom: -5px;
    @media (max-width: 800px) {
      right: 0;
    }
  }
}
.main-btn {
  width: 40%;
  position: relative;
  background-color: var(--color-primary);
  color: white;
  border: 1px solid var(--color-primary);
  font-family: "regular";
  padding: 3% 5%;
  text-align: center;
  font-size: 12px;
  border-radius: 8px;
  transition: 0.25s all ease;
  &:hover {
    color: var(--color-primary);
    background: white;
    border-color: var(--color-secound);
  }
  @media (max-width: 800px) {
    font-size: 8px;
    padding: 1%;
  }
}
.link-navbar {
  color: var(--color-primary);
  font-size: 16px;
  font-family: "regular";
  border-bottom: 1px solid transparent;
  margin-right: 9%;
  padding-bottom: 1%;
  transition: 0.25s all ease;
  &:hover {
    border-bottom-color: var(--color-secound);
  }
}
.link-navbar.active {
  border-bottom-color: var(--color-secound);
}
.head-footer {
  font-family: "bold";
  font-size: 18px;
  color: var(--color-secound);
  position: relative;
  text-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 3%;
  @media (max-width: 800px) {
    justify-content: start;
  }
  &::after {
    content: "";
    height: 3px;
    width: 8px;
    background: var(--color-primary);
    color: var(--color-primary);
    position: absolute;
    right: 45%;
    bottom: -5px;
    @media (max-width: 800px) {
      right: 10%;
    }
  }
  &::before {
    content: "";
    height: 3px;
    width: 30px;
    background: var(--color-primary);
    color: var(--color-primary);
    position: absolute;
    right: 25%;
    left: 0;
    bottom: -5px;
    @media (max-width: 800px) {
      right: 0;
    }
  }
}
</style>
