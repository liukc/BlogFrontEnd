<template>
  <div>
    <app--header></app--header>
    <div class="container-fluid row">
      <div class="col-1"></div>
      <div class="col-7">
        <router-view></router-view>
        <div class="mt-4">
          <router-view name="articles"></router-view>
          <router-view name="pagination"></router-view>
          <router-view name="editor"></router-view>
        </div>
      </div>
      <div class="col-3 mt-4">
        <router-view name="right-items"></router-view>
        <router-view name="editorItems"></router-view>
      </div>
      <div class="col-1"></div>
    </div>
    <div class="container">

    </div>
    <app--footer></app--footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    'app-Header': Header,
    'app-Footer': Footer
  }
}
</script>

<style>
.layout{
  width: 100%;
}
</style>
