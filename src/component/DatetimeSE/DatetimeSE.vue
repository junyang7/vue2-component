<template>
    <div style="display: flex; align-items: center;">
        <div
            style="height: 36px; width: 200px; display: flex; align-items: center; justify-content: center; font-size: 14px;">
            <Datetime
                v-model="s"
                :placeholder="placeholder.s"
                :type="type"></Datetime>
        </div>
        <div
            style="height: 36px; width: 10px; display: flex; align-items: center; justify-content: center; font-size: 14px;">
            -
        </div>
        <div
            style="height: 36px; width: 200px; display: flex; align-items: center; justify-content: center; font-size: 14px;">
            <Datetime
                v-model="e"
                :placeholder="placeholder.e"
                :type="type"></Datetime>
        </div>
    </div>
</template>

<script>
import Datetime from "../Datetime/Datetime.vue";

export default {
    name: "DatetimeSE",
    components: {Datetime},
    props: {
        value: {
            type: Object,
            default: () => ({
                s: "",
                e: "",
            })
        },
        placeholder: {
            type: Object,
            default: () => ({
                s: "",
                e: "",
            })
        },
        type: {
            type: String,
            default: "datetime",
        },
    },
    computed: {
        s: {
            get() {
                return this.value.s;
            },
            set(v) {
                this.$emit("input", {
                    ...this.value,
                    s: v,
                });
            }
        },
        e: {
            get() {
                return this.value.e;
            },
            set(v) {
                this.$emit("input", {
                    ...this.value,
                    e: v,
                });
            }
        },
    },
}
</script>

<style scoped>
</style>

