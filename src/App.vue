<script setup lang="ts">
import { ref } from 'vue';
import Lights from './components/lights/Lights.vue';
import Fireflies from './components/fireflies/Fireflies.vue';
import Countdown from './components/Countdown/Countdown.vue';
import ButtonChristmas from "./components/Button/ButtonChristmas.vue";
import ButtonMusic from "./components/Button/ButtonMusic.vue";
import ButtonPage from "./components/Button/ButtonPage.vue";

const isLoading = ref(false);
const isPlay = ref(false);
const message = ref('');
const page = ref(1);

const handlePlay = (playStatus: boolean) => {
  isPlay.value = playStatus;
}

const handleLoading = (loadingStatus: boolean) => {
  isLoading.value = loadingStatus;
}

const handleMessage = (msg: string) => {
  message.value = msg;
}

const handlePage = (value: string) => {
  page.value = value;
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
      <div v-show="isPlay" class="absolute inset-x-0 z-10 top-12 md:top-8">
        <img src="./assets/images/tree.gif" class="tree-custom" alt="" srcset="">
      </div>
      <div class="flex flex-col items-center pt-28 pb-4 z-20">
        <div v-if="page == 1">
          <h1 class="custom-title pb-8 text-center text-6xl md:text-8xl">¡Estamos contando los días para la Navidad!</h1>
          <div class="flex justify-center">
            <Countdown></Countdown>
          </div>
          <p class="custom-text text-center py-4 md:py-12" v-show="isLoading">
            <img src="./assets/images/santa1.gif" class="loading-santa" alt="" srcset="">
          </p>
          <p class="custom-text text-center py-8 md:py-12 text-4xl md:text-5xl" v-if="message == '' && !isLoading">De parte del equipo de Sistemas les deseamos una <b>Feliz Navidad</b> llena de alegría y un <b>Año Nuevo</b> lleno de exitos</p>
          <p class="custom-text text-center py-8 md:py-12 text-4xl md:text-5xl" v-if="message != '' && !isLoading">{{message}}</p>
          <div class="flex justify-center">
            <ButtonChristmas @loading="handleLoading" @message="handleMessage"></ButtonChristmas>
          </div>
        </div>
        <div v-if="page == 2" class="text-center">
          <h1 class="custom-title pb-6 text-center text-6xl md:text-8xl">
            Somos sistemas
          </h1>
          <p class="custom-text">
          Esta página web es un ejemplo de nuestra creatividad. Espero que nuestros mensajes motivacionales te inspiren y te ayuden a comenzar el día con energía.
          </p>
          <p class="custom-text font-bold">
            Somos parte del eslabon más importante de la empresa
          </p>
        </div>
        <div v-if="page == 3" class="text-center">
          <h1 class="custom-title pb-2 text-center text-6xl md:text-8xl">
            Equipo de Sistemas
          </h1>
          <ul class="custom-text">
            <li>Limbert Fuentes Quiroga</li>
            <li>Ronal Ayra Revollo</li>
            <li>Wilder Canaviri Astete</li>
            <li>Dennys Barja Carballo</li>
            <li>Alejandro Cesar Rodriguez Arce</li>
          </ul>
        </div>
        <ButtonPage @page="handlePage"></ButtonPage>
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

.custom-text li {
  font-family: 'Sunfish', sans-serif;
  font-size: 2.2rem;
  color: whitesmoke;
}

.footer-image {
  width: 90%;
  height: 140px;
  margin: 0 auto;
}

</style>
