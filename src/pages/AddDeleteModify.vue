<template>
  <div class="q-pa-sm">
    <q-btn
      color="primary"
      icon="home"
      unelevated
      to="/"
      label="返回首页"
      no-caps
    />
    <hr />
    <div class="q-mt-sm">
      数据增删改
      <br />
      <form>
        <input type="text" placeholder="请输入内容" v-model="listInfo" />
        <q-btn
          class="q-ml-sm"
          color="primary"
          label="增加"
          @click="onAddListInfo"
        />
        <q-btn
          class="q-ml-sm"
          color="primary"
          label="提交"
          @click="onSumbitData"
        />
        <q-btn
          class="q-ml-sm"
          color="primary"
          label="清除"
          @click="onClearData"
        />
      </form>
      <ul>
        <li>{{ addDeleteModify.inputData }}</li>
        <li v-for="liInfo in addDeleteModify.ulInfo" :key="liInfo.name">
          {{ liInfo.inpCon }}（{{ liInfo.num }}）
          <q-btn
            label="X"
            @click="addDeleteModify.removeInputData(liInfo.inpCon)"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { defineComponent, ref } from "vue";
import { useAddDeleteModifyStore } from "stores/addDeleteModify";

const addDeleteModify = useAddDeleteModifyStore();
const listInfo = ref("");
//增加
const onAddListInfo = () => {
  if (!listInfo.value) return;
  addDeleteModify.addInputData(listInfo.value);
  listInfo.value = "";
};
// 提交
async function onSumbitData() {
  const n = await addDeleteModify.censusUlInfo();
  // console.log(`共 ${n} li`);
  addDeleteModify.inputData = [];
}
// 清除
const onClearData = () => {
  addDeleteModify.inputData = [];
};
</script>

<style lang="scss" scoped></style>
