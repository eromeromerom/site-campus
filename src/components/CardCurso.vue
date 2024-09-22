<script lang="ts">
export default {
    props:[
        'title'
    ]

}
</script>

<template>
    <div class="card">
        <div class="img"><img src="./imagens/draw.svg" alt=""></div>
        <h4>{{title}}</h4>

    </div>


</template>

<style scoped>
.card {
    display: flex;
    min-height: 120px;
    padding: 16px;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    flex: 1 0 0;

    background: #FFF;
}

h4 {
    align-self: stretch;

    color: #01579B;
    text-align: center;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

}
</style>