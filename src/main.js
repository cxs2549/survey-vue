import Vue from "vue"
import App from "./App.vue"
import store from "./store"
import "./assets/css/main.css"
import "./assets/css/app.scss"
import * as svgicon from "vue-svgicon"
import SvgIcon from "./assets/icons/SvgIcon.vue"
import SVGSprite from "./assets/icons/SVGSprite"
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';

Vue.config.productionTip = false

Vue.component("svg-icon", SvgIcon)
Vue.component("svg-sprite", SVGSprite)
Vue.component('base-card', BaseCard);
Vue.component('base-button', BaseButton);


Vue.use(svgicon, {
    classPrefix: "AppIcon-",
})

new Vue({
    store,
    render: (h) => h(App),
}).$mount("#app")
