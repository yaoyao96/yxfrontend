<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          艺星琴行
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>艺星琴行</q-item-label>
        <q-item clickable to="/teacher">
          <q-item-section avatar>
            <q-icon name="fas fa-drum" />
          </q-item-section>
          <q-item-section>
            <q-item-label>教师</q-item-label>
            <q-item-label caption>概况与薪水支出</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/student">
          <q-item-section avatar>
            <q-icon name="fas fa-guitar" />
          </q-item-section>
          <q-item-section>
            <q-item-label>学生</q-item-label>
            <q-item-label caption>基本资料与收费信息</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/income">
          <q-item-section avatar>
            <q-icon name="fas fa-headphones" />
          </q-item-section>
          <q-item-section>
            <q-item-label>收支表</q-item-label>
            <q-item-label caption>收入与支出记录</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/form">
          <q-item-section avatar>
            <q-icon name="fas fa-music" />
          </q-item-section>
          <q-item-section>
            <q-item-label>缴费汇总</q-item-label>
            <q-item-label caption>生成表单</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
