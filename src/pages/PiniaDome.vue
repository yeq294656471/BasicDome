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
      Pinia Dome
      <br />
      <form @submit.prevent="addItemToCart">
        <input type="text" v-model="itemName" />
        <button class="q-ml-sm">增加</button>
      </form>

      <form @submit.prevent="buy">
        <ul>
          <li v-for="item in cart.items" :key="item.name">
            {{ item.name }} ({{ item.amount }})
            <button @click="cart.removeItem(item.name)" type="button">X</button>
          </li>
        </ul>
        <button>提交</button>
        <button
          :disabled="!cart.items.length"
          @click="clearCart"
          type="button"
          data-testid="clear"
          class="q-ml-sm"
        >
          清空
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { defineComponent, ref } from "vue";
import { useCartStore } from "stores/cart";

const cart = useCartStore();
const itemName = ref("");
function addItemToCart() {
  if (!itemName.value) return;
  cart.addItem(itemName.value);
  itemName.value = "";
}
function clearCart() {
  if (window.confirm("是否全部清除?")) {
    cart.rawItems = [];
  }
}
async function buy() {
  const n = await cart.purchaseItems();
  console.log(`Bought ${n} items`);
  cart.rawItems = [];
}
</script>

<style lang="scss" scoped></style>
