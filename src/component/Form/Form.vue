<template>
    <div>

        <div
            style="display: flex; flex-wrap: wrap; column-gap: 36px; row-gap: 18px;">
            <template v-for="(a,b,c) in search">

                <FormInput
                    v-if="a.type === 'input'"
                    :disabled="a.disabled"
                    :placeholder="a.placeholder"
                    :label="a.label"
                    v-model="a.value"></FormInput>

                <FormSelect
                    v-if="a.type === 'select'"
                    :disabled="a.disabled"
                    :placeholder="a.placeholder"
                    :option_list="a.option_list"
                    :label="a.label"
                    v-model="a.value"></FormSelect>

                <FormDatetime
                    v-if="a.type === 'datetime'"
                    :disabled="a.disabled"
                    :label="a.label"
                    :placeholder="a.placeholder"
                    v-model="a.value"></FormDatetime>

                <FormDatetimeSE
                    v-if="a.type === 'datetime_se'"
                    :disabled="a.disabled"
                    :label="a.label"
                    :placeholder="a.placeholder"
                    v-model="a.value"></FormDatetimeSE>

            </template>
        </div>
        <div style="height: 18px;"></div>

        <div
            style="display: flex; flex-wrap: wrap; column-gap: 18px; row-gap: 18px; justify-content: flex-start">
            <Button
                @click="reset"
                type="default">
                重置
            </Button>
            <Button
                @click="confirm"
                type="primary">
                搜索
            </Button>
        </div>
        <div style="height: 18px;"></div>


    </div>
</template>

<script>
import FormInput from "../FormInput/FormInput.vue";
import FormSelect from "../FormSelect/FormSelect.vue";
import FormDatetime from "../FormDatetime/FormDatetime.vue";
import FormDatetimeSE from "../FormDatetimeSE/FormDatetimeSE.vue";

export default {
    name: "Form",
    components: {FormDatetimeSE, FormDatetime, FormSelect, FormInput},
    props: {
        search: {
            type: Object,
            default() {
                return {};
            },
        },
    },
    data() {
        return {
            inner_search: {},
        };
    },
    methods: {
        init() {
            this.inner_search = this.search;
        },
        reset() {
            this.$emit("reset");
        },
        confirm() {
            this.$emit("confirm");
        },
    },
    watch: {
        inner_search: {
            handler(n, o) {
                this.$emit("input", n);
            },
            immediate: true,
        }
    },
}
</script>

<style scoped>

</style>
