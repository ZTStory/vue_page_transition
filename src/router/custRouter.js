import { ref } from "vue";
import { useRouter } from "vue-router";

let proxyRouter = null;
let needAnimate = ref(false);

export function useRouterAnimate() {
    return needAnimate;
}
export function useCustomRouter() {
    if (proxyRouter) {
        return proxyRouter;
    }
    const router = useRouter();
    proxyRouter = new Proxy(router, {
        get(target, props, receiver) {
            console.log("proxy get", target, props, receiver);
            if (["push", "back"].includes(props)) {
                needAnimate.value = true;
            } else {
                needAnimate.value = false;
            }
            return Reflect.get(target, props, receiver);
        },
    });
    return proxyRouter;
}
