<template>
	<canvas ref="barChart" id="barChart" width="400" height="400" />
</template>

<script>
export default {
	data() {
		return {};
	},
	props: {
		propsData: {
			type: Array,
			default: () => [],
		},
	},
	mounted() {
		const ctx = this.$refs.barChart;
		new this.$_Chart(ctx, {
			type: 'bar',
			data: {
				labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
				datasets: this.propsData,
			},
			options: {
				scales: {
					y: {
						beginAtZero: true,
					},
				},
			},
		});
	},
};
</script>

<style></style>
