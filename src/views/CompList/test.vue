<template>
  <div>
    <div class="comp-list">
      <div class="list-item" v-for="(item, key) in cards" :key="key">
      <Card style="width:320px;margin:0 auto;">
          <div style="text-align:center">
              <img src="@/assets/logo.png">
              <h3>{{item}}</h3>
          </div>
      </Card>
      </div>
    </div>
    <footer>
      <Button ghost type="success" @click="navigateToHome">
        返回首页
      </Button>
    </footer>
  </div>
</template>

<script>
import { Card, Button } from 'iview'

export default {
  name: 'CompList',
  data () {
    return {
      cards: [
        '导航组件',
        '数据查询',
        '用户列表'
      ]
    }
  },
  components: {
    Card,
    Button
  },
  methods: {
    navigateToHome () {
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss" scoped>
.comp-list {
  display: flex;
  justify-content: space-around;
  padding-top: 20px;

}
.list-item {
  flex:1;
  overflow: hidden;
}
footer {
  margin-top: 20px;
}
img {
  transform: scale(.8);
}
</style>
