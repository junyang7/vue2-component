<template>
    <div
        class="component"
        @click="RadioOptionClick">
        <slot>
            <template v-if="activated">
                <div
                    class="prefix activated">
                    <i class="ri-radio-button-line"></i>
                </div>
            </template>
            <template v-else>
                <div
                    class="prefix default">
                    <i class="ri-checkbox-blank-circle-line"></i>
                </div>
            </template>
            <div>{{ label }}</div>
        </slot>
    </div>
</template>

<script>
export default {
    name: "RadioOption",
    inject: ["context"],
    props: {
        label: {
            type: String,
            default: "",
        },
        value: {
            type: null,
            default: null,
        },
        activated: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        RadioOptionClick() {
            if (this.context) {
                this.context.RadioOptionClick(this.value);
            }
        },
    },
}
</script>

<style scoped>
.component {
    display: flex;
    align-items: center;
    height: 36px;
    margin-right: 36px;
}

.prefix {
    margin-right: 4px;
}

.default {
    color: #808695;
}

.activated {
    color: #2b85e4;
}
</style>
