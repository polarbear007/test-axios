let axios = require('axios');

// 跟 get 请求一样，我们可以有三种方式传参
//   1、 通过 params 
//   2、 通过 http://localhost:8081/stu?sid=5
//   3、 通过 http://localhost:8081/stu/5
axios.delete('http://localhost:8081/stu', {
	params: {sid: 5}
}).then(function(response){
	console.log(response.data);
	console.log('*****************');
}).catch(function(error){
	console.log(error.response.data);
	console.log('*****************');
});

axios.delete('http://localhost:8081/stu?sid=5')
.then(function(response){
	console.log(response.data);
	console.log('*****************');
}).catch(function(error){
	console.log(error.response.data);
	console.log('*****************');
});

axios.delete('http://localhost:8081/stu/5')
.then(function(response){
	console.log(response.data);
	console.log('*****************');
}).catch(function(error){
	console.log(error.response.data);
	console.log('*****************');
});