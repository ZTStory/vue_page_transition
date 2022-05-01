<template>
    <div class="page_container">
        <div class="nav_bar half1px">NextPage</div>
        <div class="bb_btn mgt_50" @click="goBack">Go Back</div>
    </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const goBack = () => {
    router.back();
};
</script>

<style scoped>
.bb_header {
    padding-top: constant(safe-area-inset-top);
    padding-top: constant(safe-area-inset-top);
    position: relative;
}
</style>
