let axios = require('axios');

axios({
	url: 'http://localhost:8081/stu',
	method: 'get',
	headers: {},
	// 使用 url 路径传递参数
	// xxxx?sid=2
	// 所有的请求都可以使用这种方式传递参数
	params: {sid: 2},
	// 当请求方式为 post / put 的时候才可以使用
	// 使用请求体传递参数, 当我们使用 data 携带参数，
	// 服务器需要使用 @requestBody 去接收
	data: {},
	// 设置服务器返回的数据类型
	responseType: 'json',
}).then(function(response){
	console.log(response.data);
}).catch(function(error){
	console.log(error.response.data);
});

