import Mock from 'mockjs'


var dataObj = {
  "searchlist|6-100": [{
    'id|+1': 1,
    'name': '@cname',
    'img': '@image',
    'title': '@ctitle',
    'info': '@cparagraph'
  }]
}

Mock.mock('/search', 'post', dataObj);