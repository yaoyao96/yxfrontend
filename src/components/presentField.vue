<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <q-field :label="label" stack-label borderless>
    <template v-slot:prepend>
      <q-icon :name="icon" class="text-primary" />
    </template>
    <template v-slot:control>
      <div class="self-center full-width no-outline">{{text}}</div>
    </template> </q-field>
</template>

<script>
export default {
  name: 'presentField',
  props: {
    label: String,
    icon: String,
    text: null
  }
}
</script>

<style scoped>

</style>
