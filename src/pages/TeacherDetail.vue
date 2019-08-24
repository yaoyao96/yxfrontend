<template>
  <div class="q-ma-lg">
    <h5> {{teacher.name}} 薪水支出</h5>
    <q-markup-table>
      <thead>
      <tr>
        <th class="text-left">年份</th>
        <th class="text-right"> 1月</th>
        <th class="text-right"> 2月</th>
        <th class="text-right"> 3月</th>
        <th class="text-right"> 4月</th>
        <th class="text-right"> 5月</th>
        <th class="text-right"> 6月</th>
        <th class="text-right"> 7月</th>
        <th class="text-right"> 8月</th>
        <th class="text-right"> 9月</th>
        <th class="text-right"> 10月</th>
        <th class="text-right"> 11月</th>
        <th class="text-right"> 12月</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td class="text-left">2013</td>
        <td class="text-right">159</td>
        <td class="text-right">6</td>
        <td class="text-right">24</td>
        <td class="text-right">4</td>
        <td class="text-right">87</td>
        <td class="text-right">356</td>
        <td class="text-right">16</td>
        <td class="text-right">49</td>
        <td class="text-right">3.9</td>
        <td class="text-right">327</td>
        <td class="text-right">356</td>
        <td class="text-right">16</td>
      </tr>
      </tbody>
    </q-markup-table>
    <br>
    <q-btn color="white" text-color="black" label="增加" style="float: right"/>
  </div>
</template>

<script>
import api from 'src/api/api'
export default {
  name: 'teacherdetail',
  data () {
    return {
      teacherId: this.$route.params.id,
      teacher: null,
      salarylist: null
    }
  },
  async created () {
    this.teacher = await api.getTeacherById(this.teacherId)
  }
}
</script>
