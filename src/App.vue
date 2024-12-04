<script setup lang="ts">
import { ref } from 'vue';
import Lights from './components/lights/Lights.vue';
import Fireflies from './components/fireflies/Fireflies.vue';
import Countdown from './components/Countdown/Countdown.vue';
import ButtonChristmas from "./components/Button/ButtonChristmas.vue";
import ButtonMusic from "./components/Button/ButtonMusic.vue";

const isLoading = ref(false);
const message = ref('');

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
    <div class="button-music absolute top-10 right-8">
      <ButtonMusic></ButtonMusic>
    </div>
    <div class="content-chritmas flex flex-col justify-items-center items-center p-2 md:p-0">
      <div class="flex flex-col items-center">
        <h1 class="custom-title pt-28 pb-8 text-center text-6xl md:text-8xl">¡Estamos contando los días para la Navidad!</h1>

        <Countdown></Countdown>
        <p class="custom-text text-center py-4 md:py-12" v-if="isLoading">
          <span class="loading loading-ball loading-xs"></span>
          <span class="loading loading-ball loading-sm"></span>
          <span class="loading loading-ball loading-md"></span>
          <span class="loading loading-ball loading-lg"></span>
        </p>
        <p class="custom-text text-center py-4 md:py-12 text-4xl md:text-5xl" v-if="message == '' && !isLoading">De parte del equipo de Sistemas les deseamos una <b>Feliz Navidad</b> llena de alegría y un <b>Año Nuevo</b> lleno de exitos</p>
        <p class="custom-text text-center py-4 md:py-12 text-4xl md:text-5xl" v-if="message != '' && !isLoading">{{message}}</p>
        <ButtonChristmas @loading="handleLoading" @message="handleMessage"></ButtonChristmas>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

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
