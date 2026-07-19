<script setup>
const props = defineProps({
  icon: String,
  title: String,
  content: {
    type: [String, Array],
    required: true
  },
  onclick: Function
})
</script>

<template>
  <div>
    <p class="text-muted">
      {{ props.title.toUpperCase() }}
    </p>
    <div class="flex">
      <UIcon
        :name="props.icon"
        class="bg-secondary"
      />
      <p v-if="typeof(props.content) === 'string'">
        {{ props.content }}
      </p>
      <div
        v-for="line in props.content"
        v-else
        :key="line"
        class="inline"
      >
        <p>{{ line }}</p>
      </div>
    </div>
  </div>
</template>
