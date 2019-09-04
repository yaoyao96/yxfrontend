<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
  <q-table
    :title="title"
    :data="data"
    :columns="columns"
    row-key="id"
    :filter="filter"
  ><template v-slot:top-right >
    <q-input borderless dense debounce="300" v-model="filter" placeholder="此处输入关键字查询">
      <template v-slot:append>
        <q-icon name="search" />
      </template>
    </q-input>
    <br>
  </template>
    <template v-slot:top-left v-if="!paidForm">
      <q-btn color="primary" text-color="white" rounded label="+" @click="create()"><q-tooltip content-style="font-size: 10px">
        点击增加薪资记录
      </q-tooltip></q-btn>&nbsp; <strong>{{title}}</strong>
    </template>
    <q-tr slot="header" slot-scope="props">
      <q-th v-for="col in columns" :key="col.name" :props="props">
        {{ col.label}}
      </q-th>
      <q-tooltip>点击排序</q-tooltip>
    </q-tr>
    <q-tr slot="body" slot-scope="props" :props="props" @click.native="rowClick(props.row)" class="cursor-pointer">
      <q-tooltip content-style="font-size: 10px">
        <div v-if="!paidForm">点击更新</div><div v-else>点击查看学生</div>
      </q-tooltip><q-td v-for="col in props.cols" :key="col.name" :props="props">
        <!--parent component can access child model as slotScope.col, and change how to col should be displayed-->
        <slot name="col" :col="col">
          {{ col.value }}
        </slot>
        <!--parent component can access child model as slotScope.col-->
      </q-td>
    </q-tr>
  </q-table>
  <q-chip class="q-mt-md" v-if="!paidForm">
    总额: ￥{{ amountSum }}</q-chip>
</div>
</template>

<script>
export default {
  name: 'displayTable',
  props: {
    title: null,
    data: Array,
    columns: Array,
    create: Function,
    rowClick: {
      type: Function
    },
    paidForm: Boolean
  },
  data () {
    return {
      filter: ''
    }
  },
  computed: {
    amountSum () {
      let sum = 0
      if (this.data.length > 0) { for (let i = 0; i < this.data.length; i++) { sum += parseFloat(this.data[i].amount) } }
      return sum
    }
  }
}
</script>

<style scoped>

</style>
