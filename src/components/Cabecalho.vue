<script lang="ts">
import DropDown from './DropDown.vue';

export default {
//     name: 'cabecalho',
//     components: {
//         DropDown
//     },
//     data() {
//         return {
//             institucional: [
//                 {
//                     title: 'Calendário universitário',
//                     link: '#'
//                 },
//                 {
//                     title: 'Conheça o campus',
//                     link: '#'
//                 },
//                 {
//                     title: 'Gestão do campus',
//                     link: '#'
//                 },
//                 {
//                     title: 'Ouvidoria',
//                     link: '#'
//                 },
//                 {
//                     title: 'Concursos e seleções',
//                     link: '#'
//                 },
//                 {
//                     title: 'Identidade visual',
//                     link: '#'
//                 },
//                 {
//                     title: 'Eventos',
//                     link: '#'
//                 },
//                 {
//                     title: 'Notícias',
//                     link: '#'
//                 },
//                 {
//                     title: 'Fotos',
//                     link: '#'
//                 },
//                 {
//                     title: 'Fale conosco',
//                     link: '#'
//                 }
//             ]
//         }
//     }
// 
}
</script>

<template>

    <div class="div-logo">
        <div class="container-logo">
            <img src="./imagens/colorido_horizontal.png" alt="" class="img-logo">
        </div>

    </div>
    <div class="menu">
        <RouterLink to="/">
            <div class="item-menu">
                <p class="text-item-menu"> Início </p>
            </div>
        </RouterLink>

        <!-- <div class="item-menu"><a href="#" class="text-item-menu">Início</a></div> -->
        <!-- <a href="#" class="item-menu">Instituição <span class="material-symbols-outlined"> stat_minus_1
            </span></a> -->
        
            <!-- <Dropdown title="Instituição" :items="institucional" /> -->
            <div class="item-menu"><a href="#" class="text-item-menu">Instituição</a></div>


        <div class="item-menu"><a href="#" class="text-item-menu">Ensino</a></div>
        <div class="item-menu"><a href="#" class="text-item-menu">Pesquisa e Inovação</a></div>
        <div class="item-menu"><a href="#" class="text-item-menu">Extensão</a></div>
        <div class="item-menu"><a href="#" class="text-item-menu">Pesquisa</a></div>
        <div class="item-menu"><a href="#" class="text-item-menu">Setores</a></div>
        <RouterLink to="/adminPainel">
            <div class="item-menu">
                <p class="text-item-menu"> Sistemas </p>
            </div>
        </RouterLink>

    </div>
    <img src="./imagens/banner.png" alt="" class="banner">


</template>

<style scoped>
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
    /* padding: 18.124px 27.187px; */
    justify-content: center;
    align-items: center;
}

.div-logo {
    display: flex;
    padding: 0px 40px 0px 12px;
    justify-content: center;
    align-items: center;
    align-self: stretch;

    background: #FAFAFA;

}

.menu {
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: stretch;
}

.item-menu {
    padding: 16px;


}

.item-menu:hover {
    font-weight: 700;
    background-color: #F7F7F7;
}

.text-item-menu {

    text-decoration: none;

    color: #01579B;

    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

}

.text-item-menu:hover {
    font-weight: 700;

}

.icon {}

.banner {
    width: 100%;

}
</style>