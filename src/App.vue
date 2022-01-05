<template>
	<div>
		<fetch-data url="https://jsonplaceholder.typicode.com/users/1">
			<div slot-scope="{ response, loading }" v-if="!loading">
				{{ response }}
			</div>
			<div v-else>Loading...</div>
		</fetch-data>
		<!-- v-model @input event + :value로 받는다 -->
		<!-- <check-box v-model="checked"></check-box> -->
		<!-- <ul>
			<item> 아이템 1 </item>
			<item>
				아이템 2
				<button>click me</button>
			</item>
			<item>
				<div>
					아이템 3
					<img src="./assets/logo.png" alt="logo" />
				</div>
			</item>
			<item>
				<div style="color: blue; font-size: 20px">아이템 5</div>
			</item>
		</ul> -->
		<!-- <h1>Chart.js</h1> -->
		<!-- <bar-chart :propsData="chartDataSet"></bar-chart> -->
		<!-- <hr /> -->
		<!-- <line-chart></line-chart> -->
		<!-- <item-title :title="itemTitle"></item-title> -->
		<!-- <item-list :items="items" @renew="renewItems"></item-list> -->
	</div>
</template>

<script>
import FetchData from './components/renderless/FetchData.vue';
// import BarChart from '@/components/BarChart';
// import LineChart from '@/components/LineChart';
// import ItemTitle from '@/components/common/ItemTitle';
// import ItemList from '@/components/common/ItemList';
// import Item from '@/components/slots/Item';
// import CheckBox from './components/controlled/CheckBox.vue';
export default {
	// 컴포넌트 속성 && 인스턴스 옵션
	components: {
		FetchData,
		// BarChart,
		// LineChart,
		// ItemTitle,
		// ItemList,
		// Item,
		// CheckBox,
	},
	data() {
		return {
			checked: false,
			slotItems: ['아이템1', '아이템2', '아이템3', '아이템4', '아이템5'],
			itemTitle: 'hello',
			items: [10, 20, 30],
			chartDataSet: [
				{
					label: '# of Votes',
					data: [12, 19, 3, 5, 2, 3],
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(255, 159, 64, 0.2)',
					],
					borderColor: [
						'rgba(255, 99, 132, 1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)',
					],
					borderWidth: 1,
				},
			],
		};
	},
	created() {},
	methods: {
		renewItems() {
			this.items = [40, 50, 60];
		},
	},
};
</script>

<style></style>
