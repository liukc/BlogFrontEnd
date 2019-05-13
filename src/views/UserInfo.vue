<template>
<div class="backgroud row">
  <div class="col-sm-4 mt-4 text-center">
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="../assets/images/1.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">姓名</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul class="list-group">
        <router-link tag="li" class="list-group-item list-group-item-action" to="/userInfo/information">个人信息</router-link>
        <router-link tag="li" class="list-group-item list-group-item-action" to="/userInfo/BlogManage">博客管理</router-link>
        <router-link tag="li" class="list-group-item list-group-item-action" to="/userInfo/CommitManage">评论管理</router-link>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">注销</a>
        <a href="#" class="card-link">返回</a>
      </div>
    </div>
  </div>
  <div class="col-sm-7">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
export default {
  name: 'UserInfo',
  data () {
    return {
      article: 'Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney\'s photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven\'t heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.\n' +
        '\n' +
        '@mdo\n' +
        'Veniam marfa mustache skateboard, adipisicing fugiat velit pitchfork beard. Freegan beard aliqua cupidatat mcsweeney\'s vero. Cupidatat four loko nisi, ea helvetica nulla carles. Tattooed cosby sweater food truck, mcsweeney\'s quis non freegan vinyl. Lo-fi wes anderson +1 sartorial. Carles non aesthetic exercitation quis gentrify. Brooklyn adipisicing craft beer vice keytar deserunt.\n' +
        '\n' +
        'one\n' +
        'Occaecat commodo aliqua delectus. Fap craft beer deserunt skateboard ea. Lomo bicycle rights adipisicing banh mi, velit ea sunt next level locavore single-origin coffee in magna veniam. High life id vinyl, echo park consequat quis aliquip banh mi pitchfork. Vero VHS est adipisicing. Consectetur nisi DIY minim messenger bag. Cred ex in, sustainable delectus consectetur fanny pack iphone.\n' +
        '\n' +
        'two\n' +
        'In incididunt echo park, officia deserunt mcsweeney\'s proident master cleanse thundercats sapiente veniam. Excepteur VHS elit, proident shoreditch +1 biodiesel laborum craft beer. Single-origin coffee wayfarers irure four loko, cupidatat terry richardson master cleanse. Assumenda you probably haven\'t heard of them art party fanny pack, tattooed nulla cardigan tempor ad. Proident wolf nesciunt sartorial keffiyeh eu banh mi sustainable. Elit wolf voluptate, lo-fi ea portland before they sold out four loko. Locavore enim nostrud mlkshk brooklyn nesciunt.\n' +
        '\n' +
        'three\n' +
        'Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney\'s photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven\'t heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.\n' +
        '\n' +
        'Keytar twee blog, culpa messenger bag marfa whatever delectus food truck. Sapiente synth id assumenda. Locavore sed helvetica cliche irony, thundercats you probably haven\'t heard of them consequat hoodie gluten-free lo-fi fap aliquip. Labore elit placeat before they sold out, terry richardson proident brunch nesciunt quis cosby sweater pariatur keffiyeh ut helvetica artisan. Cardigan craft beer seitan readymade velit. VHS chambray laboris tempor veniam. Anim mollit minim commodo ullamco thundercats.'
    }
  }
}
</script>

<style scoped>
  .backgroud{
    background-image: url("../assets/images/9.jpg");
    width: 1565px;
    height:auto;
  }
</style>
