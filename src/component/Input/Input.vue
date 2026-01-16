<template>
    <div
        @click="ComponentClick"
        :class="`component ${activated ? 'activated' : ''}`">

        <!--前缀-->
        <div v-if="prefix" class="prefix">
            <i :class="prefix"></i>
        </div>

        <!--输入框-->
        <input
            @focus="InputFocus"
            @blur="InputBlur"
            ref="input"
            v-model="computed_value"
            :placeholder="placeholder"/>

        <!--后缀-->
        <div v-if="suffix" class="suffix">
            <i :class="suffix"></i>
        </div>

    </div>
</template>

<script>
export default {
    name: "Input",
    props: {
        value: {
            type: [String, Number,],
            default: "",
        },
        placeholder: {
            type: String,
            default: "",
        },
        prefix: {
            type: String,
            default: "",
        },
        suffix: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            activated: false,
        };
    },
    methods: {
        ComponentClick(event) {
            this.$emit("click", event);
        },
        InputFocus() {
            this.activated = true;
        },
        InputBlur() {
            this.activated = false;
        },
        focus() {
            this.InputFocus();
        },
    },
    computed: {
        computed_value: {
            get() {
                return this.value;
            },
            set(v) {
                this.$emit("input", v);
            }
        }
    },
}
</script>

<style scoped>
.component {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    color: #515a6e;
    border: 1px solid #dcdee2;
    border-radius: 2px;
    box-sizing: border-box;
}

input {
    display: inline-block;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    appearance: none;
    box-sizing: border-box;
    margin: 0;
    outline-style: none;
    color: #515a6e;
    border: none;
    padding: 4px;
    font-size: 14px;
}

.activated {
    border-color: #57a3f3;
    box-shadow: 0 0 4px 2px rgba(45, 140, 240, 0.5);
}

.prefix {
    box-sizing: border-box;
    width: 36px;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #808695;
    font-size: 16px;
}

.suffix {
    box-sizing: border-box;
    width: 36px;
    height: 100%;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #808695;
    font-size: 16px;
}

</style>
