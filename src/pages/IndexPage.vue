<template>
  <div class="q-mt-sm">
    <div class="q-mt-sm">
      <q-btn class="q-ml-sm" color="primary" label="其他" to="/CS" />
    </div>
    <hr />
    <div>
      <q-btn
        class="q-ml-sm"
        color="primary"
        icon="map"
        label="计数"
        to="/CounterNum"
      />
      <q-btn
        class="q-ml-sm"
        color="primary"
        icon="check"
        label="加参数"
        to="/AddParam"
      />
      <q-btn
        class="q-ml-sm"
        color="primary"
        label="PiniaDome"
        to="/PiniaDome"
      />
      <q-btn
        class="q-ml-sm"
        color="primary"
        label="数据增删改"
        to="/AddDeleteModify"
      />
      <q-btn
        class="q-ml-sm"
        color="primary"
        label="表格增删"
        to="/TableAddDelete"
      />
    </div>

    <hr />
    <div class="q-mt-sm">
      <q-btn
        class="q-ml-sm"
        color="primary"
        label="BoxTooltip"
        to="/BoxTooltip"
      />
      <q-btn class="q-ml-sm" color="primary" label="表格弹框" to="/TableBox" />
      <q-btn
        class="q-ml-sm"
        color="primary"
        label="form表单"
        to="/FormNotify"
      />
    </div>
    <hr />
    <div class="q-mt-sm">
      <q-btn
        class="q-ml-sm"
        color="primary"
        label="表格练习01"
        to="/TableTest01"
      />
    </div>
  </div>
</template>

<script setup>
import { defineComponent } from "vue";
</script>

<style lang="scss" scoped></style>
