<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-table
    :title="title"
    :data="data"
    :columns="columns"
    :row-key="rowKey"
    :filter="filter"
  ><template v-slot:top-right >
    <q-input borderless dense debounce="300" v-model="filter" placeholder="查询">
      <template v-slot:append>
        <q-icon name="search" />
      </template>
    </q-input>
    <br>
  </template>
    <template v-slot:top-left>
      <strong>{{title}}</strong>
    </template>
  </q-table>
</template>

<script>
export default {
  name: 'staticTable',
  props: {
    title: null,
    rowKey: null,
    data: Array,
    columns: Array
  },
  data () {
    return {
      filter: ''
    }
  }
}
</script>

<style scoped>

</style>
