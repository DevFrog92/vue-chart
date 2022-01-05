<template>
	<ul>
		<li v-for="(item, index) in items" :key="index">
			{{ item }}
		</li>
		<button @click="$emit('renew')">renew</button>
	</ul>
</template>

<script>
export default {
	props: {
		// props validation
		items: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style></style>
