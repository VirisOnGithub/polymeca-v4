<script setup>
import { OrbitControls, GLTFModel } from '@tresjs/cientos'
import { TresCanvas } from '@tresjs/core'
</script>

<template>
  <div class="w-full min-h-100 relative">
    <ClientOnly>
      <TresCanvas clear-color="#111827">
        <TresPerspectiveCamera
          :position="[0, 2, 5]"
          :look-at="[0, 0, 0]"
        />

        <OrbitControls />

        <TresAmbientLight :intensity="1" />
        <TresDirectionalLight
          :position="[3, 3, 3]"
          :intensity="1.5"
        />

        <Suspense>
          <GLTFModel
            path="/models/b.glb"
            draco
          />
        </Suspense>
      </TresCanvas>
    </ClientOnly>
  </div>
</template>
