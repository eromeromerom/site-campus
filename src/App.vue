<script lang="ts">
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
  <!-- <Corpo /> -->
  <NoticiaView />

  <Rodape />

</template>

<style scoped></style>
