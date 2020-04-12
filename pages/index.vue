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
            <div>
              <div>{{ item.content }}</div>
              <div>{{ item.date }}</div>
              <div>{{ item.changeDate }}</div>
              <div class="tools" v-if="editTarget === item.id">
                <v-text-field
                  v-model="editContent"
                  label="Edit"
                  outlined
                ></v-text-field>
                <v-btn @click="reflection()">수정</v-btn>
              </div>
            </div>

            <div class="tools">
              <v-btn @click="editComment(item.id)">수정</v-btn>
              <v-btn @click="remove(item.id)">삭제</v-btn>
            </div>
          </li>
        </ul>
      </div>
      <div v-if="pickBoard === '1' || pickBoard === '2'">
        <ul v-for="item in renderList" :key="item.id">
          <li class="list-item">
            <div>
              <div>{{ item.content }}</div>
              <div>{{ item.date }}</div>
              <div>{{ item.changeDate }}</div>
              <div class="tools" v-if="editTarget === item.id">
                <v-text-field
                  v-model="editContent"
                  label="Edit"
                  outlined
                ></v-text-field>
                <v-btn @click="reflection()">수정</v-btn>
              </div>
            </div>
            <div>
              <v-btn @click="editComment(item.id)">수정</v-btn>
              <v-btn @click="remove(item.id)">삭제</v-btn>
            </div>
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
    editTarget: null,
    editContent: '',
    listAll: Data.list,
    renderList: []
  }),
  methods: {
    addList() {
      // 새로운 게시물 등록
      if (this.choice !== null && this.content !== '') {
        this.listAll.push({
          id: this.id,
          content: this.content,
          date: Data.date,
          choice: this.choice
        })
        this.id++
        this.content = ''
      } else if (this.choice === null) {
        alert('게시판을 선택해주세요!')
      } else {
        alert('게시 할 내용을 적어주세요!')
      }
    },
    changeBoard(item) {
      // 새로 작성하는 게시물 게시판 선택
      this.choice = item === '자유 게시판' ? '1' : '2'
    },
    choiceFree() {
      // 자유 게시판
      this.pickBoard = '1'
      this.renderList = this.listAll.filter((element) => {
        return element.choice === this.pickBoard
      })
    },
    choiceQuestion() {
      // 질문 게시판
      this.pickBoard = '2'
      this.renderList = this.listAll.filter(
        (element) => element.choice === this.pickBoard
      )
    },
    editComment(id) {
      // 수정 기능
      if (id === this.editTarget) {
        this.editTarget = null
      } else {
        this.editTarget = id
      }
    },
    reflection() {
      // 수정 반영
      if (this.editContent !== '') {
        this.listAll.map((element) => {
          if (element.id === this.editTarget) {
            element.content = this.editContent
            return element
          } else {
            return element
          }
        })
        this.editContent = ''
        this.editTarget = null
      } else {
        alert('수정 할 내용을 입력해주세요!')
      }
    },
    remove(id) {
      // 삭제 기능
      this.listAll = this.listAll.filter((element) => element.id !== id)
      this.renderList = this.renderList.filter((element) => element.id !== id)
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
  display: flex;
  justify-content: space-between;
}
.tools {
  display: flex;
}
</style>
