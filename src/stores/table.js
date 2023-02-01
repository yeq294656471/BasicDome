import { defineStore } from "pinia";

export const useTableStore = defineStore("data", {
  state: () => ({
    data: [
      {
        id: 1,
      },
    ],
  }),
  getters: {},
  actions: {
    addData(row) {
      console.log(row);
      this.data.push(row);
    },
  },
});
