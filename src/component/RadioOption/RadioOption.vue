<template>
    <div
        class="component"
        :class="{
            disabled: disabled,
        }"
        @click="RadioOptionClick">
        <slot>
            <template v-if="activated">
                <div
                    class="prefix activated"
                    :class="{
                        disabled: disabled,
                    }">
                    <i class="ri-radio-button-line"></i>
                </div>
            </template>
            <template v-else>
                <div
                    class="prefix default"
                    :class="{
                        disabled: disabled,
                    }">
                    <i class="ri-checkbox-blank-circle-line"></i>
                </div>
            </template>
            <div
                :class="{
                    disabled: disabled,
                }">{{ label }}</div>
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
        disabled: {
            type: Boolean,
            default: false,
        },
        activated: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        RadioOptionClick() {
            if (this.disabled) {
                return;
            }
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

.disabled {
    /*background-color: #f5f7fa;*/
    color: #c5c8ce;
    cursor: not-allowed;
}
</style>
