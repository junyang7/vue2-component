<template>
    <div class="component">

        <div
            @click="SelectClick"
            class="select">
            <div class="option-activated">
                <div v-if="computed_option.prefix" class="option-prefix">
                    <i :class="computed_option.prefix"></i>
                </div>
                <div class="option-label">{{ computed_option.label }}</div>
                <div v-if="computed_option.suffix" class="option-suffix">
                    <i :class="computed_option.suffix"></i>
                </div>
            </div>
            <div style="width: 36px; height: 36px; display: flex; align-items: center; justify-content: center;">
                <i class="ri-arrow-down-s-line"></i>
            </div>
        </div>

        <div
            class="option-list"
            v-if="show_option_list">
            <div
                v-for="(a,b,c) in option_list"
                :key="a.value"
                @click="OptionClick(a)"
                :class="`option ${value === a.value ? 'activated' : ''}`">
                <div v-if="a.hasOwnProperty('prefix') && a.prefix" class="option-prefix">
                    <i :class="a.prefix"></i>
                </div>
                <div class="option-label">{{ a.label }}</div>
                <div v-if="a.hasOwnProperty('suffix') && a.suffix" class="option-suffix">
                    <i :class="a.suffix"></i>
                </div>
                <div></div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "Select",
    props: {
        value: {
            type: [String, Number,],
            default: "",
        },
        placeholder: {
            type: String,
            default: "",
        },
        option_list: {
            type: Array,
            default() {
                return [
                    {
                        label: "全部",
                        value: 0,
                    },
                ];
            },
        },
    },
    data() {
        return {
            show_option_list: false,
        };
    },
    methods: {
        SelectClick() {
            this.show_option_list = true;
        },
        OptionClick(option) {
            this.$emit("input", option.value);
            this.show_option_list = false;
        },
    },
    computed: {
        computed_option: {
            get() {
                if (Array.isArray(this.option_list)) {
                    for (let i = 0; i < this.option_list.length; i++) {
                        const option = this.option_list[i];
                        if (option.value === this.value) {
                            return option;
                        }
                    }
                }
                return this.option_list[0];
            },
        }
    },
}
</script>

<style scoped>
.component {
    font-size: 14px;
    display: inline-block;
    border: 1px solid #dcdee2;
    color: #515a6e;
    border-radius: 2px;
    cursor: default;
    background-color: #ffffff;
    position: relative;
}

.select {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 36px;
}

.option-list {
    position: absolute;
    width: 100%;
    z-index: 1;
    left: -1px;
    background-color: #ffffff;
    border-left: 1px solid #dcdee2;
    border-right: 1px solid #dcdee2;
    border-bottom: 1px solid #dcdee2;
}

.option-activated, .option {
    display: flex;
    height: 36px;
}

.option:hover, .activated {
    background-color: rgba(255, 255, 0, 0.2);
}

.option-prefix, .option-suffix {
    width: 30px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.option-label {
    height: 36px;
    display: flex;
    align-items: center;
    padding: 0 8px;
}
</style>
