let axios = require('axios');
// 通过 typeof 我们可以知道 axios 对外暴露的是一个方法对象
console.log(typeof axios);
// 我们看一下这个方法对象本身又有很多的方法属性
// 我们可以直接通过  axios.get()  这种方法调用这些方法 
console.log(axios);