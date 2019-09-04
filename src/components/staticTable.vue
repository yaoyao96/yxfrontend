<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-table
    class="my-sticky-column-table"
    :title="title"
    :data="data"
    :columns="columns"
    :row-key="rowKey"
    :filter="filter"
    separator="cell"
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

<style lang="stylus">
  .my-sticky-column-table
    /*
      specifying max-width so the example can
      highlight the sticky column on any browser window
    */

    /* bg color is important for th; just specify one */
    .q-table__middle
     max-height 300px

    .q-table__top,
    .q-table__bottom,
    tr:first-child th, /* bg color is important for th; just specify one */
    td:first-child /* bg color is important for td; just specify one */
      background-color #fff
    tr:first-child th
      position sticky
      background-color $grey-2
      top 0
      opacity 1 /* opacity is important */
      z-index 2 /* higher than z-index for td below */

    tr:first-child th:first-child
      z-index 3 /* highest z-index */

    td:first-child
      z-index 1

    td:first-child, th:first-child
      position sticky
      background-color $grey-2
      left 0
</style>
