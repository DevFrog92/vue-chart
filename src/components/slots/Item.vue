<template>
	<li>
		<slot>
			<!-- NOTE: 등록하는 곳에서 정의할 영역 표현만 해주는 것이다.-->
		</slot>
	</li>
</template>

<script>
export default {
	props: {
		item: {
			type: String,
		},
	},
};
</script>
