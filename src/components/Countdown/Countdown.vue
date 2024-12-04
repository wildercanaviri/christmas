<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const days = ref<number>(0);
const hours = ref<number>(0);
const minutes = ref<number>(0);
const seconds = ref<number>(0);

const updateCountdown = (): void => {
    const now = new Date();
    const christmas = new Date(now.getFullYear(), 11, 25);

    if (now > christmas) {
        christmas.setFullYear(christmas.getFullYear() + 1);
    }

    const diff = christmas.getTime() - now.getTime();
    const totalSeconds = Math.floor(diff / 1000);

    days.value = Math.floor(totalSeconds / (60 * 60 * 24));
    hours.value = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    minutes.value = Math.floor((totalSeconds % (60 * 60)) / 60);
    seconds.value = totalSeconds % 60;
};

let interval: number | undefined;

onMounted(() => {
    updateCountdown();
    interval = window.setInterval(updateCountdown, 1000);
});

onUnmounted(() => {
    if (interval !== undefined) {
        clearInterval(interval);
    }
});
</script>
<template>
    <div class="grid auto-cols-max grid-flow-col gap-5 text-center">
        <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
            <span class="countdown font-mono text-5xl">
                <span :style="`--value:${days}`">{{ days }}</span>
            </span>
            días
        </div>
        <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
            <span class="countdown font-mono text-5xl">
                <span :style="`--value:${hours}`">{{ hours }}</span>
            </span>
            horas
        </div>
        <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
            <span class="countdown font-mono text-5xl">
                <span :style="`--value:${minutes}`">{{minutes}}</span>
            </span>
            minutos
        </div>
        <div class="bg-neutral rounded-box text-neutral-content flex flex-col p-2">
            <span class="countdown font-mono text-5xl">
                <span :style="`--value:${seconds}`">{{seconds}}</span>
            </span>
            seg
        </div>
    </div>
</template>