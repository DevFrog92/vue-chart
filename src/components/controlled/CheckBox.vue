<template>
	<!-- NOTE: n:n 통신을 방지한다. -->
	<input type="checkbox" :value="value" @click="toggleCheckBox" />
</template>

<script>
export default {
	props: {
		value: {
			type: Boolean,
		},
	},
	methods: {
		toggleCheckBox() {
			this.$emit('input', !this.value);
		},
	},
};
</script>

<style></style>
