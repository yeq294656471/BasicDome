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
    一、
    <div class="q-mt-sm q-gutter-sm">
      <q-btn label="Alert" color="primary" @click="alert = true" />
      <q-btn label="Confirm" color="primary" @click="confirm = true" />
      <q-btn label="Prompt" color="primary" @click="prompt = true" />

      <q-dialog v-model="alert">
        <q-card>
          <q-card-section>
            <div class="text-h6">Alert</div>
          </q-card-section>
          <q-card-section class="q-pt-none"
            >Alert contentAlert contentAlert contentAlert contentAlert
            contentAlert contentAlert content</q-card-section
          >
          <q-card-actions align="right">
            <q-btn flat label="确定" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-dialog v-model="confirm" persistent>
        <q-card>
          <q-card-section class="row items-center">
            <q-avatar
              icon="signal_wifi_off"
              color="primary"
              text-color="white"
            />
            <span class="q-ml-sm"
              >You are currently not connected to any network.</span
            >
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="primary" v-close-popup />
            <q-btn flat label="Turn on Wifi" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <q-dialog v-model="prompt" persistent>
        <q-card style="min-width: 350px">
          <q-card-section>
            <div class="text-h6">Your address</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-input
              dense
              v-model="address"
              autofocus
              @keyup.enter="prompt = false"
            />
          </q-card-section>

          <q-card-actions align="right" class="text-primary">
            <q-btn flat label="Cancel" v-close-popup />
            <q-btn flat label="Add address" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
    <hr />
    二、
    <div class="q-mt-sm q-gutter-sm">
      <q-btn label="Close Icon" color="primary" @click="icon = true" />
      <q-btn label="With QBar" color="primary" @click="bar = true" />
      <q-btn label="Another QBar" color="primary" @click="bar2 = true" />
      <q-btn label="With QToolbar" color="primary" @click="toolbar = true" />

      <q-dialog v-model="icon">
        <q-card>
          <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">Close icon</div>
            <q-space />
            <q-btn icon="close" flat round dense v-close-popup />
          </q-card-section>

          <q-card-section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
            perferendis totam, ea at omnis vel numquam exercitationem aut, natus
            minima, porro labore.
          </q-card-section>
        </q-card>
      </q-dialog>

      <q-dialog v-model="bar" persistent>
        <q-card>
          <q-bar>
            <q-icon name="network_wifi" />
            <q-icon name="network_cell" />
            <q-icon name="battery_full" />
            <div>9:34</div>

            <q-space />

            <q-btn dense flat icon="close" v-close-popup>
              <q-tooltip>Close</q-tooltip>
            </q-btn>
          </q-bar>

          <q-card-section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
            perferendis totam, ea at omnis vel numquam exercitationem aut, natus
            minima, porro labore.
          </q-card-section>

          <q-card-section class="q-pt-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
            perferendis totam, ea at omnis vel numquam exercitationem aut, natus
            minima, porro labore.
          </q-card-section>
        </q-card>
      </q-dialog>

      <q-dialog
        v-model="bar2"
        persistent
        transition-show="flip-down"
        transition-hide="flip-up"
      >
        <q-card class="bg-primary text-white">
          <q-bar>
            <q-icon name="network_wifi" />
            <q-icon name="network_cell" />
            <q-icon name="battery_full" />
            <div>9:34</div>

            <q-space />

            <q-btn dense flat icon="close" v-close-popup>
              <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>

          <q-card-section>
            <div class="text-h6">Alert</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
            perferendis totam, ea at omnis vel numquam exercitationem aut, natus
            minima, porro labore.
          </q-card-section>
        </q-card>
      </q-dialog>

      <q-dialog v-model="toolbar">
        <q-card>
          <q-toolbar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" />
            </q-avatar>

            <q-toolbar-title
              ><span class="text-weight-bold">Quasar</span>
              Framework</q-toolbar-title
            >

            <q-btn flat round dense icon="close" v-close-popup />
          </q-toolbar>

          <q-card-section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
            perferendis totam, ea at omnis vel numquam exercitationem aut, natus
            minima, porro labore.
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
    <hr />
    三、
    <div class="q-mt-sm q-gutter-sm">
      <q-btn
        label="Top"
        icon="keyboard_arrow_up"
        color="primary"
        @click="open('top')"
      />
      <q-btn
        label="Right"
        icon="keyboard_arrow_right"
        color="primary"
        @click="open('right')"
      />
      <q-btn
        label="Bottom"
        icon="keyboard_arrow_down"
        color="primary"
        @click="open('bottom')"
      />
      <q-btn
        label="Left"
        icon="keyboard_arrow_left"
        color="primary"
        @click="open('left')"
      />

      <q-dialog v-model="dialog" :position="position">
        <q-card style="width: 350px">
          <q-linear-progress :value="0.6" color="pink" />

          <q-card-section class="row items-center no-wrap">
            <div>
              <div class="text-weight-bold">The Walker</div>
              <div class="text-grey">Fitz & The Tantrums</div>
            </div>

            <q-space />

            <q-btn flat round icon="fast_rewind" />
            <q-btn flat round icon="pause" />
            <q-btn flat round icon="fast_forward" />
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
    <hr />
    四、
    <div class="q-mt-sm q-gutter-sm">
      <q-table title="表格弹框">
        <template v-slot:top>
          <q-btn
            label="新增"
            icon="add"
            color="primary"
            @click="fixed = true"
          />
        </template>
      </q-table>
      <q-dialog v-model="fixed">
        <q-card>
          <q-card-section>
            <div class="text-h6">新增</div>
          </q-card-section>

          <q-separator />

          <q-card-section style="max-height: 50vh; width: 500px" class="scroll">
            <p v-for="n in 5" :key="n">11111111111</p>
          </q-card-section>

          <q-separator />

          <q-card-actions align="center">
            <q-btn flat label="确定" color="primary" v-close-popup />
            <q-btn flat label="取消" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

/* 公共 */
const dialog = ref(false);

/* 四 */
const fixed = ref(false);

/* 三 */
const position = ref("top");
const open = (position) => {
  position = position;
  dialog.value = true;
};

/* 二 */
const icon = ref(false);
const bar = ref(false);
const bar2 = ref(false);
const toolbar = ref(false);

/* 一 */
const alert = ref(false);
const confirm = ref(false);
const prompt = ref(false);
const address = ref("");
</script>

<style lang="scss" scoped></style>
