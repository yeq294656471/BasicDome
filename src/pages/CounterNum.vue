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
      一、计数
      <br />
      {{ cunter.counter }} + {{ cunter.counter }} = {{ doublue }}
      <q-btn
        class="q-ml-md"
        color="primary"
        :label="doublue"
        @click="onClick"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useCounterStore } from "stores/example-store";
/* 一、计数 */
const cunter = useCounterStore();
const onClick = () => {
  return cunter.increment();
};
const doublue = computed(() => {
  return cunter.doubleCount;
});
</script>

<style lang="scss" scoped></style>
