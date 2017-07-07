<template>
	<div class="index">
		<headers></headers>
        <p>I am index</p>
		<p>{{ count }}</p>
		<p>
			<button @click="increment">+</button>
			<button @click="decrement">-</button>
		</p>
		<p>
			<button @click="getData">查询测试</button>
		</p>
		<p>
			<router-link to="/router1" replace>Go to router1</router-link>
			<router-link to="/router2">Go to router2</router-link>
			<router-link to="/router3/1">Go to router3/1</router-link>
			<router-link to="/router3/2">Go to router3/2</router-link>
		</p>
		<router-view></router-view>
        <footers></footers>
	</div>
</template>

<script>
	import headers from 'components/header/header.vue';
    import footers from 'components/footer/footer.vue';
	
	export default {
		data() {
			return { //初始化数据模型
				
			}
		},
		computed: { //计算属性，当一个数据 需要计算 并实时根据data中数据不断变化时  使用。 
			count () {
				return this.$store.state.count
			}
		},
		created() {
			
		},
		mounted() { //生命周期函数 改函数下 可获取DOM
			
		},
		methods: { //所有的 交互操作 例如：click ，mouseover等 写在此对象下
			getData(){
				$.ajax({ 
					'url': '/test', 
					'method': 'get', 
					'success': function(result) {
						console.log(result)
					}
				})
            },
			increment () {
				this.$store.commit('increment', 2)
			},
			decrement () {
				this.$store.commit('decrement', 3)
			}
		},
		filters: {
			
		},
		components: { //注册组件 以便引用
			headers,
            footers
		}
	}
</script>

<style lang="less">
	@font-face {
		font-family: 'transformericon-font';
		src: url('./fonts/transformericon.eot');
		src: url('./fonts/transformericon.eot?#iefix') format('embedded-opentype'), url('./fonts/transformericon.ttf') format('truetype'), url('./fonts/transformericon.woff') format('woff'), url('./fonts/transformericon.svg#icons-font') format('svg');
		font-weight: normal;
		font-style: normal;
	}
	.index {
		color: green;
		height: 300px;
		background: url('./images/bg.jpg') no-repeat center center;
		font-family: 'transformericon-font';
	}
</style>