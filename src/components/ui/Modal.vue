<template>
  <div>
    <div class="container">
      <div class="head">
        <i @click="$emit('close')" class="bi bi-x-circle"></i>
      </div>
      <div class="body">
        <iframe
          src=" https://www.youtube.com/embed/Zr3Bds_niLo"
          autoplay
          allowfullscreen
          frameborder="0"
         
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'modal',
    emit:['close']
};
</script>

<style lang="scss" scoped>

</style>
