<script setup lang="ts">
import { ref } from 'vue';
import Lights from './components/lights/Lights.vue';
import Fireflies from './components/fireflies/Fireflies.vue';
import Countdown from './components/Countdown/Countdown.vue';
import ButtonChristmas from "./components/Button/ButtonChristmas.vue";
import ButtonMusic from "./components/Button/ButtonMusic.vue";

const isLoading = ref(false);
const isPlay = ref(false);
const message = ref('');

const handlePlay = (playStatus: boolean) => {
  isPlay.value = playStatus;
}

const handleLoading = (loadingStatus: boolean) => {
  isLoading.value = loadingStatus;
}

const handleMessage = (msg: string) => {
  message.value = msg;
}
</script>

<template>
  <div class="wrapper">
    <Lights></Lights>
    <Fireflies></Fireflies>
    <div class="button-music absolute top-12 right-8 z-40">
      <ButtonMusic @play="handlePlay"></ButtonMusic>
    </div>
    <div class="logo absolute top-12 left-4 md:left-8 z-40">
      <img class="" src="./assets/images/logo.png" alt="" srcset="">
    </div>

    <div class="content-chritmas flex flex-col justify-items-center items-center p-2 md:p-0 relative">
      <div v-if="isPlay" class="absolute inset-x-0 z-10 top-12 md:top-8">
        <img src="./assets/images/tree.gif" class="tree-custom" alt="" srcset="">
      </div>
      <div class="flex flex-col items-center pt-28 pb-4 z-20">
        <h1 class="custom-title pb-8 text-center text-6xl md:text-8xl">¡Estamos contando los días para la Navidad!</h1>
        <Countdown></Countdown>
        <p class="custom-text text-center py-4 md:py-12" v-if="isLoading">
          <img src="./assets/images/santa1.gif" class="loading-santa" alt="" srcset="">
        </p>
        <p class="custom-text text-center py-8 md:py-12 text-4xl md:text-5xl" v-if="message == '' && !isLoading">De parte del equipo de Sistemas les deseamos una <b>Feliz Navidad</b> llena de alegría y un <b>Año Nuevo</b> lleno de exitos</p>
        <p class="custom-text text-center py-8 md:py-12 text-4xl md:text-5xl" v-if="message != '' && !isLoading">{{message}}</p>
        <ButtonChristmas @loading="handleLoading" @message="handleMessage"></ButtonChristmas>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.logo img{
  padding: 7px;
  width: 71px;
}

.loading-santa {
  height: 120px;
  width: auto;
}

.tree-custom {
  height: 75vh;
  opacity: 0.6;
  margin: 0 auto;
}

.wrapper {
    min-height: 100vh;
    width: 100%;
    background: url(./assets/images/fondo.webp) no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

@media (max-width: 1024px) {
  .wrapper {
    background-size: inherit;
  }
}
.content-chritmas {
  min-height: calc(100vh - 220px);
  padding: 40px 0;
}

.custom-title {
  font-family: 'Sunfish', sans-serif;
  color: whitesmoke;
}

.custom-text {
  font-family: 'Sunfish', sans-serif;
  font-size: 3rem;
  color: whitesmoke;
  padding: 20px 0;
}

.footer-image {
  width: 90%;
  height: 140px;
  margin: 0 auto;
}

</style>
