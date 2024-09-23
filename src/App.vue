<script lang="ts">
import { RouterLink, RouterView, } from 'vue-router';
import Cabecalho from './components/Cabecalho.vue';
import Corpo from './components/Corpo.vue';
import Rodape from './components/Rodape.vue';
import NoticiaView from './components/views/NoticiaView.vue';



export default {
  components: { Cabecalho, Corpo, NoticiaView, Rodape }
}

</script>

<template>
  
<header>
  <RouterLink to="/">
    <div class="item-menu">
      <p class="text-item-menu"> Visualização de Usuário </p>
    </div>
  </RouterLink>
  <RouterLink to="/adminPainel">
    <div class="item-menu">
      <p class="text-item-menu"> Visualização de Administrador </p>
    </div>
  </RouterLink>
</header>

  <!-- <NoticiaView /> -->
  <RouterView />


</template>
<style scoped>
header{
  display: flex;
}

.item-menu{
  padding: 5px;
}

.text-item-menu{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: xx-small;
}
</style>
