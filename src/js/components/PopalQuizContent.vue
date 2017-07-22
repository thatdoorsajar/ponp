<template>
    <div class="has-text-centered">
        <div v-show="!eagerBeaver">
            <img src="C:/Code/popeornopope/public/img/francis-thumbs-up.jpg"
                alt="Pope Francis Thumbs Up"
                height="300px"
                v-show="!flippinIt">
            <img src="C:/Code/popeornopope/public/img/francis-flippin-bird.jpg"
                alt="Pope Francis Flippin It"
                height="300px"
                v-show="flippinIt">
            <section class="section">
                <div class="container has-text-centered">
                    <h2 class="title is-2 show-pointer" @click="showEagerBeaver">COMING SOON!</h2>
                </div>
            </section>
        </div>
        <div v-show="eagerBeaver">
            <img src="C:/Code/popeornopope/public/img/francis-very-happy.jpg"
                alt="Pope Francis Thumbs Up"
                height="300px"
                v-show="!flippinIt">
            <section class="section">
                <div class="container has-text-centered">
                    <h2 class="title is-2">Francis can't wait ;-)</h2>
                </div>
            </section>
        </div>
    </div>
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