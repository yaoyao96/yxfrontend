<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
  <q-table
    :title="title"
    :data="data"
    :columns="columns"
    row-key="id"
    :filter="filter"
  ><template v-slot:top-right>
    <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
      <template v-slot:append>
        <q-icon name="search" />
      </template>
    </q-input>
    <br>
  </template>
    <template v-slot:top-left>
      <q-btn color="primary" text-color="white" rounded label="+" @click="create()"/>&nbsp; <strong>{{title}}</strong>
    </template>
    <q-tr slot="header" slot-scope="props">
      <q-th v-for="col in columns" :key="col.name" :props="props">
        {{ col.label}}
      </q-th>
    </q-tr>
    <q-tr slot="body" slot-scope="props" :props="props" @click.native="rowClick(props.row)" class="cursor-pointer">
      <q-td v-for="col in props.cols" :key="col.name" :props="props">
        <!--parent component can access child model as slotScope.col, and change how to col should be displayed-->
        <slot name="col" :col="col">
          {{ col.value }}
        </slot>
        <!--parent component can access child model as slotScope.col-->
      </q-td>
    </q-tr>
  </q-table>
  <div class="q-mt-md">
  总额: {{ amountSum }}</div>
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
    }
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
