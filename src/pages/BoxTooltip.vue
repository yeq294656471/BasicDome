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
    <div class="q-mt-md">
      <!-- target默认为true，则会默认将 tooltip 的父元素作为触发tooltip的目标，即鼠标经过tooltip的父元素时，tooltip就会显示 -->
      <div>
        <q-btn color="primary" label="tooltip的父元素" size="16px">
          <q-tooltip>我在这</q-tooltip>
        </q-btn>
      </div>
      <div class="q-mt-md">
        <q-tooltip target=".hover-me">我在这</q-tooltip>
        <q-btn class="hover-me" label="tooltip指定的target元素"></q-btn>
      </div>

      <div class="q-mt-md">
        <div class="q-gutter-sm">
          <q-btn color="primary" @click="showing = true" label="Show" />
          <q-btn color="primary" @click="showing = false" label="Hide" />
        </div>

        <div
          style="width: 200px; height: 70px"
          class="bg-purple text-white rounded-borders row flex-center q-mt-md"
        >
          Hover here or click buttons
          <q-tooltip v-model="showing">Tooltip text</q-tooltip>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showing = ref(false);
</script>
