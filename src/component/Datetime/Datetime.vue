<template>
    <div
        ref="component-datetime"
        class="component-date">
        <Input
            @click="DatetimeClick"
            v-if="type === 'date'"
            v-model="innerValue"
            suffix="ri-calendar-line"></Input>
        <Input
            @click="DatetimeClick"
            v-else-if="type === 'time'"
            v-model="innerValue"
            suffix="ri-time-line"></Input>
        <Input
            @click="DatetimeClick"
            v-else
            v-model="innerValue"
            suffix="ri-calendar-schedule-line"></Input>
        <div
            v-if="show_calendar"
            style="position: absolute; box-sizing: border-box; border: 1px solid #dcdee2; background-color: #ffffff; height: auto; z-index: 1; display: flex;">

            <!--左-->
            <div
                v-if="type === 'datetime' || type === 'date'">

                <!--年/月-->
                <div
                    style="display: flex; align-items: center; width: 252px; box-sizing: border-box; height: 36px; border-bottom: 1px solid #e8eaec;justify-content: space-between;">
                    <div
                        style="height: 100%; width: 72px; display: flex; align-items: center; justify-content: space-between;">

                        <!--年减-->
                        <div
                            @click="ClickYear(-1)"
                            class="component-date-control"
                            style="height: 100%; width: 36px; display: flex; align-items: center; justify-content: center; font-size: 18px;">
                            <i class="ri-arrow-left-double-line"></i>
                        </div>

                        <!--减-->
                        <div
                            @click="ClickMonth(-1)"
                            class="component-date-control"
                            style="height: 100%; width: 36px; display: flex; align-items: center; justify-content: center; font-size: 18px;">
                            <i class="ri-arrow-left-s-line"></i>
                        </div>

                    </div>
                    <div style="display: flex; align-items: center; justify-content: space-between">

                        <!--年-->
                        <div
                            class="component-date-control component-date-control-y"
                            style="height: 100%; padding: 0 4px;">{{ calendar.Y }}年
                        </div>

                        <!--月-->
                        <div
                            class="component-date-control component-date-control-m"
                            style="height: 100%; padding: 0 4px;">{{ calendar.formatted_m }}月
                        </div>

                    </div>
                    <div
                        style="height: 100%; width: 72px; display: flex; align-items: center; justify-content: center; display: flex; align-items: center; justify-content: center;">

                        <!--月加-->
                        <div
                            @click="ClickMonth(+1)"
                            class="component-date-control"
                            style="height: 100%; width: 36px; display: flex; align-items: center; justify-content: center; font-size: 18px;">
                            <i class="ri-arrow-right-s-line"></i>
                        </div>

                        <!--年加-->
                        <div
                            @click="ClickYear(+1)"
                            class="component-date-control"
                            style="height: 100%; width: 36px; display: flex; align-items: center; justify-content: center; font-size: 18px;">
                            <i class="ri-arrow-right-double-line"></i>
                        </div>
                    </div>
                </div>

                <!--周-->
                <div style="display: flex; flex-wrap: wrap; width: 252px; box-sizing: border-box; height: 36px;">
                    <div
                        style="height: 36px; width: 36px; display: flex; align-items: center; justify-content: center; color: #c5c8ce;"
                        v-for="(a,b,c) in week">
                        <div>
                            {{ a.label }}
                        </div>
                    </div>
                </div>

                <!--天-->
                <div style="display: flex; flex-wrap: wrap; width: 252px; box-sizing: border-box;">
                    <div
                        @click="dClick(a)"
                        style="height: 36px; width: 36px; display: flex; align-items: center; justify-content: center;"
                        v-for="(a,b,c) in calendar.list">

                        <div
                            :class="{
                                'component-date-d': true,
                                'component-date-d-current-m': a.m === calendar.m,
                                'component-date-d-current-d': a.m === calendar.m && a.d === calendar.d,
                                }">
                            {{ a.formatted_d }}
                        </div>

                    </div>
                </div>

            </div>

            <!--右-->
            <div
                v-if="type === 'datetime' || type === 'time'"
                :style="{height: `${(calendar.list.length / 7 +2) * 36}px`}">
                <div style="display: flex; height: 100%; border-left: 1px solid #dcdee2;">
                    <div style="height: 100%; overflow-y: scroll;">
                        <div
                            @click="HClick(i-1)"
                            style="display: flex; align-items: center; justify-content: center; height: 36px; width: 50px;"
                            v-for="i in 24" :key="i">
                            <div
                                :class="{
                                'component-date-d': true,
                                'component-date-d-current-m': true,
                                'component-date-d-current-d': i - 1 === calendar.H,
                                }">
                                {{ (i - 1).toString().padStart(2, "0") }}
                            </div>
                        </div>
                    </div>
                    <div style="height: 100%; overflow-y: scroll;">
                        <div
                            @click="iClick(i-1)"
                            style="display: flex; align-items: center; justify-content: center; height: 36px; width: 50px;"
                            v-for="i in 60" :key="i">
                            <div
                                :class="{
                                'component-date-d': true,
                                'component-date-d-current-m': true,
                                'component-date-d-current-d': i - 1 === calendar.i,
                                }">
                                {{ (i - 1).toString().padStart(2, "0") }}
                            </div>
                        </div>
                    </div>
                    <div style="height: 100%; overflow-y: scroll;">
                        <div
                            @click="sClick(i-1)"
                            style="display: flex; align-items: center; justify-content: center; height: 36px; width: 50px;"
                            v-for="i in 60" :key="i">
                            <div
                                :class="{
                                'component-date-d': true,
                                'component-date-d-current-m': true,
                                'component-date-d-current-d': i - 1 === calendar.s,
                                }">
                                {{ (i - 1).toString().padStart(2, "0") }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import Input from "../Input/Input.vue";

export default {
    name: "Datetime",
    components: {Input},
    props: {
        value: {
            type: String,
            default: "",
        },
        type: {
            type: String,
            default: "datetime",
        },
    },
    data() {
        return {
            show_calendar: false,
            week: [
                {
                    w: 1,
                    formatted_w: 1,
                    label: "一",
                },
                {
                    w: 2,
                    formatted_w: 2,
                    label: "二",
                },
                {
                    w: 3,
                    formatted_w: 3,
                    label: "三",
                },
                {
                    w: 4,
                    formatted_w: 4,
                    label: "四",
                },
                {
                    w: 5,
                    formatted_w: 5,
                    label: "五",
                },
                {
                    w: 6,
                    formatted_w: 6,
                    label: "六",
                },
                {
                    w: 0,
                    formatted_w: 7,
                    label: "日",
                },
            ],
            calendar: {
                date: null,
                Y: 0,
                m: 0,
                d: 0,
                w: 0,
                H: 0,
                i: 0,
                s: 0,
                formatted_m: "",
                formatted_d: "",
                formatted_Ymd: "",
                formatted_H: 0,
                formatted_i: 0,
                formatted_s: 0,
                formatted_His: "",
                formatted_YmdHis: "",
                formatted_w: 0,
                list: [],
            },
        };
    },
    methods: {
        buildCalendarByDatetime(datetime) {
            let date;
            datetime = datetime.trim();
            if (datetime !== "") {
                let pList = datetime.trim().replaceAll(" ", "-").replaceAll(":", "-").split("-");
                switch (this.type) {
                    case "date":
                        if (pList.length === 3) {
                            this.calendar.Y = pList[0];
                            this.calendar.m = pList[1] - 1;
                            this.calendar.d = pList[2];
                        }
                        break
                    case "time":
                        if (pList.length === 3) {
                            this.calendar.H = pList[0];
                            this.calendar.i = pList[1];
                            this.calendar.s = pList[2];
                        }
                        break;
                    default:
                        if (pList.length === 6) {
                            this.calendar.Y = pList[0];
                            this.calendar.m = pList[1] - 1;
                            this.calendar.d = pList[2];
                            this.calendar.H = pList[3];
                            this.calendar.i = pList[4];
                            this.calendar.s = pList[5];
                        }
                        break;
                }
                date = new Date(this.calendar.Y, this.calendar.m, this.calendar.d, this.calendar.H, this.calendar.i, this.calendar.s);
            } else {
                date = new Date();
            }
            this.buildCalendarByDate(date);
        },
        buildCalendarByDate(date) {

            this.calendar.date = date;
            this.calendar.Y = this.calendar.date.getFullYear();
            this.calendar.m = this.calendar.date.getMonth();
            this.calendar.d = this.calendar.date.getDate();
            this.calendar.w = this.calendar.date.getDay();
            this.calendar.H = this.calendar.date.getHours();
            this.calendar.i = this.calendar.date.getMinutes();
            this.calendar.s = this.calendar.date.getSeconds();
            this.calendar.formatted_m = (this.calendar.m + 1).toString().padStart(2, "0");
            this.calendar.formatted_d = this.calendar.d.toString().padStart(2, "0");
            this.calendar.formatted_Ymd = `${this.calendar.Y}-${this.calendar.formatted_m}-${this.calendar.formatted_d}`;
            this.calendar.formatted_H = this.calendar.H.toString().padStart(2, "0");
            this.calendar.formatted_i = this.calendar.i.toString().padStart(2, "0");
            this.calendar.formatted_s = this.calendar.s.toString().padStart(2, "0");
            this.calendar.formatted_His = `${this.calendar.formatted_H}:${this.calendar.formatted_i}:${this.calendar.formatted_s}`;
            this.calendar.formatted_YmdHis = `${this.calendar.formatted_Ymd} ${this.calendar.formatted_His}`;
            this.calendar.formatted_w = this.calendar.w === 0 ? 7 : this.calendar.w;

            let date_s = new Date(this.calendar.Y, this.calendar.m, 1);
            const w_s = date_s.getDay() === 0 ? 7 : date_s.getDay();
            date_s = new Date(this.calendar.Y, this.calendar.m, 2 - w_s);
            if (w_s === 1) {
                date_s.setDate(date_s.getDate() - 7);
            }

            let date_e = new Date(this.calendar.Y, this.calendar.m + 1, 0);
            const w_e = date_e.getDay() === 0 ? 7 : date_e.getDay();
            date_e = new Date(this.calendar.Y, this.calendar.m + 1, 7 - w_e);
            if (w_e === 7) {
                date_e.setDate(date_e.getDate() + 7);
            }

            this.calendar.list = [];
            for (let date = new Date(date_s); date <= date_e; date.setDate(date.getDate() + 1)) {
                let one = {};
                one.Y = date.getFullYear();
                one.m = date.getMonth();
                one.d = date.getDate();
                one.w = date.getDay();
                one.formatted_m = (one.m + 1).toString().padStart(2, "0");
                one.formatted_d = one.d.toString().padStart(2, "0");
                one.formatted_Ymd = `${one.Y}-${one.formatted_m}-${one.formatted_d}`;
                one.formatted_w = one.w === 0 ? 7 : one.w;
                this.calendar.list.push(one);
            }

        },
        dClick(d) {
            switch (this.type) {
                case "date":
                    this.$emit("input", `${d.formatted_Ymd}`);
                    break
                case "time":
                    this.$emit("input", `${this.calendar.formatted_His}`);
                    break;
                default:
                    this.$emit("input", `${d.formatted_Ymd} ${this.calendar.formatted_His}`);
                    break;
            }
        },
        HClick(d) {
            this.calendar.formatted_His = `${d.toString().padStart(2, "0")}:${this.calendar.formatted_i}:${this.calendar.formatted_s}`
            switch (this.type) {
                case "date":
                    this.$emit("input", `${this.calendar.formatted_Ymd}`);
                    break
                case "time":
                    this.$emit("input", `${this.calendar.formatted_His}`);
                    break;
                default:
                    this.$emit("input", `${this.calendar.formatted_Ymd} ${this.calendar.formatted_His}`);
                    break;
            }
        },
        iClick(d) {
            this.calendar.formatted_His = `${this.calendar.formatted_H}:${d.toString().padStart(2, "0")}:${this.calendar.formatted_s}`
            switch (this.type) {
                case "date":
                    this.$emit("input", `${this.calendar.formatted_Ymd}`);
                    break
                case "time":
                    this.$emit("input", `${this.calendar.formatted_His}`);
                    break;
                default:
                    this.$emit("input", `${this.calendar.formatted_Ymd} ${this.calendar.formatted_His}`);
                    break;
            }
        },
        sClick(d) {
            this.calendar.formatted_His = `${this.calendar.formatted_H}:${this.calendar.formatted_i}:${d.toString().padStart(2, "0")}`
            switch (this.type) {
                case "date":
                    this.$emit("input", `${this.calendar.formatted_Ymd}`);
                    break
                case "time":
                    this.$emit("input", `${this.calendar.formatted_His}`);
                    break;
                default:
                    this.$emit("input", `${this.calendar.formatted_Ymd} ${this.calendar.formatted_His}`);
                    break;
            }
        },
        ClickYear(diff) {
            const date = new Date(this.calendar.date);
            date.setFullYear(date.getFullYear() + diff);
            date.setDate(1);
            this.calendar.formatted_Ymd = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`
            this.calendar.formatted_His = `${this.calendar.date.getHours().toString().padStart(2, "0")}:${this.calendar.date.getMinutes().toString().padStart(2, "0")}:${this.calendar.date.getSeconds().toString().padStart(2, "0")}`;
            switch (this.type) {
                case "date":
                    this.$emit("input", `${this.calendar.formatted_Ymd}`);
                    break
                case "time":
                    this.$emit("input", `${this.calendar.formatted_His}`);
                    break;
                default:
                    this.$emit("input", `${this.calendar.formatted_Ymd} ${this.calendar.formatted_His}`);
                    break;
            }
        },
        ClickMonth(diff) {
            const date = new Date(this.calendar.date);
            date.setMonth(date.getMonth() + diff);
            date.setDate(1);
            this.calendar.formatted_Ymd = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`
            this.calendar.formatted_His = `${this.calendar.date.getHours().toString().padStart(2, "0")}:${this.calendar.date.getMinutes().toString().padStart(2, "0")}:${this.calendar.date.getSeconds().toString().padStart(2, "0")}`;
            switch (this.type) {
                case "date":
                    this.$emit("input", `${this.calendar.formatted_Ymd}`);
                    break
                case "time":
                    this.$emit("input", `${this.calendar.formatted_His}`);
                    break;
                default:
                    this.$emit("input", `${this.calendar.formatted_Ymd} ${this.calendar.formatted_His}`);
                    break;
            }
        },
        DatetimeClick(){
            this.show_calendar = true;
        },
        DocumentEventMousedown(event) {
            const component = this.$refs["component-datetime"];
            if (component && !component.contains(event.target)) {
                this.show_calendar = false;
            }
        },
    },
    mounted() {
        document.addEventListener("mousedown", this.DocumentEventMousedown);
    },
    beforeDestroy() {
        document.removeEventListener("mousedown", this.DocumentEventMousedown);
    },
    watch: {
        value: {
            handler(n, o) {
                this.buildCalendarByDatetime(n);
            },
            immediate: true,
        }
    },
    computed: {
        innerValue: {
            get() {
                return this.value;
            },
            set(v) {
                this.$emit("input", v);
            }
        },
    },
}
</script>

<style scoped>
.component-date {
    cursor: default;
    position: relative;
    border-radius: 2px;
    line-height: 36px;
    box-sizing: border-box;
    font-size: 14px;
    display: inline-block;
    color: #515a6e;
    user-select: none;
    width: 300px;
}
.component-date-d {
    border-radius: 4px;
    height: 24px;
    width: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    color: #c5c8ce;
}
.component-date-d-current-m {
    color: #515a6e;
}
.component-date-d-current-d {
    color: #ffffff;
    background-color: #2d8cf0;
}
.component-date-d:not(.component-date-d-current-d):hover {
    background-color: #e1f0fe;
}
.component-date-control {
    color: #c5c8ce;
}
.component-date-control:hover {
    color: #2d8cf0;
}
.component-date-control-y, .component-date-control-m {
    color: #515a6e;
}
</style>
