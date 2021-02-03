<template>
  <div class="modal-window">
    <div class="container">
      <div class="modal-window__content">
        <vModalWindowBlock />
      </div>
    </div>
  </div>
</template>

<script>
import vModalWindowBlock from './v-modal-window-block';

export default {
  components: {
    vModalWindowBlock
  }
}
</script>