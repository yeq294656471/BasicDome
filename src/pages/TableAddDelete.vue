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
      <q-table
        title="表格增删改"
        selection="multiple"
        v-model:selected="selected"
        row-key="id"
        :rows="tableAddDelMoy.basicData"
        :columns="columns"
        :selected-rows-label="getSelectedString"
      >
        <template v-slot:top>
          <q-btn color="primary" label="增加" @click="onAddTableRow" />
          <q-btn
            class="q-ml-sm"
            color="primary"
            label="删除"
            @click="onremoveTableRow"
          />
        </template>
      </q-table>
      <div class="q-mt-md">Selected: {{ JSON.stringify(selected) }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTableAddDeleteModifyStore } from "src/stores/tableAddDelete";

/* 五、表格增删改 */
const columns = [
  {
    name: "name",
    align: "left",
    label: "姓名",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true, //是否排序
    required: true, //是否可见
    classes: "bg-grey-2 ellipsis",
    style: "max-width: 100px",
    headerClasses: "bg-primary text-white",
  },
  { name: "fat", label: "脂肪 (g)", field: "fat" },
  {
    name: "calcium",
    label: "钙 (%)",
    field: "calcium",
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
    sortable: true,
  },
  {
    name: "cz",
    label: "操作",
    field: "id",
    required: false,
  },
];

const original = [
  {
    name: "Frozen Yogurt",
    fat: 6.0,
    calcium: "14%",
  },
  {
    name: "Ice cream sandwich",
    fat: 9.0,
    calcium: "8%",
  },
  {
    name: "Eclair",
    fat: 16.0,
    calcium: "6%",
  },
  {
    name: "Cupcake",
    fat: 3.7,
    calcium: "3%",
  },
  {
    name: "Gingerbread",
    fat: 16.0,
    calcium: "7%",
  },
  {
    name: "Jelly bean",
    fat: 0.0,
    calcium: "0%",
  },
  {
    name: "Lollipop",
    fat: 0.2,
    calcium: "0%",
  },
  {
    name: "Honeycomb",
    fat: 3.2,
    calcium: "0%",
  },
  {
    name: "Donut",
    fat: 25.0,
    calcium: "2%",
  },
  {
    name: "KitKat",
    fat: 26.0,
    calcium: "12%",
  },
];

const selected = ref([]);
const tableAddDelMoy = useTableAddDeleteModifyStore();
const getSelectedString = () => {
  return selected.value.length === 0
    ? ""
    : `${selected.value.length} record${
        selected.value.length > 1 ? "s" : ""
      } selected of ${tableAddDelMoy.basicData.length}`;
};

//增加
const onAddTableRow = () => {
  tableAddDelMoy.addRow(original);
};

const onremoveTableRow = () => {
  tableAddDelMoy.removeRow();
};
</script>

<style lang="scss" scoped></style>
