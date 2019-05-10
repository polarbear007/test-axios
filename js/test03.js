// 使用 axios 发送get 请求,同时携带参数
let axios = require('axios');

// 传递参数有三种形式:
//    1、 通过在 options 里面添加 params 对象
// 	  2、 通过在 url 上面添加   http://localhost:8081/stu?sid=1
//    3、 通过rest 风格的路径参数   http://localhost:8081/stu/1
// axios.get(url, config)
axios.get('http://localhost:8081/stu', {
	params: {sid: 1}
}).then(function(response){
	 // 成功时的回调
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

axios.get('http://localhost:8081/stu?sid=2')
 .then(function(response){
	 // 成功时的回调
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