// 导入定义验证规则的包
const joi = require('@hapi/joi')

// 定义用户名和密码的验证规则
const username = joi.string().alphanum().min(1).max(100).required()
const password = joi.string().required()
// const password = joi.string().pattern(/^[\S]{6,12}$/).required().messages({
//   "string.min": "Must have at least 8 characters",
//   "object.regex": "Must have at least 8 characters",
//   "string.pattern.base": "enter your custom error here..."
// })

// 定义 id, nickname, email 的验证规则
const id = joi.number().integer().min(1).required()
const nickname = joi.string().required()
const user_email = joi.string().email().required()

// 定义验证 avatar 头像的验证规则
const avatar = joi.string().dataUri().required()

// 定义验证注册和登录表单数据的规则对象
exports.reg_login_schema = {
  body: {
    username,
    password,
  },
}

// 更新用户基本信息
exports.update_userinfo_schema = {
  body: {
    id,
    nickname,
    email: user_email,
  },
}

// 更新密码
exports.update_password_schema = {
  body: {
    oldPwd: password,
    newPwd: joi.not(joi.ref('oldPwd')).concat(password),
  },
}

// 更新头像
exports.update_avatar_schema = {
  body: {
    avatar
  }
}
