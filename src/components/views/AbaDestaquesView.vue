<script lang="ts">
import Cabecalho from '../Cabecalho.vue';
import CardNoticia from '../CardNoticia.vue';
import Rodape from '../Rodape.vue';

export default {
    components: { Cabecalho, CardNoticia, Rodape }
}
</script>

<template>
<Cabecalho />
    <div class="sessao-corpo">
        <div class="cabecalho-sessao">
            <h2>
                Destaques
            </h2>
            

        </div>

        <div class="cards-noticias">
            <CardNoticia
                title="Avaliação Institucional 2024.1: professores e estudantes podem avaliar seus cursos até 26 de setembro"
                body="Foi prorrogado até 26 de setembro o prazo de resposta aos formulários da Avaliação Institucional do período 2024.1 na Universidade Federal do Ceará (UFC). É a oportunidade de estudantes e professores de graduação presencial registrarem, de maneira anônima, suas opiniões sobre a qualidade de suas disciplinas e turmas, bem como a infraestrutura dos cursos no semestre 2024.1."
                date="18 de setembro de 2024" />
            <CardNoticia title="Passo a passo para a entrega do Trabalho de Conclusão de Curso (TCC) II em 2024.1" body="Aos discentes que estão matriculados em TCC 2, o prazo para entrega da versão final é dia 02 de outubro. O aluno deverá realizar a entrega do trabalho independentemente de colar grau no mesmo semestre de aprovação.
            A Biblioteca do Campus Quixadá (BCQ) fez um informativo com algumas orientações:"
                date="12 de setembro de 2024" />
            <CardNoticia
                title="APRIMORE realiza roda de conversa com o tema “Como Lidar com o Estresse” terça-feira, 10"
                body="O projeto de extensão APRIMORE, desenvolvido no Campus da UFC em Quixadá, realiza roda de conversa terça-feira, 10/09/2024, às 12h30, na Sala Multiuso, com o tema “Como Lidar com o Estresse”.

Nessa roda de conversa, teremos a oportunidade de discutir estratégias e práticas para gerenciar o estresse em nossas vidas. Vamos explorar maneiras de cuidar da saúde mental e emocional, bem como compartilhar experiências. Será um espaço acolhedor e enriquecedor para entender melhor o impacto do estresse em nossas vidas, trocar ideias e fortalecer nossa conexão como estudantes.

A participação no encontro vale como horas complementares. Não é necessário realizar inscrições previamente. A comunidade externa também está convidada a participar." date="9 de setembro de 2024" />
            <CardNoticia
                title="Discentes de Quixadá são aprovados para a etapa estadual da Olimpíada Brasileira de Informática – OBI 2024"
                body="Os alunos Pedro Erykles Silva Tavares, Jose Nilson Bernardo Nunes Filho e Weryck Lemos Silva se classificaram para a Fase Estadual da Olimpíada Brasileira de Informática (OBI) – Nível Sênior, na modalidade de programação. A prova da Fase Local da OBI foi realizada no dia 14 de junho de 2024. A OBI é uma competição científica organizada pela Sociedade Brasileira de Computação (SBC) com o objetivo de promover a criatividade, habilidade de resolução de problemas e a habilidade de programação. 

Na Modalidade Programação, os competidores são desafiados com problemas que devem ser resolvidos com o uso do computador. A OBI é separada em vários níveis. O nível sênior é voltado para os estudantes que estão cursando, pela primeira vez, o primeiro ano de um curso de graduação."
                date="6 de setembro de 2024" />

        </div>

    </div>
<Rodape />

</template>

<style scoped>

.cabecalho-sessao {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    margin-bottom: 48px;

}

.sessao-corpo {
    padding-left: 240px;
    padding-right: 240px;
    padding-top: 64px;
    padding-bottom: 64px;

    background: #FCFCFC;

}

.cards-noticias {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
}

h2 {
    text-decoration: none;
    color: #01579B;
    font-family: Mukta;
    font-size: 32px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;

}


</style>