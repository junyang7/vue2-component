<template>
    <div>

        <div style="margin-bottom: 36px;">
            <div>什么都没有配置</div>
            <div style="display: flex; align-items: center; justify-content: flex-start; column-gap: 9px;">
                <Tag>默认</Tag>
            </div>
        </div>

        <div style="margin-bottom: 36px;">
            <div>size</div>
            <div style="display: flex; align-items: center; justify-content: flex-start; column-gap: 9px;">
                <Tag size="small">small</Tag>
                <Tag size="default">default</Tag>
                <Tag size="large">large</Tag>
            </div>
        </div>

        <div style="margin-bottom: 36px;">
            <div>type</div>
            <div style="display: flex; align-items: center; justify-content: flex-start; column-gap: 9px;">
                <Tag type="border">border</Tag>
                <Tag type="backgroundColor">backgroundColor</Tag>
                <Tag type="borderAndBackgroundColor">borderAndBackgroundColor</Tag>
            </div>
        </div>

        <div style="margin-bottom: 36px;">
            <div>color</div>
            <div style="display: flex; align-items: center; justify-content: flex-start; column-gap: 9px;">
                <Tag color="default">default</Tag>
                <Tag color="primary">primary</Tag>
                <Tag color="success">success</Tag>
                <Tag color="error">error</Tag>
                <Tag color="warning">warning</Tag>
                <Tag color="magenta">magenta</Tag>
                <Tag color="red">red</Tag>
                <Tag color="volcano">volcano</Tag>
                <Tag color="orange">orange</Tag>
                <Tag color="gold">gold</Tag>
                <Tag color="yellow">yellow</Tag>
                <Tag color="lime">lime</Tag>
                <Tag color="green">green</Tag>
                <Tag color="cyan">cyan</Tag>
                <Tag color="blue">blue</Tag>
                <Tag color="geekblue">geekblue</Tag>
                <Tag color="purple">purple</Tag>
                <Tag color="#ff0000">#ff0000</Tag>
                <Tag color="#00ff00">#00ff00</Tag>
                <Tag color="#0000ff">#0000ff</Tag>
            </div>
        </div>

        <div style="margin-bottom: 36px;">
            <div>color+size=small</div>
            <div style="display: flex; align-items: center; justify-content: flex-start; column-gap: 9px;">
                <Tag size="small" color="default">default</Tag>
                <Tag size="small" color="primary">primary</Tag>
                <Tag size="small" color="success">success</Tag>
                <Tag size="small" color="error">error</Tag>
                <Tag size="small" color="warning">warning</Tag>
                <Tag size="small" color="magenta">magenta</Tag>
                <Tag size="small" color="red">red</Tag>
                <Tag size="small" color="volcano">volcano</Tag>
                <Tag size="small" color="orange">orange</Tag>
                <Tag size="small" color="gold">gold</Tag>
                <Tag size="small" color="yellow">yellow</Tag>
                <Tag size="small" color="lime">lime</Tag>
                <Tag size="small" color="green">green</Tag>
                <Tag size="small" color="cyan">cyan</Tag>
                <Tag size="small" color="blue">blue</Tag>
                <Tag size="small" color="geekblue">geekblue</Tag>
                <Tag size="small" color="purple">purple</Tag>
            </div>
        </div>

        <div style="margin-bottom: 36px;">
            <div>color+size=small+type=border</div>
            <div style="display: flex; align-items: center; justify-content: flex-start; column-gap: 9px;">
                <Tag type="border" size="small" color="default">default</Tag>
                <Tag type="border" size="small" color="primary">primary</Tag>
                <Tag type="border" size="small" color="success">success</Tag>
                <Tag type="border" size="small" color="error">error</Tag>
                <Tag type="border" size="small" color="warning">warning</Tag>
                <Tag type="border" size="small" color="magenta">magenta</Tag>
                <Tag type="border" size="small" color="red">red</Tag>
                <Tag type="border" size="small" color="volcano">volcano</Tag>
                <Tag type="border" size="small" color="orange">orange</Tag>
                <Tag type="border" size="small" color="gold">gold</Tag>
                <Tag type="border" size="small" color="yellow">yellow</Tag>
                <Tag type="border" size="small" color="lime">lime</Tag>
                <Tag type="border" size="small" color="green">green</Tag>
                <Tag type="border" size="small" color="cyan">cyan</Tag>
                <Tag type="border" size="small" color="blue">blue</Tag>
                <Tag type="border" size="small" color="geekblue">geekblue</Tag>
                <Tag type="border" size="small" color="purple">purple</Tag>
            </div>
        </div>

        <div style="margin-bottom: 36px;">
            <div>color+size=small+type=borderAndBackgroundColor</div>
            <div style="display: flex; align-items: center; justify-content: flex-start; column-gap: 9px;">
                <Tag type="borderAndBackgroundColor" size="small" color="default">default</Tag>
                <Tag type="borderAndBackgroundColor" size="small" color="primary">primary</Tag>
                <Tag type="borderAndBackgroundColor" size="small" color="success">success</Tag>
                <Tag type="borderAndBackgroundColor" size="small" color="error">error</Tag>
                <Tag type="borderAndBackgroundColor" size="small" color="warning">warning</Tag>
                <Tag type="borderAndBackgroundColor" size="small" color="magenta">magenta</Tag>
                <Tag type="borderAndBackgroundColor" size="small" color="red">red</Tag>
                <Tag type="borderAndBackgroundColor" size="small" color="volcano">volcano</Tag>
                <Tag type="borderAndBackgroundColor" size="small" color="orange">orange</Tag>
                <Tag type="borderAndBackgroundColor" size="small" color="gold">gold</Tag>
                <Tag type="borderAndBackgroundColor" size="small" color="yellow">yellow</Tag>
                <Tag type="borderAndBackgroundColor" size="small" color="lime">lime</Tag>
                <Tag type="borderAndBackgroundColor" size="small" color="green">green</Tag>
                <Tag type="borderAndBackgroundColor" size="small" color="cyan">cyan</Tag>
                <Tag type="borderAndBackgroundColor" size="small" color="blue">blue</Tag>
                <Tag type="borderAndBackgroundColor" size="small" color="geekblue">geekblue</Tag>
                <Tag type="borderAndBackgroundColor" size="small" color="purple">purple</Tag>
            </div>
        </div>

        <div style="margin-bottom: 36px;">
            <div>setting</div>
            <div style="display: flex; align-items: center; justify-content: flex-start; column-gap: 9px;">
                <Tag :setting="setting">setting</Tag>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "TestTag",
    data() {
        return {
            setting: {
                style: {
                    default: {
                        height: "36px",
                        width: "100px",
                        borderRadius: "8px",
                        background: "linear-gradient(to right, #ff0000, #ff7a00, #ffd000, #4cff00, #00d4ff, #0051ff)",
                    },
                    hover: {
                        boxShadow:"0px 0px 10px 2px #ffffff",
                    },
                },
            },
        };
    },
}
</script>

<style scoped>

</style>
