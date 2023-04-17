<template>
    <router-view v-slot="{ Component, route }">
        <transition :name="route.meta.transitionName" :mode="transitionMode">
            <component :is="Component" />
        </transition>
    </router-view>
</template>

<script setup>
import { nextTick, ref, watch } from "vue";
import { useCustomRouter, useRouterAnimate } from "./router/custRouter";
import { GlobalData } from "./global.data";
const router = useCustomRouter();
const needAnimate = useRouterAnimate();
const transitionMode = ref("out-in");

router.beforeEach((to, from) => {
    // 这里通过router中设置的页面深度depth来判断动画的方向，这样不会收到刷新和浏览器前进后退的影响而导致动画执行错误
    const toDepth = to.meta.depth;
    const fromDepth = from.meta.depth;
    if ((toDepth === 0 && fromDepth == void 0) || toDepth === fromDepth) {
        return true;
    }
    if (!from.name) {
        return true;
    }

    if (!needAnimate.value) {
        // 处理 Safari 等浏览器自带手势切换页面时，不执行过渡动画
        return true;
    }

    if (GlobalData.animationMode.value === "slide") {
        transitionMode.value = "";
        to.meta.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    } else {
        transitionMode.value = "out-in";
        to.meta.transitionName = "animation";
    }

    return true;
});

router.afterEach((to, from) => {
    // to and from are both route objects.
    needAnimate.value = false;
});
</script>

<style>
@import "./assets/page.css";

.page_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    position: relative;
    overflow-y: scroll;
    background-color: #fff;
}

.animation-leave-from {
    opacity: 1;
    transform: translateY(0);
}
.animation-leave-active {
    will-change: transform;
    transition: all 0.3s ease;
}
.animation-leave-to {
    opacity: 0;
    transform: translateY(20px);
}
.animation-enter-from {
    opacity: 0;
    transform: translateY(20px);
}
.animation-enter-active {
    will-change: transform;
    transition: all 0.3s ease;
}
.animation-enter-to {
    opacity: 1;
    transform: translateY(0);
}

.slide-right-enter-active,
.slide-left-enter-active,
.slide-right-leave-active,
.slide-left-leave-active {
    box-shadow: -20px 0 20px 0px rgba(0, 0, 0, 0.1);
    will-change: transform;
    transition: all 0.3s ease-out;
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
