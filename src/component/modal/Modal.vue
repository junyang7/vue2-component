<template>
    <div v-if="visible" class="jc-modal-mask">
        <div class="jc-modal">
            <h3>{{ title }}</h3>
            <div>{{ content }}</div>
            <button @click="cancel">取消</button>
            <button @click="ok">确定</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    data () {
        return {
            visible: false,
            title: '',
            content: '',
            resolve: null,
            reject: null
        };
    },
    methods: {
        open (opts) {
            this.title = opts.title;
            this.content = opts.content;
            this.visible = true;

            return new Promise((resolve, reject) => {
                this.resolve = resolve;
                this.reject = reject;
            });
        },
        ok () {
            this.visible = false;
            this.resolve && this.resolve();
        },
        cancel () {
            this.visible = false;
            this.reject && this.reject();
        }
    }
};
</script>
