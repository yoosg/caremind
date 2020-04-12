<template>
  <v-layout column>
    <v-container class="input-area">
      <v-flex>
        <v-text-field v-model="content" label="content" outlined></v-text-field>
        <div class="select-area">
          <v-select
            :items="items"
            label="게시판 선택"
            outlined
            @change="changeBoard"
          ></v-select>
        </div>
      </v-flex>
      <v-flex>
        <v-btn @click="addList">게시</v-btn>
      </v-flex>
    </v-container>
    <v-container class="list-area">
      <v-btn-toggle
        class="button-group"
        v-model="pickBoard"
        tile
        color="deep-purple accent-3"
        group
      >
        <v-btn value="0">
          전체 게시판
        </v-btn>

        <v-btn value="1" @click="choiceFree">
          자유 게시판
        </v-btn>

        <v-btn value="2" @click="choiceQuestion">
          질문 게시판
        </v-btn>
      </v-btn-toggle>
      <div v-if="pickBoard === '0'">
        <ul v-for="item in listAll" :key="item.id">
          <li class="list-item">
            <div>{{ item.content }}</div>
            <div>{{ item.date }}</div>
            <div>{{ item.changeDate }}</div>
          </li>
        </ul>
      </div>
      <div v-if="pickBoard === '1' || pickBoard === '2'">
        <ul v-for="item in renderList" :key="item.id">
          <li class="list-item">
            <div>{{ item.content }}</div>
            <div>{{ item.date }}</div>
            <div>{{ item.changeDate }}</div>
          </li>
        </ul>
      </div>
    </v-container>
  </v-layout>
</template>

<script>
import Data from './data'
export default {
  data: () => ({
    id: 2,
    content: '',
    choice: null,
    items: ['자유 게시판', '질문 게시판'],
    pickBoard: '0',
    listAll: Data.list,
    renderList: []
  }),
  methods: {
    addList() {
      console.log('addList')
      if (this.choice !== null && this.content !== '') {
        this.listAll.push({
          id: this.id,
          content: this.content,
          date: Data.date,
          choice: this.choice
        })
        this.id++
        this.content = ''
      }
    },
    changeBoard(item) {
      console.log(item)
      this.choice = item === '자유 게시판' ? '1' : '2'

      /*
      - 수정기능
      - 삭제기능
      - 게시판 버튼 이벤트
      - 페이지네이션
      -
      */
    },
    choiceFree() {
      this.pickBoard = '1'
      this.renderList = this.listAll.filter((element) => {
        console.log(element.choice)
        console.log(this.pickBoard)
        console.log(element.choice === this.pickBoard)

        return element.choice === this.pickBoard
      })
    },
    choiceQuestion() {
      this.pickBoard = '2'
      this.renderList = this.listAll.filter(
        (element) => element.choice === this.pickBoard
      )
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
