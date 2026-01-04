<template>
    <div
        class="component"
        @click="CheckboxOptionClick">
        <slot>
            <template v-if="activated">
                <div
                    class="prefix activated">
                    <i class="ri-checkbox-fill"></i>
                </div>
            </template>
            <template v-else>
                <div
                    class="prefix default">
                    <i class="ri-checkbox-blank-line"></i>
                </div>
            </template>
            <div>{{ label }}</div>
        </slot>
    </div>
</template>

<script>
import jc from "js-common";

export default {
    name: "CheckboxOption",
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
        CheckboxOptionClick() {
            jc._VueEvent.produce("checkbox-option-click", this.value);
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
