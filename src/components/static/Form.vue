<template>
  <form>
       <div class="input">
          <input type="text" placeholder="الأسم" v-model="name" />
        </div>
      <div class="input">
          <input type="email" placeholder="البريد الألكتروني" v-model="email" />
        </div>
          <div class="input">
          <input type="text" placeholder="الموضوع" v-model="subject" />
        </div>
          <div class="input">
          <textarea type="text" placeholder="رسالتك" v-model="textarea" />
        </div>
  </form>
</template>

<script>
export default {
name:'form',
data(){
    return{
        name:'',
        email:'',
        subject:'',
        textarea:'',
    }
}
}
</script>

<style>

</style>