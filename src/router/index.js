import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Articles from '../components/Articles'
import RightItems from '../components/Right-items'
import NoteAndBug from '../views/NoteAndBug'
import Pagination from '../components/Pagination'
import LifeTea from '../views/LifeTea'
import ProgramFiary from '../views/ProgramDiary'
import EditBlog from '../views/EditBlog'
import Editor from '../components/Editor'
import EditorItems from '../components/Editor-items'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: Home,
        'articles': Articles,
        'right-items': RightItems
      }
    },
    {
      path: '/noteAndBug',
      name: 'NoteAndBug',
      components: {
        default: NoteAndBug,
        'articles': Articles,
        'right-items': RightItems,
        'pagination': Pagination
      }
    },
    {
      path: '/programFiary',
      name: 'ProgramFiary',
      components: {
        default: ProgramFiary,
        'articles': Articles,
        'right-items': RightItems,
        'pagination': Pagination
      }
    },
    {
      path: '/lifeTea',
      name: 'LifeTea',
      components: {
        default: LifeTea,
        'articles': Articles,
        'right-items': RightItems,
        'pagination': Pagination
      }
    },
    {
      path: '/editBlog',
      name: 'EditBlog',
      components: {
        default: EditBlog,
        'editor': Editor,
        'editorItems': EditorItems
      }
    }
  ],
  mode: 'history'
})
