<template>
	<canvas ref="lineChart" id="lineChart"></canvas>
</template>

<script>
export default {
	data() {
		return {
			data: {
				labels: ['10', '20', '30', '40', '50', '60', '70'],
				datasets: [
					{
						label: 'data for study',
						backgroundColor: 'rgb(22, 99, 132)',
						borderColor: 'rgb(25, 99, 132)',
						data: [0, 6, 16, 25, 16, 6, 0],
					},
				],
			},
		};
	},
	mounted() {
		this.drawChart();
	},
	methods: {
		drawChart() {
			const canvas = this.$refs.lineChart;
			const config = {
				type: 'line',
				data: this.data,
				options: {},
			};

			new this.$_Chart(canvas, config);
		},
	},
};
</script>

<style></style>
