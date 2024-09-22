<script lang="ts">

export default {
    props:[
        'title',
        'body',
        'date'
    ]

}
</script>


<template>

    <div class="card">

        <div class="img-card">
            <img src="./imagens/photo.svg" alt="">
        </div>
        <div class="text-card">


            <div class="in-card">

                <!-- <h3 class="titulo-card"><a href="#">Transferência Interna: inscrições para mudança de curso estarão abertas de 19 a 21 de agosto</a></h3> -->

                <h3 class="titulo-card">{{title}}</h3>

                <p class="corpo-texto-card">
                    {{body}}
                </p>

            </div>

            <p class="data-card">
                {{date}}

            </p>
        </div>
    </div>

</template>


<style scoped>

a {
    text-decoration: none;
}

.card {
    /* Layout */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 1 0 0;

    /* Style */
    background: #ffffff;

}

.in-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
}

.img-card {
    display: flex;
    height: 201px;
    padding: 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    align-self: stretch;

    background: #EDEDED;
}

.text-card {
    display: flex;
    padding: 16px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 32px;
    align-self: stretch;


}

.titulo-card {

    /* Layout */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    align-self: stretch;

    /* Tipografia */
    overflow: hidden;
    color: #01579B;
    text-overflow: ellipsis;
    font-family: Lato;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

}

.titulo-card:hover{
    text-decoration: underline;

}

.corpo-texto-card {
    /* Style */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    align-self: stretch;

    /* Tipografia */
    overflow: hidden;
    color: #2D2D2D;
    text-overflow: ellipsis;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;


}

.data-card {
    align-self: stretch;

    color: #666;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

}
</style>