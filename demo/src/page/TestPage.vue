<template>
    <div>

        <div style="margin-bottom: 36px;">
            <div>size</div>
            <div style="width: 300px;">
                <Page
                    @click="click"
                    :total="data1.total"
                    :size="data1.size"
                    :page="data1.page"></Page>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "TestPage",
    data() {
        return {
            data1: {
                page: 1,
                size: 200,
                total: 100000,
            },
        };
    },
    methods: {
        click(page) {
            console.log(page)
            this.data1.page = page;

            const query = this.$route.query;
            this.$router.push({
                query: {
                    ...query,
                    page: this.data1.page,
                    size: this.data1.size,
                },
            });
        },
        flushUrl()
        {

        },
    },
    created() {
        const query = this.$route.query;
        const page = Number(query.page) || this.data1.page;
        const size = Number(query.size) || this.data1.size;
        this.data1.page = page;
        this.data1.size = size;
        this.$router.push({
            query: {
                ...query,
                page: page,
                size: size
            }
        }).catch(() => {});
    },
}
</script>

<style scoped>

</style>
