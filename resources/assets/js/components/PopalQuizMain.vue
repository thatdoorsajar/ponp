<template>
    <div>
        <popal-heading></popal-heading>

        <popal-quiz-content></popal-quiz-content>

        <popal-footer></popal-footer>
    </div>
</template>

<script>
    import PopalHeading from './PopalHeading.vue';
    import PopalQuizContent from './PopalQuizContent.vue';
    import PopalFooter from './PopalFooter.vue';

    export default {
        components: {
            PopalHeading,
            PopalQuizContent,
            PopalFooter
        }
    }
</script>