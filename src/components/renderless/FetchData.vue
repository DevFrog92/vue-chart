<script>
import axios from 'axios';

export default {
	props: {
		url: {
			type: String,
		},
	},
	data() {
		return {
			response: null,
			loading: true,
		};
	},
	created() {
		axios
			.get(this.url)
			.then((response) => {
				this.response = response.data;
				this.loading = false;
			})
			.catch((error) => {
				alert('[ERROR] fetching the data', error);
				console.log(error);
			});
	},
	// render component를 그릴 때, 데이터만 넘겨주는 것 -> 등록하는 곳에 노출시킨다.
	// scopedSlots -> 하위 컴포넌트의 데이터에 접근할 수 있도록 하는 것
	render() {
		return this.$scopedSlots.default({
			response: this.response,
			loading: this.loading,
		});
	},
};
</script>
