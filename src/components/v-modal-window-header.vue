<template>
  <header class="modal-window__header">
    <div class="modal-window__header-item">
        <h2 class="modal-window__header-heading">Загрузка картинок</h2>
    </div>
    <div class="modal-window__header-item">
      <label for="add-image">
        <input type="file" id="add-image" v-on:change="loadFile">
        <span>{{ $store.getters.getErrorFile ? 'Повторите еще раз!' : 'Добавить' }}</span>
      </label>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    loadFile(e) {
      try {
        const file = e.target.files[0];

        const obj = {
          url: window.URL.createObjectURL(file),
          name: file.name,
          size: file.size,
          id: Math.ceil(Math.random() * Date.now() * 0.5),
          ready_remove: false
        }
        
        this.$store.dispatch('addImage', obj);
        this.$store.state.error_file = false;
      } catch {
        this.$store.state.error_file = true;
      }
    }
  }
}
</script>