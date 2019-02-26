<template>
  <div class="home page-container">
    <img alt="Vue logo" src="../../assets/logo.png">
    <HelloWorld msg="KMX 应用组件开发模板" />
    <footer class="footer">
      <Button
        ghost
        type="success"
        @click="navigateToCompList">
        已有组件
      </Button>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld'
import { Button } from 'iview'

export default {
	name: 'Home',
	components: {
		HelloWorld,
		Button
	},
	methods: {
		navigateToCompList () {
			this.$router.push('/kmx-comps')
		}
	}
}
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 20px;
}
</style>
