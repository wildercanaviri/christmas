<script setup lang="ts">
import {ref} from "vue";

const audio = ref<HTMLAudioElement | null>(null);
const isPlay = ref<boolean>(false);

const toggleAudio = () => {
  isPlay.value = !isPlay.value;
  if (audio.value) {
    if (isPlay.value) {
      audio.value.play();
    }else {
      audio.value.pause();
    }
  }
}
</script>
<template>
  <div class="flex items-center gap-2">
    <p class="text-white custom-text">Hacer click!</p>
    <div id="play" v-if="!isPlay" @click="toggleAudio()">
      <svg class="h-10 w-10 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <polygon points="10 8 16 12 10 16 10 8" /></svg>
    </div>
    <div id="pause" v-else @click="toggleAudio()" >
      <svg class="h-10 w-10 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="10" y1="15" x2="10" y2="9" />  <line x1="14" y1="15" x2="14" y2="9" /></svg>
    </div>
    <audio ref="audio">
      <source src="../../assets/music/music.mp3" type="audio/mp3">
    </audio>
  </div>

</template>
<style scoped>
  #play,
  #pause {
    float: left;
    width: 40px;
  }
  #play:hover,
  #pause:hover {
    cursor: pointer;
  }
  .custom-text {
    font-family: 'Sunfish', sans-serif;
    font-size: 2rem;
    color: whitesmoke;
  }
</style>