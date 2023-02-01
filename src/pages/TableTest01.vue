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

    <!--
        :pagination.sync="tablePagination"
        :loading="loading"
        hide-bottom
        flat -->
    <div class="q-mt-sm q-gutter-sm">
      <q-table
        title="表格弹框"
        row-key="id"
        selection="multiple"
        v-model:selected="tableTestStore.selected"
        :rows="tableTestStore.showListData"
        :columns="columns"
        :visible-columns="visibleColumns"
        :rows-per-page-options="[10, 20, 0]"
      >
        <template v-slot:top>
          <q-input
            icon="place"
            color="amber"
            v-model="tableTestStore.search"
            placeholder="请输入关键字"
            stack-label="Search for a place"
          />
          <q-btn
            label="查询"
            icon="search"
            color="primary"
            class="q-px-sm q-ml-sm"
            @click="onSearchAction(tableTestStore.search)"
          />
          <q-btn
            label="新增"
            icon="add"
            color="primary"
            class="q-px-sm q-ml-sm"
            @click="tableTestStore.boxStatue = true"
          />
          <q-btn
            label="批量删除"
            color="negative"
            :disable="tableTestStore.selected.length == 0"
            class="q-px-sm q-ml-sm"
            @click="onDeleteAction()"
          />
          <p class="q-px-sm" />
        </template>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td>
              <q-checkbox v-model="props.selected" />
            </q-td>
            <q-td key="id" :props="props">{{ props.row.id }}</q-td>
            <q-td key="name" :props="props">
              <span>{{ props.row.name }}</span>
            </q-td>
            <q-td key="age" :props="props">
              <span>{{ props.row.age }}</span>
            </q-td>
            <q-td key="clickAction" :props="props">
              <q-btn
                @click="onDeleteAction(props.row.id)"
                color="negative"
                label="删除"
              />
              <label class="q-px-sm" />
              <q-btn
                @click="onEditAction(props.row.id)"
                color="primary"
                label="编辑"
              />
            </q-td>
          </q-tr>
        </template>
      </q-table>
      <q-dialog v-model="tableTestStore.boxStatue">
        <q-card>
          <q-card-section>
            <div class="text-h6">新增</div>
          </q-card-section>
          <q-separator />
          <q-form
            @submit="onSubmitAction(tableTestStore.id)"
            @reset="tableTestStore.resetData()"
            class="q-gutter-md"
          >
            <q-card-section
              style="max-height: 50vh; width: 500px"
              class="scroll"
            >
              <div class="q-pa-md" style="max-width: 400px">
                <q-input
                  filled
                  v-model="tableTestStore.name"
                  label="姓名"
                  hint="姓名或者别名"
                  lazy-rules
                  :rules="[(val) => (val && val.length > 0) || '请输入姓名！']"
                />
                <q-input
                  filled
                  type="number"
                  v-model="tableTestStore.age"
                  label="年龄"
                  lazy-rules
                  :rules="[
                    (val) => (val !== null && val !== '') || '请输入年龄！',
                    (val) => (val > 0 && val < 100) || '请输入真实年龄！',
                  ]"
                />
                <q-toggle
                  v-model="tableTestStore.accept"
                  label="我接受许可证和条款"
                />
              </div>
            </q-card-section>
            <q-separator />
            <q-card-actions align="center">
              <q-btn flat label="确定" color="primary" type="submit" />
              <q-btn
                flat
                label="重置"
                type="reset"
                color="primary"
                class="q-ml-sm"
              />
              <q-btn flat label="取消" color="primary" v-close-popup />
            </q-card-actions>
          </q-form>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>

<script setup>
import { useQuasar } from "quasar";
import { defineComponent, ref } from "vue";
import { useTableTestStore } from "stores/TableTest01";

/* 公共 */
const $q = useQuasar();
const tableTestStore = useTableTestStore();
const visibleColumns = ["name", "age", "clickAction"];
const columns = [
  {
    name: "id",
    label: "ID",
    field: "id",
    align: "center",
    sortable: true,
    headerClasses: "bg-primary text-white",
  },
  {
    name: "name",
    label: "姓名",
    field: (row) => row.name,
    align: "center",
    format: (val) => `${val}`,
    sortable: true, //是否排序
    required: true, //是否可见
    classes: "bg-grey-2 ellipsis",
    headerClasses: "bg-primary text-white",
  },
  {
    name: "age",
    label: "年龄",
    field: "age",
    align: "center",
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
    sortable: true,
    headerClasses: "bg-primary text-white",
  },
  {
    name: "clickAction",
    label: "操作",
    field: "clickAction",
    align: "center",
    style: "max-width: 100px",
    headerClasses: "bg-primary text-white",
  },
];
/* 提交 */
const onSubmitAction = (idVal) => {
  if (tableTestStore.accept !== true) {
    $q.notify({
      color: "red-5",
      textColor: "white",
      icon: "warning",
      message: "您需要先接受许可证和条款",
    });
  } else {
    $q.notify({
      color: "green-4",
      textColor: "white",
      icon: "cloud_done",
      message: "提交成功",
    });
    tableTestStore.submitData(
      idVal,
      tableTestStore.name,
      tableTestStore.age,
      tableTestStore.accept
    );
  }
};

/* 删除 */
const onDeleteAction = (id) => {
  console.log(id);
  if (id !== undefined) {
    tableTestStore.deleteData(id);
    setTimeout(() => {
      $q.notify({
        color: "green-4",
        textColor: "white",
        icon: "cloud_done",
        message: "删除成功",
      });
    }, 500);
  } else {
    tableTestStore.batchDeleteData();
    setTimeout(() => {
      $q.notify({
        color: "green-4",
        textColor: "white",
        icon: "cloud_done",
        message: "删除成功",
      });
    }, 500);
  }
};

/* 编辑 */
const onEditAction = (id) => {
  tableTestStore.editData(id);
};

/* 查询 */
const onSearchAction = (result) => {
  let searchListData = [];
  tableTestStore.listData.forEach((item) => {
    if (item.name.indexOf(result) > -1) {
      searchListData.push(item);
    }
  });
  if (result !== "") {
    tableTestStore.showListData = searchListData;
  } else {
    tableTestStore.showListData = tableTestStore.listData;
  }
};
</script>

<style lang="scss" scoped></style>
