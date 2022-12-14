const joi = require('@hapi/joi')

// 分别定义 标题、分类Id、内容、发布状态的校验规则
const title = joi.string().required()
const cate_id = joi.string().required()
const content = joi.string().required().allow('')
const state = joi.string().valid('已发布', '草稿').required()
const author_id = joi.string().required()
const introduce = joi.string().required()
const word_count = joi.string().required()
const reading_time = joi.string().required()

// 发布文章
exports.add_article_schema = {
  body: {
    title,
    cate_id,
    content,
    state,
    author_id,
    introduce,
    word_count,
    reading_time
  },
}
