<script setup lang="ts">
import AutoJustifiedGallery from '~/components/gallery/AutoJustifiedGallery.vue'

const bare_urls = ref([
  'BRC01379.jpg', 'BRC01380.jpg', 'BRC01382.jpg', 'BRC01389.jpg', 'BRC01393.jpg', 'BRC01395.jpg', 'BRC01400.jpg', 'BRC01405.jpg', 'BRC01406.jpg', 'BRC01416.jpg', 'BRC01420.jpg', 'BRC01422.jpg', 'BRC01426 (2).jpg', 'BRC01426.jpg', 'BRC01435.jpg', 'BRC01437 (1).jpg', 'BRC01438.jpg', 'BRC01441 (1).jpg', 'IMG_3887(1).jpg', 'IMG_3887.jpg', 'IMG_3906.jpg', 'IMG_3910.jpg'
])
const urls = ref(bare_urls.value.map(e => '/img/car/' + e))
</script>

<template>
  <div>
    <h1 class="text-center text-7xl my-6">
      Photos de la voiture
    </h1>
    <AutoJustifiedGallery
      :urls
      :target-row-height="300"
    />
  </div>
</template>
