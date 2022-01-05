import Vue from 'vue';
import App from './App.vue';
import ChartPlugin from './plugins/ChartPlugin';

Vue.config.productionTip = false;
Vue.use(ChartPlugin);

new Vue({
	render: (h) => h(App),
	// 1
	// render: function (createElement) {
	// 	return createElement(App);
	// },
	// // 2 createElement => hyper script - virtual dom
	// render: function (h) {
	// 	return h(App);
	// },
	// // 3
	// render: (h) => {
	// 	return h(App);
	// }
	// // 4
	// render: h => h(App)
}).$mount('#app');
