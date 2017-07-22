//
// Bootstrap JS libraries
//
import './bootstrap';

//
// Vue component setup
//
import PopalQuizMain from './components/PopalQuizMain.vue';

//
// Initialise Vue app
//
const app = new Vue({
	el: '#popalQuizApp',

	components: {
		PopalQuizMain
	}
});
