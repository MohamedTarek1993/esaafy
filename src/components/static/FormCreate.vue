<template>
  <form @submit.prevent="sendData">
    <div class="input">
      <input
        class="form-control"
        type="text"
        placeholder="الأسم"
        v-model="formData.name"
      />
    </div>
    <div class="input">
      <input
        class="form-control"
        type="email"
        placeholder="البريد الألكتروني"
        v-model="formData.email"
      />
    </div>
    <div class="input">
      <input
        class="form-control"
        type="text"
        placeholder="الموضوع"
        v-model="formData.subject"
      />
    </div>
    <div class="input">
      <textarea
        class="form-control"
        type="text"
        placeholder="رسالتك"
        v-model="formData.textarea"
      />
    </div>
    <button class="btn">أرسال</button>
  </form>
</template>

<script>
import axios from "axios";
export default {
  name: "FormCreate",
  data() {
    return {
      formData: {
        name: "",
        email: "",
        subject: "",
        textarea: "",
      },
    };
  },
  methods: {
    sendData() {
      axios
        .post(
          "https://esaafy.crazyideaco.com/public/api/web_contact",
          this.formData
        )
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  padding: 8% 1% 3%;
  .input {
    margin-bottom: 6%;
    .form-control {
      font-family: "regular";
      border-radius: 10px;
    }
    textarea {
      height: 200px;
    }
  }
  .btn {
    font-family: "regular";
    color: var(--color-primary);
    border: 1px solid var(--color-primary);
    border-radius: 8px;
    width: 40%;
    transition: .25s all ease;
    &:hover{
      background: var(--color-primary);
      color: white;
    }
  }
}
</style>

