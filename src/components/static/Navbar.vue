<template>
  <header>
    <nav>
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-12">
            <div class="logo">
              <router-link class="header" :to="{ name: 'Home' }">
                logo
              </router-link>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="nav-link">
              <ul v-show="!mobile">
                <router-link :to="{ name: 'Home' }" class="link-navbar">
                  Home</router-link
                >
                <router-link :to="{ name: 'About' }" class="link-navbar">
                  About</router-link
                >
                <router-link :to="{ name: 'Advantages' }" class="link-navbar">
                  Advantages
                </router-link>
                <router-link :to="{ name: 'Service' }" class="link-navbar">
                  Services
                </router-link>
                <router-link :to="{ name: 'News' }" class="link-navbar">
                  News</router-link
                >
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-12">
            <router-link to="#" class="main-btn"> حمل التطبيق </router-link>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                العربيه
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">En</a></li>
     
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div @click="showMenu" v-show="mobile" class="mobile-menu">
      <i class="bi bi-list"></i>
      <transition name="mobile-icon">
        <ul v-show="mobileNav" class="mobile-nav">
          <router-link :to="{ name: 'Home' }" class="link"> Home</router-link>
          <router-link :to="{ name: 'About' }" class="link"> About</router-link>
          <router-link :to="{ name: 'Advantages' }" class="link">
            Advantages
          </router-link>
          <router-link :to="{ name: 'Service' }" class="link">
            Services
          </router-link>
          <router-link :to="{ name: 'News' }" class="link"> News</router-link>
        </ul>
      </transition>
    </div>
  </header>
</template>

<script>
import i18n form '@/plugins/i18n'
import axios from 'axios'
export default {
  name: "NavBar",
  components: {},
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 1023) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
    },
    showMenu() {
      this.mobileNav = !this.mobileNav;
    },
  },
};
</script>
<style lang="scss" scoped>
header {
  direction: rtl;
  background: #fff;
  // padding: 0 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  z-index: 99;
  //   display: flex;
  //   justify-content: space-between;

  nav {
    // display: flex;
    padding: 1% 0;

    .logo {
      align-items: center;
      img {
        width: 60px;
        height: 60px;
      }
      .header {
        font-weight: 600;
        font-size: 24px;
        color: #000;
        text-decoration: none;
      }
    }
    .nav-link {
      position: relative;
      // display: flex;
      // align-items: center;
      justify-content: space-between;
      align-items: center;

      ul {
        margin: 0;
        padding: 0;
      }
    }
  }
  .mobile-menu {
    cursor: pointer;
    position: absolute;
    top: 32px;
    left: 25px;
    height: 25px;
    width: 25px;
    i {
      font-size: 30px;
      color: var(--color-primary);
      border: 1px solid var(--color-secound);
      border-radius: 8px;
    }
  }
  .mobile-nav {
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background: #303030;
    top: 0;
    left: 0;
    .link {
      padding: 15px 0;
      color: white;
    }
  }

  //   animation of nav mobile
  .mobile-icon-enter-active,
  .mobile-icon-leave-active {
    transition: all 1s ease;
  }
  .mobile-icon-enter {
    transform: translateX(-250px);
  }
  .mobile-icon-enter-to {
    transform: translateX(0px);
  }
  .mobile-icon-leave-to {
    transform: translateX(-250px);
  }
}
</style>