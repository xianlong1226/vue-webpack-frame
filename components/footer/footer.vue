<template>
	<div class="footer">
		I am footer
		<p>{{count}}</p>
	</div>
</template>

<script>
	
	export default {
		data() {
			return { //初始化数据模型
				
			}
		},
		created() {
			
		},
		mounted() { //生命周期函数 改函数下 可获取DOM
			
		},
		methods: { //所有的 交互操作 例如：click ，mouseover等 写在此对象下
			getData(){

            }
		},
		computed: { //计算属性，当一个数据 需要计算 并实时根据data中数据不断变化时  使用。 
			count () {
				return this.$store.state.count
			}
		},
		filters: {
			
		},
		components: { //注册组件 以便引用
			
		}
	}
</script>

<style lang="less">
	.footer {
        color: blue;
	}
</style>