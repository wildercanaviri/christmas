<script setup lang="ts">

</script>
<template>
<ul class="lightrope">
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
</template>
<style lang="scss">
@use 'sass:math';

$globe-width: 12px;
$globe-height: 35px;
$globe-spacing: 40px;
$globe-spread: 5px;
$light-off-opacity: 0.4;
$light-1: #ff0000; // rojo
$light-2: #FFC10E; // amarillo
$light-3: #259f48; // verde

body {
  background: #000;
}

.lightrope {
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  position: absolute;
  z-index: 1;
  margin: -15px 0 0 0;
  padding: 0;
  pointer-events: none;
  width: 100%;

  li {
    position: relative;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    list-style: none;
    padding: 0;
    display: inline-block;
    width: $globe-width;
    height: $globe-height;
    border-radius: 50%;
    margin: math.div($globe-spacing, 2);
    background: $light-1;
    box-shadow: 0 math.div($globe-height, 6) $globe-width * 2 $globe-spread $light-1;
    animation-name: flash-1;
    animation-duration: 2s;

    &:nth-child(2n+1) {
      background: $light-2;
      box-shadow: 0 math.div($globe-height, 6)  $globe-width * 2 $globe-spread $light-2;
      animation-name: flash-2;
      animation-duration: 1.4s;
    }

    &:nth-child(3n+1) {
      background: $light-3;
      box-shadow: 0 math.div($globe-height, 6) $globe-width * 2 $globe-spread $light-3;
      animation-name: flash-3;
      animation-duration: 1.8s;
    }

    &:before {
      content: "";
      position: absolute;
      background: #222;
      width: ($globe-width - 2);
      height: math.div($globe-height, 3);
      border-radius: 3px;
      top: math.div($globe-height, -6) ;
      left: 1px;
    }

    &:after {
      content: "";
      top:  math.div($globe-height, -2);
      left: $globe-width - 3;
      position: absolute;
      width: $globe-spacing + 12;
      height: math.div($globe-height, 3)*2;
      border-bottom: solid #222 2px;
      border-radius: 50%;
    }

    &:last-child:after {
      content: none;
    }

    &:first-child {
      margin-left: -$globe-spacing;
    }
  }
}

@keyframes flash-1 {
  0%, 100% {
    background: $light-1;
    box-shadow: 0 math.div($globe-height, 6) $globe-width * 2 $globe-spread $light-1;
  }
  50% {
    background: rgba($light-1, $light-off-opacity);
    box-shadow: 0 math.div($globe-height, 6) $globe-width * 2 $globe-spread rgba($light-1, $light-off-opacity);
  }
}

@keyframes flash-2 {
  0%, 100% {
    background: $light-2;
    box-shadow: 0 math.div($globe-height, 6) $globe-width * 2 $globe-spread $light-2;
  }
  50% {
    background: rgba($light-2, $light-off-opacity);
    box-shadow: 0 math.div($globe-height, 6) $globe-width * 2 $globe-spread rgba($light-2, $light-off-opacity);
  }
}

@keyframes flash-3 {
  0%, 100% {
    background: $light-3;
    box-shadow: 0 math.div($globe-height, 6) $globe-width * 2 $globe-spread $light-3;
  }
  50% {
    background: rgba($light-3, $light-off-opacity);
    box-shadow: 0 math.div($globe-height, 6) $globe-width * 2 $globe-spread rgba($light-3, $light-off-opacity);
  }
}

</style>
