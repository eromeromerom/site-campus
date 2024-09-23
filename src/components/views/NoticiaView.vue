<script lang="ts">
import Cabecalho from '../Cabecalho.vue';
import CardRelacionadas from '../CardRelacionadas.vue';
import Rodape from '../Rodape.vue';



export default {
    components: { Cabecalho, CardRelacionadas, Rodape }
}

</script>
<template>
<Cabecalho />
    <div class="main">
        <div class="cabecalho">
            <h2 id="texto-titulo">
                Sistema de Bibliotecas disponibiliza Empréstimo de Férias a partir de 26 de agosto

            </h2>
            <p id="texto-data">Publicada em: 30 de agosto de 2024 | Atualizada em: 30 de agosto de 2024</p>

        </div>

        <div class="corpo">
            <p>O Sistema de Bibliotecas da UFC, mais uma vez, disponibiliza a comunidade acadêmica o Empréstimo de
                Férias. </p>
            <br />
            <p>O Empréstimo de Férias consiste na ampliação do prazo de devolução de materiais permitindo que eles sejam
                devolvidos apenas após o início do próximo semestre letivo, no caso, 2024.2. Desse modo, os empréstimos
                de
                materiais bibliográficos, que estejam classificados como “empréstimo normal”, realizados no Sistema de
                Bibliotecas da UFC, no período de 26 de agosto de 2024 a 20 de setembro de 2024, terão a data de
                devolução
                prevista para o dia 31 de outubro de 2024.</p> <br />
            <p> Essa ampliação de prazo é excepcional e visa oferecer maior comodidade para quem deseja permanecer com
                materiais durante as férias acadêmicas. O prazo de devolução dos empréstimos de materiais bibliográficos
                realizados a partir do dia 23 de setembro de 2024 retornará para 30 dias. </p><br />
            <p>O Empréstimo de Férias se aplica a empréstimos e renovações feitos a partir de 26 de agosto de 2024,
                sendo
                de responsabilidade dos(as) usuários(as) renovarem, através do Meu Pergamum ou dirigindo-se a uma de
                nossas
                unidades, os materiais tomados de empréstimo anteriormente para que o novo prazo seja aplicado. Quando a
                renovação não for possível, a biblioteca deve ser procurada para que a situação seja regularizada.</p>
            <br />
            <p> Usuários(as) que possuem validade de cadastro inferior a 23 de setembro de 2024 deverão observar a data
                de
                devolução previamente estabelecida, pois os prazos para devolver os materiais tomados de empréstimo não
                serão alterados.</p><br />
            <p>Salientamos que materiais em atraso e/ou multas superiores a R$ 10,00 impossibilitam a realização de
                novos
                empréstimos, renovações e também a efetivação de matrícula. Sendo assim, antes de sair de férias,
                regularize
                sua situação junto a biblioteca. </p><br />
            <p>Confira mais detalhes sobre o Empréstimo de Férias na Portaria nº 24, DE 26 DE AGOSTO DE 2024. Acesse
                também
                as Normas de Empréstimo e Circulação do Sistema de Bibliotecas da UFC.</p>
            <br /> <br />
            <p>Fonte: Divisão de Acervo e Representação da Informação (Darin), enviado pela pela bibliotecária Érica
                Barros
                (BPGE), via site do SiBi</p>
        </div>
    </div>
    <div class="relacionadas">
        <div class="cabecalho-sessao">
            <h2>
                Notícias relacionadas
            </h2>
            <a class="ver-mais" href="#">
                <div class="button">Ver mais</div>
            </a>

        </div>

        <div class="corpo-destaques">
            <CardRelacionadas
                title="Avaliação Institucional 2024.1: professores e estudantes podem avaliar seus cursos até 26 de setembro"
                body="Foi prorrogado até 26 de setembro o prazo de resposta aos formulários da Avaliação Institucional do período 2024.1 na Universidade Federal do Ceará (UFC). É a oportunidade de estudantes e professores de graduação presencial registrarem, de maneira anônima, suas opiniões sobre a qualidade de suas disciplinas e turmas, bem como a infraestrutura dos cursos no semestre 2024.1."
                date="18 de setembro de 2024" />
            <CardRelacionadas title="Passo a passo para a entrega do Trabalho de Conclusão de Curso (TCC) II em 2024.1"
                body="Aos discentes que estão matriculados em TCC 2, o prazo para entrega da versão final é dia 02 de outubro. O aluno deverá realizar a entrega do trabalho independentemente de colar grau no mesmo semestre de aprovação.
            A Biblioteca do Campus Quixadá (BCQ) fez um informativo com algumas orientações:"
                date="12 de setembro de 2024" />
            <CardRelacionadas
                title="APRIMORE realiza roda de conversa com o tema “Como Lidar com o Estresse” terça-feira, 10"
                body="O projeto de extensão APRIMORE, desenvolvido no Campus da UFC em Quixadá, realiza roda de conversa terça-feira, 10/09/2024, às 12h30, na Sala Multiuso, com o tema “Como Lidar com o Estresse”.

Nessa roda de conversa, teremos a oportunidade de discutir estratégias e práticas para gerenciar o estresse em nossas vidas. Vamos explorar maneiras de cuidar da saúde mental e emocional, bem como compartilhar experiências. Será um espaço acolhedor e enriquecedor para entender melhor o impacto do estresse em nossas vidas, trocar ideias e fortalecer nossa conexão como estudantes.

A participação no encontro vale como horas complementares. Não é necessário realizar inscrições previamente. A comunidade externa também está convidada a participar." date="9 de setembro de 2024" />

        </div>


    </div>

    <Rodape />
</template>

<style scoped>
.main {
    display: flex;
    padding: 64px 300px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 48px;
    align-self: stretch;
}

.corpo {
    flex: 1 0 0;


    color: #000;
    text-align: justify;
    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

}

.cabecalho {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    align-self: stretch;

}

#texto-titulo {
    flex: 1 0 0;

    color: #01579B;
    font-family: Mukta;
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
}

#texto-data {

    flex: 1 0 0;

    color: #000;
    text-align: justify;
    font-family: Lato;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.cabecalho-sessao {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    margin-bottom: 12px;

}

.sessao-corpo {
    padding-left: 240px;
    padding-right: 240px;
    padding-top: 16px;
    padding-bottom: 64px;

    background: #FCFCFC;

}

h2 {
    color: #01579B;
    font-family: Lato;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

}

.button {
    border-radius: 40px;
    background: #01579B;
    display: flex;
    padding: 8px 24px;
    align-items: center;
    gap: 8px;
}



.ver-mais {
    text-decoration: none;
    color: #FFF;

    padding-left: 24px;
    padding-right: 24px;
    padding-top: 8px;
    padding-bottom: 8px;


    font-family: Lato;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

}

.corpo-destaques {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
}

.relacionadas {
    background: #F1F1F4;

    display: flex;
    /* width: var(--screen-width, 1366px); */
    padding: 64px 300px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 48px;
}
</style>