<template>
  <li :class="`modal-window__list-item ${choice ? 'bg-black' : ''} ${file.ready_remove ? 'decrease-anim' : ''}`"
      :style="`background-image: url(${file.url})`"
      v-on:click="choice = !choice"
  >
    <button 
      :class="`modal-window__list-item-btn ${choice ? 'show' : ''}`"
      v-on:click="$emit('removeImage', file), file.ready_remove = true"
    >Удалить</button>
  </li>
</template>

<script>
export default {
  props: ['file'],
  data() {
    return {
      choice: false
    }
  }
}
</script>