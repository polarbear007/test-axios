// 使用 axios 发送post 请求,同时携带参数
let axios = require('axios');

// 使用这种方式发送的参数是 json 格式，后台需要添加 @requestbody
// axios.post(url, data, config)
axios.post('http://localhost:8081/stu', {
	sid: 4,
	sname: 'jerry',
	age: 13
}).then(function(response){
	console.log(response.data);
}).catch(function(error){
	console.log(error.response.data);
})
