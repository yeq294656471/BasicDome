import { defineStore } from "pinia";

export const useAddDeleteModifyStore = defineStore("addDeleteModify", {
  state: () => ({
    inputData: [],
  }),
  getters: {
    ulInfo: (row) =>
      // reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。对空数组是不会执行回调函数的。
      row.inputData.reduce((ulInfo, liInfo) => {
        const countLiInfo = ulInfo.find((it) => it.inpCon === liInfo);
        if (!countLiInfo) {
          ulInfo.push({ inpCon: liInfo, num: 1 });
        } else {
          countLiInfo.num++;
        }
        return ulInfo;
      }, []),
  },
  actions: {
    addInputData(inpCon) {
      this.inputData.push(inpCon);
    },
    removeInputData(inpCon) {
      // lastIndexOf() 方法可返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。
      const i = this.inputData.lastIndexOf(inpCon);
      if (i > -1) this.inputData.splice(i, 1);
    },
    async censusUlInfo() {
      console.log("统计", this.ulInfo);
      const n = this.ulInfo.length;
      this.inputData = [];
      return n;
    },
  },
});
