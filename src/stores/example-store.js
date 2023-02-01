import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,

    // doubleCount(state) {
    //   return state.counter * 2;
    // },
    // doublePlusOne() {
    //   return this.doubleCount + 1; // getter 访问另一个 getter 或者 state 可以用 this
    // },
    // getUserById: (state) => {
    //   // getter 可以返回一个函数，不过这会导致缓存失效
    //   return (userId) => state.users.find((user) => user.id === userId);
    // },
    // otherGetter(state) {
    //   // 你还可以调用其他的 store
    //   const otherStore = useOtherStore();
    //   return state.localData + otherStore.data;
    // },
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
