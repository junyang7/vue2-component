<template>
    <div>

        <div style="margin-bottom: 36px;">
            <div>size</div>
            <div style="display: flex; align-items: center; justify-content: flex-start; column-gap: 9px;">

                <FormInput
                    :setting="data1.setting"
                    :label="data1.label"
                    v-model="data1.value"></FormInput>

            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "TestFormInput",
    data() {
        return {
            data1: {
                label: "文案",
                value: "",
                setting: {
                    input: {
                        style: {
                            width: '500px',
                        },
                    },
                },
            },
        };
    },
    methods: {
        cancel() {
            console.log("====cancel")
            console.log(JSON.stringify(this.data1.search, null, 2))
        },
        confirm() {
            console.log("====confirm")
            console.log(JSON.stringify(this.data1.search, null, 2))
        },
    },
}
</script>

<style scoped>

</style>
