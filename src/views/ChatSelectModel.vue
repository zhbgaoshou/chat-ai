<script setup>
import { ref } from 'vue'

const offset = ref({ x: -1, y: window.innerHeight - 300 })

let show = ref(false)
function onClick() {
    show.value = true
}

const selectValue = ref(['2'])
const columns = [
    { text: 'ChatGPT 4', value: '0' },
    { text: 'ChatGPT 4o', value: '1' },
    { text: 'ChatGPT 3.5', value: '2' },
];
const onConfirm = ({ selectedValues }) => {
    showToast(`当前值: ${selectedValues.join(',')}`);
};
const onChange = ({ selectedValues }) => {
    showToast(`当前值: ${selectedValues.join(',')}`);
};
const onCancel = () => showToast('取消');

</script>

<template>

    <van-floating-bubble v-model:offset="offset" axis="y" icon="chat" @click="onClick">
        <div class="folating" >
            <van-icon name="chat-o" size="16" />
            <span>模型</span>
        </div>
    </van-floating-bubble>

    <van-popup v-model:show="show" round position="bottom">
        <van-picker v-model="selectValue" title="选择模型" :columns="columns" @confirm="onConfirm" @cancel="onCancel"
            @change="onChange" />
    </van-popup>
</template>

<style scoped lang="scss">
.folating {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>