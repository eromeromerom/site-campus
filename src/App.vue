<script lang="ts">
import { RouterView } from 'vue-router';
import Cabecalho from './components/Cabecalho.vue';
import Corpo from './components/Corpo.vue';
import Rodape from './components/Rodape.vue';
import NoticiaView from './components/views/NoticiaView.vue';



export default {
  components: { Cabecalho, Corpo, NoticiaView, Rodape }
}

</script>

<template>
  <Cabecalho />
  <!-- <NoticiaView /> -->
  <RouterView />
  <Rodape />

</template>

<style scoped></style>
