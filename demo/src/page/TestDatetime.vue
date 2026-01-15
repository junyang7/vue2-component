<template>
    <div>


        <div style="margin-bottom: 36px;">
            <Datetime
                v-model="data1.value"
                type="datetime"></Datetime>
            <div>
                <Button @click="getData1Value" type="primary">获取</Button>
            </div>
        </div>

        <div style="margin-bottom: 36px;">
            <Datetime
                v-model="data2.value"
                type="date"></Datetime>
            <div>
                <Button @click="getData2Value" type="primary">获取</Button>
            </div>
        </div>

        <div style="margin-bottom: 36px;">
            <Datetime
                v-model="data3.value"
                type="time"></Datetime>
            <div>
                <Button @click="getData3Value" type="primary">获取</Button>
            </div>
        </div>


    </div>
</template>

<script>
export default {
    name: "TestDate",
    data() {
        return {
            data1: {
                value: ""
            },
            data2: {
                value: ""
            },
            data3: {
                value: ""
            },
        };
    },
    methods: {
        getData1Value(){
            console.log(this.data1.value)
        },
        getData2Value(){
            console.log(this.data2.value)
        },
        getData3Value(){
            console.log(this.data3.value)
        },
    },
}
</script>

<style scoped>

</style>
