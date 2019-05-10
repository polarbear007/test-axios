let axios = require('axios');

// 拦截请求
axios.interceptors.request.use(function (config) {
	console.log('请求发送之前，被拦截器拦截了');
	console.log(config);
	// Do something before request is sent
	// 我们可以查看一下 config 对象，得知这个请求的类型
	// 请求的地址，请求头等相关信息
	// 可以根据不同的请求类型，校验其请求信息有没有完整等 
	return config;
}, function (error) {
	// Do something with request error
	// 我们可以在这里统一处理错误请求，处理以后，我们就不需要在请求的时候
	// 添加 .catch(callback) 了
	return Promise.reject(error);
});


axios({
	url: 'http://localhost:8081/stu',
	method: 'get',
	headers: {},
	params: {sid: 2},
	data: {},
	// 设置服务器返回的数据类型
	responseType: 'json',
}).then(function(response){
	console.log(response.data);
}).catch(function(error){
	console.log(error.response.data);
});

