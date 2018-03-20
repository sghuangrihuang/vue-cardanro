<template>
  <div class="editAvatar">
    <img :src="avatar" alt="" @click="setAvatar" style="width: 100%;">
    <input type="file" ref='inputFile' name='file' 
    accept="image/gif,image/jpeg,image/jpg,image/png"
    style="display: none;" @change="changeImage($event)" />
    <span @click="editAvatar">更换头像</span>
  </div>
</template>

<script>
import api from '@/assets/js/fetch'

export default {
  data () {
    return {
      avatar: 'https://dummyimage.com/88x31',
    }
  },
  methods: {
    // 触发input
    setAvatar() {
      this.$refs.inputFile.click();
    },
    // 替换图片
    changeImage(e) {
      let file = e.target.files[0]
      let reader = new FileReader() //采用FileReader对象把图片转为base64
      let that = this
      reader.readAsDataURL(file)
      reader.onload = function(e) {
        that.avatar = this.result
      }
    },
    // 与后台对接操作，完成修改功能
    editAvatar() {
      let $inputFile = this.$refs.inputFile;
      if ( $inputFile.files.length <= 0 ) {
        return;
      }
      // 采用FormData对象进行存储上传文件信息
      let imageData = new FormData()
      imageData.append('avatar', $inputFile.files[0])
      // 设置请求文件头
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
      // 接口调用方式
      api.post('/api/users/editUsersAvatar', imageData, config)
        .then((res)=> {
          console.log(res);
          // 后续操作，vuex 存储数据 给用户页面的头像替换
        })
    }
  },
}
</script>

<style>

</style>
