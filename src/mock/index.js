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

var searchListObj = {
  "list|2-10": [{
    'id|+1': 1001,
    'name': '@cname',
    'img': '@image',
    'bigImg': '@image',
    'title': '@ctitle(10, 20)',
    'info': '@cparagraph',
    'count': '@integer(1, 30)',
    'price': '@integer(60, 300)'
  }]
}

Mock.mock('/search', 'post', dataObj);
Mock.mock('/shoplist', 'post', searchListObj);