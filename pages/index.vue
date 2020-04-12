<template>
  <v-layout column>
    <v-container class="input-area">
      <v-flex>
        <v-text-field v-model="content" label="content" outlined></v-text-field>
        <div class="select-area">
          <v-select :items="items" label="게시판 선택" outlined></v-select>
        </div>
      </v-flex>
      <v-flex>
        <v-btn @click="addList">게시</v-btn>
      </v-flex>
    </v-container>
    <v-container class="list-area">
      <div class="button-group">
        <v-btn @click="addList">전체게시판</v-btn>
        <v-btn @click="addList">자유게시판</v-btn>
        <v-btn @click="addList">질문게시판</v-btn>
      </div>
      <ul v-for="item in listAll" :key="item.id">
        <li class="list-item">
          <div>{{ item.content }}</div>
          <div>{{ item.date }}</div>
          <div>{{ item.changeDate }}</div>
        </li>
      </ul>
    </v-container>
  </v-layout>
</template>

<script>
import Data from './data'
export default {
  data: () => ({
    addItem: { id: 2, content: 'asdfasdf', date: Data.date, choice: 0 },
    id: 2,
    content: '',
    addDate: Data.date,
    items: ['자유 게시판', '질문 게시판'],
    listAll: Data.list
  }),
  methods: {
    addList() {
      console.log('addList')
      this.listAll.push(this.addItem)
    }
  }
}
</script>
<style lang="scss" scoped>
.input-area {
  width: 80%;
  border: 1px solid gray;
}
.select-area {
  width: 20%;
}
.button-group {
  margin-bottom: 30px;
}
.list-area {
  border: 1px solid #000000;
  width: 80%;
  margin-top: 30px;
}
.list-item {
  margin-bottom: 20px;
}
</style>
