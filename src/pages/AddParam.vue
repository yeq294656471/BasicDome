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
      加参数
      <br />
      {{ table.data }}
      <q-btn class="q-ml-lg" color="primary" label="添加" @click="onAdd" />
    </div>
  </div>
</template>

<script setup>
import { uid } from "quasar";
import { useTableStore } from "stores/table";

/* 二、加参数 */
const table = useTableStore();
const onAdd = () => {
  table.addData({ id: uid() });
};
</script>

<style lang="scss" scoped></style>
