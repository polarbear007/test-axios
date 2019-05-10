// 使用 axios 发送get 请求
let axios = require('axios');

// axios.get(url)
axios.get('http://localhost:8081/stu')
 // 成功时的回调
 .then(function(response){
	 console.log('成功请求');
	 console.log(response.data);
	 console.log("******************");
 })
 // 失败时的回调
 .catch(function(error){
	 console.log('失败请求');
	 console.log(error.response.data);
	  console.log("******************");
 })
 // 不管成功还是失败，都会回调的
 .then(function(){
	 console.log('不管成功还是失败，都会回调');
	  console.log("=========================");
 });