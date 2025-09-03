<template>
  <div class="logo-container" :style="{ width: size + 'px', height: size + 'px' }">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="logo-svg"
      fill="currentColor"
    >
      <title>Logo CapSup'</title>
      <g class="cap">
        <path d="M12,3L1,9L12,15L23,9L12,3M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
      </g>
      <g class="gear-group">
        <path class="gear-outer" d="M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" />
        <path class="gear-inner" d="M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z" />
        <path class="gear-center" d="M12,10.5A1.5,1.5 0 0,0 10.5,12A1.5,1.5 0 0,0 12,13.5A1.5,1.5 0 0,0 13.5,12A1.5,1.5 0 0,0 12,10.5Z" />
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
defineProps({
  size: {
    type: Number,
    default: 40
  }
})
</script>

<style scoped>
.logo-container {
  cursor: pointer;
  display: inline-block;
}

.logo-svg {
  height: 100%;
  width: 100%;
  vertical-align: middle;
  overflow: visible;
}

.cap,
.gear-group,
.gear-outer,
.gear-inner,
.gear-center {
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55);
  transform-origin: center;
}

.cap {
  opacity: 1;
}

.gear-group {
  opacity: 0;
}

.logo-container:hover .cap {
  opacity: 0;
  transform: scale(0) rotate(360deg);
}

.logo-container:hover .gear-group {
  opacity: 1;
  transform: rotate(180deg);
}

.gear-outer {
  transform: scale(0.8);
}

.logo-container:hover .gear-outer {
  transform: scale(1);
}

.gear-inner {
  transform: scale(0);
}

.logo-container:hover .gear-inner {
  transform: scale(1);
  transition-delay: 0.1s;
}

.gear-center {
  transform: scale(0);
}

.logo-container:hover .gear-center {
  transform: scale(1);
  transition-delay: 0.2s;
}
</style>
