import { defineStore } from "pinia";

export const useTableAddDeleteModifyStore = defineStore(
  "tableAddDeleteModify",
  {
    state: () => ({ rowCount: 10, basicData: [] }),
    getters: {},
    actions: {
      addRow(original) {
        setTimeout(() => {
          const index = Math.floor(Math.random() * (this.basicData.length + 1)),
            row = original[Math.floor(Math.random() * original.length)];
          console.log(index);
          console.log(row);
          console.log(this.basicData);
          if (this.basicData.length === 0) {
            this.rowCount = 0;
          }
          row.id = ++this.rowCount;
          const addRow = { ...row };
          this.basicData = [
            ...this.basicData.slice(0, index),
            addRow,
            ...this.basicData.slice(index),
          ];
        }, 500);
      },
      removeRow() {
        setTimeout(() => {
          const index = Math.floor(Math.random() * this.basicData.length);
          this.basicData = [
            ...this.basicData.slice(0, index),
            ...this.basicData.slice(index + 1),
          ];
        }, 500);
      },
    },
  }
);
