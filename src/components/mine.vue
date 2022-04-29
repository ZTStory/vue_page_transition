<template>
    <div class="page_container">
        <div class="nav_bar">MinePage</div>
        <img class="mgt_50" src="../assets/logo.png" alt="" />
        <div class="tab_bar">
            <div class="tab_item" @click="toHomePage">Home</div>
            <div class="tab_item active">Mine</div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const toHomePage = () => {
    router.replace({
        name: "Home",
    });
};
</script>

<style lang="scss" scoped></style>
