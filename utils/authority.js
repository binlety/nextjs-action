//缓存以及权限相关

//获取token
export function getToken() {
  return localStorage.getItem('front-active-token') || '';
  // return localStorage.getItem('zjf-erp-token') || '';
}

//设置token
export function setToken(token) {
  localStorage.setItem('front-active-token', token);
}

//获取当前用户
export function getCurrentUser() {
  return JSON.parse(localStorage.getItem('zjf-erp-current-user')) || {};
}

//设置当前用户
export function setCurrentUser(account) {
  localStorage.setItem('zjf-erp-current-user', JSON.stringify(account));
}


//登出，清除所有用户信息
export function removeAll() {
 
}

/**
* @description js原生设置cookie
* @param {String} name 给你要设置的cookie起个名字（key）
* @param {String} value cookie的具体内容(value)
* @param {String} expiredays 设置cookie的过期时间，单位：天
*/

export function setCookie(name, value, expiredays=1) {
  const t=new Date();
  t.setDate(t.getDate() + expiredays);
  t.setHours(0);
  t.setMinutes(0);
  t.setSeconds(0);
  document.cookie = name + '=' + escape(value)+ ';expires=' + t.toGMTString();
}

/**
* @description js原生获取cookie方法
* @param {String} name 你要获取的cookie名
*/
export function getCookie(name) {
　　if (document.cookie.length > 0) {
    const start = document.cookie.indexOf(name + '=');
　　　if (start !== -1) {
　　　　return true
　　　}
       return false;
　　}
　　return false;
}
