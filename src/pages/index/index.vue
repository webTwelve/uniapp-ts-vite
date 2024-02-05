<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area" ref="aa">
      <text class="title">{{ title }}</text>
      <button @click="fn">DD</button>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const title = ref('Hello')
const aa = ref()
const fn = () => {
  console.log(aa.value)
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
