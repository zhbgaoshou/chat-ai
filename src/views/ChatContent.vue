<script setup>
import { ref } from "vue";

const source = ref(`
选择排序（Selection Sort）是一种简单的排序算法，工作原理是每次从未排序的部分中选出最小的元素，并将其移到已排序部分的末尾。下面是用Python实现的选择排序算法：
<br>
\`\`\`python
def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        # 假设当前元素是最小的
        min_index = i
        # 查找剩余未排序部分中的最小元素
        for j in range(i+1, n):
            if arr[j] < arr[min_index]:
                min_index = j
        # 交换找到的最小元素和当前元素
        arr[i], arr[min_index] = arr[min_index], arr[i]

# 示例数组
arr = [64, 25, 12, 22, 11]
print("未排序数组:", arr)

# 调用选择排序函数
selection_sort(arr)

print("已排序数组:", arr)

\`\`\`
`);
</script>

<template>
  <div class="chat-content">
    <ChatFrame
      role="assistant"
      :time="new Date().toLocaleString()"
      source="我是一个ai，能解决问题"
    ></ChatFrame>

    <ChatFrame
      role="user"
      :time="new Date().toLocaleString()"
      source="用python写一个选择排序"
    ></ChatFrame>

    <ChatFrame
      role="assistant"
      :time="new Date().toLocaleString()"
      :source="source"
    ></ChatFrame>
  </div>
</template>

<style scoped lang="scss">
.chat-content {
  overflow-y: scroll;
  padding: 10px;
  font-size: 14px;
  height: 100%;
  margin-bottom: 20px;
}
</style>
