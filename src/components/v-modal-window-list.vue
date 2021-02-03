<template>
  <ul class="modal-window__list">
    <vModalWindowListItem v-for="(item, i) of getImages" :key="i" :file="item" v-on:removeImage="removeImage"/>
  </ul>
</template>

<script>
import vModalWindowListItem from './v-modal-window-list-item';

export default {
  components: {
    vModalWindowListItem
  },
  computed: {
    getImages() {
      return this.$store.getters.getImages;
    }
  },
  methods: {
    removeImage(file) {
      const { id } = file;

      setTimeout(() => {
        this.$store.state.images = this.$store.state.images.filter(item => item.id !== id);
      }, 300);
    }
  }
}
</script>