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
    <div class="q-pa-md" style="max-width: 400px">
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input
          filled
          v-model="name"
          label="Your name *"
          hint="Name and surname"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />

        <q-input
          filled
          type="number"
          v-model="age"
          label="Your age *"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Please type your age',
            (val) => (val > 0 && val < 100) || 'Please type a real age',
          ]"
        />

        <q-toggle v-model="accept" label="I accept the license and terms" />

        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
import { ref } from "vue";

const $q = useQuasar();

const name = ref(null);
const age = ref(null);
const accept = ref(false);
console.log($q);

const onSubmit = () => {
  console.log(accept.value);
  if (accept.value !== true) {
    $q.notify({
      /*

      message: `A text with your alert's awesome message`,  // 必需的参数是消息：

      // 以下所有参数都是可选的：
      timeout: 3000, // 以毫秒为单位; 0意味着没有超时
      type: 'positive', // "type"添加一个颜色和图标，所以你不需要指定它们。可用的值: 'positive', 'negative', 'warning', 'info'
      color: 'positive',  // 背景颜色
      textColor: 'black', // 如果文字颜色默认的“white”不适合
      icon: 'wifi', // 图标
      // or
      avatar: 'statics/boy-avatar.png', // 添加特定图片

      detail: 'Optional detail message.',
      position: 'top-right', // 'top', 'left', 'bottom-left'等  // 提示位置

      actions: [
        {
          label: 'Snooze',
          icon: 'timer', // 可选
          noDismiss: true, // 可选, v0.15.11+
          handler: () => {
            console.log('acting')
          }
        },
        {
          label: 'Dismiss',
          handler: () => {
            console.log('dismissed')
          }
        }
      ],

      onDismiss () { // v0.15.11+
        //...
      }
    */
      color: "red-5",
      textColor: "white",
      icon: "warning",
      message: "You need to accept the license and terms first",
    });
  } else {
    $q.notify({
      color: "green-4",
      textColor: "white",
      icon: "cloud_done",
      message: "Submitted",
    });
  }
};

const onReset = () => {
  name.value = null;
  age.value = null;
  accept.value = false;
};
</script>
