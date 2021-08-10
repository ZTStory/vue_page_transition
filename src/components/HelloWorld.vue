<template>
    <div class="page_container">
        <h1>{{ msg }}</h1>

        <p>
            <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Documentation </a>
            |
            <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
        </p>

        <button type="button" @click="state.count++">count is: {{ state.count }}</button>
        <p>
            Edit
            <code>components/HelloWorld.vue</code> to test hot module replacement.
        </p>
        <button type="button" @click="toNextPage">下一页</button>
    </div>
</template>

<script setup>
import { defineProps, reactive } from "vue";
import { useRouter } from "vue-router";
defineProps({
    msg: String,
});

const router = useRouter();

const state = reactive({ count: 0 });
const toNextPage = () => {
    router.push({
        name: "NextPage",
        params: {
            mode: "push",
        },
    });
};
</script>

<style scoped>
a {
    color: #42b983;
}
</style>
