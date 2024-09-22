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
        <div class="texto-noticia">
            <h3 class="titulo-noticia">
                {{title}}
            </h3>
            <p class="corpo-noticia">
                {{body}}
            </p>

        </div>

        <p class="data">{{date}}</p>
    </div>

</template>


<style scoped>
.card {

    display: flex;
    padding: 16px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 32px;
    align-self: stretch;
    background-color: #ffffff;
}

.texto-noticia {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;

}

.titulo-noticia {
    overflow: hidden;
    color: #01579B;
    text-overflow: ellipsis;
    font-family: Lato;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    align-self: stretch;


}

.corpo-noticia {
    overflow: hidden;
    color: #2D2D2D;
    text-overflow: ellipsis;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    align-self: stretch;
}

.data {
    align-self: stretch;

    color: #666;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

}
</style>