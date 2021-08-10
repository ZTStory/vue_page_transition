<template>
    <div class="page_container">
        <div class="bb_header" style="height: 44px; width: 100%; text-align:center">导航栏</div>
        Second Page
        <button type="button" @click="goBack">返回</button>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const goBack = () => {
    router.push({
        name: "HelloWorld",
        params: {
            mode: "pop",
        },
    });
};
</script>

<style scoped>
.page {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: yellow;
}
.bb_header {
    padding-top: constant(safe-area-inset-top);
    padding-top: constant(safe-area-inset-top);
    position: relative;
}
</style>
