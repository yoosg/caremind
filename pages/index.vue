<template>
  <v-layout column>
    <v-container class="input-area">
      <v-flex>
        <v-text-field label="content" outlined></v-text-field>
      </v-flex>
      <v-flex>
        <v-btn>Normal</v-btn>
      </v-flex>
    </v-container>
    <v-container class="list-area">asdf</v-container>
  </v-layout>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
.input-area {
  width: 80%;
  border: 1px solid gray;
}
.list-area {
  border: 1px solid #000000;
  width: 80%;
  margin-top: 30px;
}
</style>
