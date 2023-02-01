import { defineStore } from "pinia";
import { uid } from "quasar";

export const useTableTestStore = defineStore("TableTest", {
  state: () => ({
    id: "",
    name: "",
    age: "",
    accept: false,
    selected: [],
    search: "",
    boxStatue: false,
    listData: [
      {
        id: "ce86e9d2-41eb-4773-a8a8-5bf1b3d5eb9a",
        name: "叶子",
        age: "11",
        accept: true,
      },
      {
        id: "6f0f8eb3-917f-4527-be53-e003ec280e04",
        name: "王三",
        age: "22",
        accept: true,
      },
      {
        id: "8fdad327-331e-4d61-a185-3f1ff2f8474e",
        name: "李子",
        age: "33",
        accept: true,
      },
      {
        id: "62a1cc91-988c-4936-8bfa-97da256af8a9",
        name: "张思",
        age: "44",
        accept: true,
      },
    ],
    showListData: [
      {
        id: "ce86e9d2-41eb-4773-a8a8-5bf1b3d5eb9a",
        name: "叶子",
        age: "11",
        accept: true,
      },
      {
        id: "6f0f8eb3-917f-4527-be53-e003ec280e04",
        name: "王三",
        age: "22",
        accept: true,
      },
      {
        id: "8fdad327-331e-4d61-a185-3f1ff2f8474e",
        name: "李子",
        age: "33",
        accept: true,
      },
      {
        id: "62a1cc91-988c-4936-8bfa-97da256af8a9",
        name: "张思",
        age: "44",
        accept: true,
      },
    ],
  }),
  getters: {},
  actions: {
    /* 提交 */
    submitData(idVal, nameVal, ageVal, accepVal) {
      let obj = { name: nameVal, age: ageVal, accept: accepVal },
        indexX = this.showListData.findIndex((item) => item.id == idVal),
        indexY = this.listData.findIndex((item) => item.id == idVal);
      if (indexX == -1) {
        // 新增
        obj.id = uid();
        this.showListData.push(obj);
        this.listData.push(obj);
      } else {
        // 修改
        obj.id = idVal;
        this.showListData.splice(indexX, 1, obj);
        this.listData.splice(indexY, 1, obj);
      }
      setTimeout(() => {
        this.id = "";
        this.resetData();
        this.boxStatue = false;
      }, 500);
    },

    /* 重置 */
    resetData() {
      this.name = "";
      this.age = "";
      this.accept = false;
    },

    /* 删除 */
    deleteData(idVal) {
      let indexX = this.showListData.findIndex((item) => item.id == idVal),
        indexY = this.listData.findIndex((item) => item.id == idVal);
      this.showListData.splice(indexX, 1);
      this.listData.splice(indexY, 1);
    },

    /* 批量删除 */
    batchDeleteData() {
      console.log("------------------- 01 ---" + this.selected.length);
      console.log(this.selected);
      let indexX, indexY;
      indexX = this.showListData.findIndex((item) => {
        console.log(item);
        this.selected.findIndex((element) => {
          if (item.id == element.id) {
            console.log(item.id + "---------" + element.id);
          }
        });
      });

      //console.log(indexX);
    },

    /* 编辑 */
    editData(idVal) {
      // 数据回显
      let index = this.showListData.findIndex((item) => item.id == idVal);
      this.name = this.showListData[index].name;
      this.age = this.showListData[index].age;
      this.id = idVal;
      this.accept = true;
      this.boxStatue = true;
    },
  },
});
