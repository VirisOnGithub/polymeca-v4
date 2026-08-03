<template>
  <div
    ref="containerRef"
    class="w-full min-w-25"
  >
    <div
      v-if="isLoading"
      class="flex justify-center px-12 italic"
    >
      <LoaderSpinner />
    </div>

    <div
      v-else
      class="relative w-full"
      :style="{ height: `${layout.containerHeight}px` }"
    >
      <div
        v-for="(box, index) in layout.boxes"
        :key="getSource(loadedPhotos, index)"
        class="absolute overflow-hidden rounded-[8px] transition-all duration-200 ease-in"
        :style="{
          top: `${box.top}px`,
          left: `${box.left}px`,
          width: `${box.width}px`,
          height: `${box.height}px`
        }"
      >
        <img
          class="w-full h-full object-cover block"
          :src="getSource(loadedPhotos, index)"
          :alt="`Photo ${index + 1}`"
          loading="lazy"
          data-aos="fade-up"
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import createJustifiedLayout from 'justified-layout'
import LoaderSpinner from './LoaderSpinner.vue'

interface PhotoMeta {
  src: string
  width: number
  height: number
}

const props = withDefaults(
  defineProps<{
    urls: string[]
    targetRowHeight?: number
    boxSpacing?: number
    containerPadding?: number
  }>(),
  {
    targetRowHeight: 280,
    boxSpacing: 10,
    containerPadding: 0
  }
)

const containerRef = ref<HTMLElement | null>(null)
const containerWidth = ref(0)
const isLoading = ref(true)
const loadedPhotos = ref<PhotoMeta[]>([])

const getSource = (photos: PhotoMeta[], index: number): string => {
  const photo = photos[index]
  if (photo === undefined) {
    return ''
  }
  return photo.src
}

const getImageDimensions = (url: string): Promise<PhotoMeta> => {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => {
      resolve({
        src: url,
        width: img.naturalWidth || 800,
        height: img.naturalHeight || 600
      })
    }
    img.onerror = () => {
      resolve({ src: url, width: 800, height: 600 })
    }
    img.src = url
  })
}

const processImages = async () => {
  isLoading.value = true
  if (!props.urls || props.urls.length === 0) {
    loadedPhotos.value = []
    isLoading.value = false
    return
  }

  const results = await Promise.all(
    props.urls.map(url => getImageDimensions(url))
  )
  loadedPhotos.value = results
  isLoading.value = false
}

const layout = computed(() => {
  if (!containerWidth.value || loadedPhotos.value.length === 0) {
    return { containerHeight: 0, boxes: [] }
  }

  const geometryInputs = loadedPhotos.value.map(photo => ({
    width: photo.width,
    height: photo.height
  }))

  return createJustifiedLayout(geometryInputs, {
    containerWidth: containerWidth.value,
    targetRowHeight: props.targetRowHeight,
    boxSpacing: props.boxSpacing,
    containerPadding: props.containerPadding
  })
})

let resizeObserver: ResizeObserver | null = null

onMounted(() => {
  processImages()

  if (containerRef.value) {
    containerWidth.value = containerRef.value.clientWidth

    resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        containerWidth.value = entry.contentRect.width
      }
    })

    resizeObserver.observe(containerRef.value)
  }
})

watch(() => props.urls, () => {
  processImages()
}, { deep: true })

onUnmounted(() => {
  if (resizeObserver) {
    resizeObserver.disconnect()
  }
})
</script>
