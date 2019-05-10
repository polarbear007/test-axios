// 发送 put 请求
let axios = require('axios');

axios.put('http://localhost:8081/stu', {
	sid: 5,
	sname: 'jerry',
	age: 14
}).then(function(response){
	console.log(response.data);
}).catch(function(error){
	console.log(error.response.data);
})