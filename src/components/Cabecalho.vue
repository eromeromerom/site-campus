<script lang="ts">
import DropDown from './DropDown.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Cabecalho',
  components: {
    DropDown
  },
  data() {
    return {
      menuItems: [
        { title: 'Início', link: '/', dropdown: false },
        {
          title: 'Institucional',
          dropdown: true,
          items: [
            { title: 'Calendário universitário', link: '#' },
            { title: 'Conheça o campus', link: '#' },
            { title: 'Gestão do campus', link: '#' },
            { title: 'Ouvidoria', link: '#' },
            { title: 'Concursos e seleções', link: '#' },
            { title: 'Identidade visual', link: '#' },
            { title: 'Eventos', link: '#' },
            { title: 'Notícias', link: '#' },
            { title: 'Fotos', link: '#' },
            { title: 'Fale conosco', link: '#' }
          ]
        },
        {
          title: 'Ensino',
          dropdown: true,
          items: [
            { title: 'Secretaria acadêmica', link: '#' },
            { title: 'Graduação', link: '#' },
            { title: 'Pós-graduação', link: '#' }
          ]
        },
        {
          title: 'Pesquisa e Inovação',
          dropdown: true,
          items: [
            { title: 'Sobre P&I', link: '#' },
            { title: 'INOVE', link: '#' },
            { title: 'Grupos de pesquisa', link: '#' },
            { title: 'Projetos de pesquisa', link: '#' }
          ]
        },
        {
          title: 'Extensão',
          dropdown: true,
          items: [
            { title: 'Sobre extensão', link: '#' },
            { title: 'Cursos de extensão', link: '#' },
            { title: 'Projetos de extensão', link: '#' },
            { title: 'Programas de extensão', link: '#' }
          ]
        },
        {
          title: 'Pesquisa',
          dropdown: true,
          items: [
            { title: 'Espaço dos alunos', link: '#' },
            { title: 'Professores', link: '#' },
            { title: 'Técnico administrativos', link: '#' }
          ]
        },
        {
          title: 'Setores',
          dropdown: true,
          items: [
            { title: 'Biblioteca', link: '#' },
            { title: 'Comissão de direitos humanos', link: '#' },
            { title: 'Estágio', link: '#' },
            { title: 'NAS - Assistência estudantil', link: '#' },
            { title: 'Núcleo de TICs', link: '#' },
            { title: 'Prefeitura do Campus', link: '#' },
            { title: 'Restaurante Universitário', link: '#' }
          ]
        },
        { title: 'Sistemas', link: '#', dropdown: false }
      ]
    };
  }
});
</script>

<template>
  <div class="div-logo">
    <div class="container-logo">
      <img src="./imagens/colorido_horizontal.png" alt="" class="img-logo">
    </div>
  </div>

  <div class="menu">
    <div v-for="(item, index) in menuItems" :key="index">
      <RouterLink v-if="!item.dropdown" :to="item.link">
        <div class="item-menu">
          <p class="text-item-menu">{{ item.title }}</p>
        </div>
      </RouterLink>
      <DropDown v-else :title="item.title" :items="item.items" />
    </div>
  </div>

  <img src="./imagens/banner.png" alt="" class="banner">
</template>

<style scoped>
/* Estilos gerais */
* {
  text-decoration: none;
  padding: 0;
  margin: 0;
}

.img-logo {
  width: 163.64px;
  height: 43.751px;
  flex-shrink: 0;
}

.container-logo {
  display: flex;
  width: 218.013px;
  height: 80px;
  justify-content: center;
  align-items: center;
}

.div-logo {
  display: flex;
  padding: 0px 40px 0px 12px;
  justify-content: center;
  align-items: center;
  background: #FAFAFA;
}

.menu {
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-menu {
  padding: 16px;
}

.item-menu:hover {
  font-weight: 700;
  background-color: #F7F7F7;
}

.text-item-menu {
  color: #01579B;
  font-family: Lato;
  font-size: 16px;
  font-weight: 500;
}

.text-item-menu:hover {
  font-weight: 700;
}

.banner {
  width: 100%;
}
</style>
