import Mock from 'mockjs'


var searchListObj = {
  "searchlist|6-100": [{
    'id|+1': 1,
    'name': '@cname',
    'img': '@image',
    'title': '@ctitle',
    'info': '@cparagraph'
  }]
}

var shopListObj = {
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

var HomeListObj = {
  // 分类
  "list|8": [{
    'id|+1': 1,
    'name': '@cname',
    'img': '@image',
    'title': '@ctitle(10, 20)',
    'childrens|1-4': [{
      'id|+1': 101,
      'name': '@cname',
      'img': '@image',
      'bigImg': '@image',
      'title': '@ctitle(10, 20)',
      'info': '@cparagraph',
      'count': '@integer(1, 30)',
      'price': '@integer(60, 300)',
      'score': '@float(0, 4, 1, 2)',
      'users|1-10': [{
        'id|+1': 1001,
        'name': '@cname',
        'avatar': '@image',
        'score': '@float(0, 4, 1, 2)',
        'comment': '@cparagraph',
        'commentImg|0-3': ['@image'],
        'time': '@date()'
      }]
    }]
  }]
}

Mock.mock('/search', 'post', searchListObj);
Mock.mock('/shoplist', 'post', shopListObj);
Mock.mock('/homelist', 'post', HomeListObj);