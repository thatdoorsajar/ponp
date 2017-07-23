<template>
    <section class="section pt-0">
        <div class="container has-text-centered">
            <div v-show="!eagerBeaver">
                <img src="/img/francis-thumbs-up.jpg"
                    alt="Pope Francis Thumbs Up"
                    v-show="!flippinIt"
                    class="img-h300 py-1">
                <img src="/img/francis-flippin-bird.jpg"
                    alt="Pope Francis Flippin It"
                    v-show="flippinIt"
                    class="img-h300 py-1">
                <h2 class="title is-2 pt-2 show-pointer" @click="showEagerBeaver">COMING SOON!</h2>
            </div>
            <div v-show="eagerBeaver">
                <img src="/img/francis-very-happy.jpg"
                    alt="Pope Francis Very Happy"
                    class="img-h300 py-1">
                <h2 class="title is-2 pt-2">Francis can't wait ;-)</h2>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                flippinIt: false,
                eagerBeaver: false
            }
        },

        mounted() {
            setInterval(() => {
                this.flippinIt = true;

                setTimeout(() => { this.flippinIt = false }, 500);
            }, 10000);
        },

        methods: {
            showEagerBeaver() {
                this.eagerBeaver = true;

                setTimeout(() => { this.eagerBeaver = false }, 3000);
            }
        }
    }
</script>