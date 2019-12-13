import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
// const baseURL = 'https://proyecto-backend.cfapps.io';
const baseURL = 'http://localhost:8181';
axios.defaults.baseURL = baseURL;
Vue.use(VueAxios, axios);
