<template>
  <div class="modal-window__block">
    <vModalWindowHeader />
    <vModalWindowList />
  </div>
</template>

<script>
import vModalWindowList from './v-modal-window-list';
import vModalWindowHeader from './v-modal-window-header';

export default {
  components: {
    vModalWindowList,
    vModalWindowHeader
  }
}
</script>