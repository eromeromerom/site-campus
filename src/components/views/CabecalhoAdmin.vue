<script>
export default {


}
</script>

<template>

    <div class="div-logo">
        <div class="container-logo">
            <img src="../imagens/colorido_horizontal.png" alt="" class="img-logo">
        </div>
        <a href="#">
            <div class="button">
                <p class="text-button">Sair</p>
            </div>
        </a>
    </div>

    <div class="main">
        <div class="main-content">
            <div class="cabecalho">
                <p class="title-cabecalho">
                    Olá
                </p>
                <p class="legenda">
                    Faça login para continuar
                </p>

            </div>

            <div class="campo-nome">
                <p class="title">
                    Nome de usuário
                </p>

                <input class="forms-nome" v-model="message" placeholder="Nome de usuário" />

            </div>
            <div class="campo-senha">
                <p class="title">
                    Senha
                </p>
                <input class="forms-senha" type="password" v-model="message" placeholder="Senha" />

            </div>


            <div id="button-acesso">
                <a href="#">
                    <div class="acesso">
                        <p class="acesso-text">Acessar</p>

                    </div>
                </a>

            </div>



        </div>

    </div>

</template>


<style scoped>
.cabecalho {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;

}

.title-cabecalho {
    height: 53px;
    align-self: stretch;

    color: #000;
    text-align: center;
    font-family: Mukta;
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;

}

.legenda {
    flex: 1 0 0;

    color: #000;
    text-align: center;
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

}

.title {

    color: #000;
    font-family: Mukta;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.forms-nome {
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.20);
    background: #FFF;

    display: flex;
    padding: 8px 16px;
    align-items: center;
    gap: 8px;
    align-self: stretch;
}

.forms-senha {
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.20);
    background: #FFF;

    display: flex;
    padding: 8px 16px;
    align-items: center;
    gap: 8px;
    align-self: stretch;


}

.campo-nome {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;

}

.campo-senha {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
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
    justify-content: space-between;
    align-items: center;
    align-self: stretch;

    background: #FAFAFA;

}

.button {
    text-decoration: none;
    display: flex;
    padding: 8px 24px;
    align-items: center;
    gap: 8px;

    border-radius: 40px;
    background: #E9E9E9;

}

.text-button {
    color: #000;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

}

.main {
    display: flex;
    padding: 64px 80px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 48px;
    flex: 1 0 0;
    align-self: stretch;

    background: #FCFCFC;

}

.main-content {
    display: flex;
    width: 360px;
    padding: 16px;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

    border-radius: 16px;
    background: #FFF;

}

.acesso {
    display: flex;
    padding: 8px 24px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;

    border-radius: 40px;
    background: #01579B;

}

.acesso-text {

    color: #FFF;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

}

#button-acesso {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    align-self: stretch;

}
</style>
