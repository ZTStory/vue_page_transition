<template>
    <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transitionName">
            <component :is="Component" />
        </transition>
    </router-view>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
router.beforeEach((to, from) => {
    const toDepth = to.params.mode;
    if (toDepth === "push") {
        to.meta.transitionName = "slide-left";
    } else if (toDepth === "pop") {
        to.meta.transitionName = "slide-right";
    }
    console.log(to.meta.transitionName);
    return true;
});
</script>

<style>
.page_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    position: relative;
    overflow-y: scroll;
    background-color: #fff;
}
.slide-right-enter-active,
.slide-left-enter-active,
.slide-right-leave-active,
.slide-left-leave-active {
    box-shadow: -20px 0 20px 0px rgba(0, 0, 0, 0.1);
    will-change: transform;
    transition: all 0.5s ease-out;
    position: absolute;
}

.slide-right-enter-from {
    opacity: 0;
    transform: translateX(-50%);
}
.slide-right-leave-to {
    z-index: 100;
    transform: translateX(102%);
}

.slide-right-leave-from {
    box-shadow: -20px 0 20px 0px rgba(0, 0, 0, 0.1);
}
.slide-left-enter-from {
    z-index: 100;
    transform: translateX(100%);
    box-shadow: -20px 0 20px 0px rgba(0, 0, 0, 0.1);
}
.slide-left-leave-to {
    opacity: 0.4;
    transform: translateX(-50%);
}

</style>
