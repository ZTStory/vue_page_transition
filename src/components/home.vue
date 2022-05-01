<template>
    <div class="page_container">
        <div class="nav_bar">HomePage</div>
        <img class="mgt_50" src="../assets/logo.png" alt="" />
        <div class="bb_btn mgt_50" @click="toNextPage">To NextPage</div>
        <div class="bb_btn mgt_50" @click="changeAnimation">Change Animation：{{ animationMode }}</div>
        <div class="tab_bar half1px">
            <div class="tab_item active">Home</div>
            <div class="tab_item" @click="toMinePage">Mine</div>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { GlobalData } from "../global.data";

const router = useRouter();

const animationMode = computed(() => {
    return GlobalData.animationMode.value;
});

const toNextPage = () => {
    router.push({
        name: "Next",
    });
};
const toMinePage = () => {
    router.replace({
        name: "Mine",
    });
};
const changeAnimation = () => {
    GlobalData.animationMode.value = GlobalData.animationMode.value === "slide" ? "animation" : "slide";
};
</script>

<style scoped></style>
