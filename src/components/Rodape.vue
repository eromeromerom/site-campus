<script lang="ts">
export default {}
</script>

<template>
    <div class="main">

        <div class="info">
            <div class="titulo">
                <h2>
                    Links úteis
                </h2>
            </div>

            <div class="body">

                <div class="collum">
                    <a href="#" class="link">Conheça o Campus</a>
                    <a href="#" class="link">Calendário universitário</a>
                    <a href="#" class="link">Intinerário do ônibus </a>
                </div>

                <div class="collum">
                    <a href="#" class="link">Sistemas</a>
                    <a href="#" class="link">Dúvidas frequentes</a>
                </div>
                <div class="collum">
                    <img id="ufc" src="./imagens/colorido_horizontal.png" alt="">
                </div>
            </div>


        </div>

    </div>

</template>


<style scoped>
h2 {
    color: #FFF;
    font-family: Mukta;
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
}

.main {
    display: flex;
    /* width: var(--screen-width, 1366px); */
    padding: 64px 160px;
    justify-content: center;
    align-items: left;
    gap: 48px;

    background: #01579B;
}

.info {
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 16px;
    flex: 1 0 0;
}

.titulo {
    text-align: left;
}

.body {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;

}

a {
    text-decoration: none;
    color: #FFF;

    font-family: Mukta;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    display: flex;
    padding: 4px 0px;
    justify-content: left;
    align-items: center;
    gap: 8px;
    align-self: stretch;
}

.collum {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    flex: 1 0 0;

}

#ufc {
    width: 310px;
    height: 91px;
}
</style>