import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Articles from '../components/Articles'
import RightItems from '../components/Right-items'
import NoteAndBug from '../views/NoteAndBug'
import Pagination from '../components/Pagination'
import LifeTea from '../views/LifeTea'
import ProgramDiary from '../views/ProgramDiary'
import EditBlog from '../views/EditBlog'
import Editor from '../components/Editor'
import EditorItems from '../components/Editor-items'
import BackgroudImage from '../components/BackgroudImage'
import Login from '../views/Login'
import Register from '../views/Register'
import SearchPage from '../views/SearchPage'
import UserInfo from '../views/UserInfo'
import Information from '../components/UserInformation/Information'
import BlogManage from '../components/UserInformation/BlogManage'
import CommitManage from '../components/UserInformation/CommitManage'
import AlterInformation from '../components/UserInformation/AlterInfo'

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
      path: '/noteAndBug/:title',
      name: 'NoteAndBug',
      components: {
        default: NoteAndBug,
        'articles': Articles,
        'right-items': RightItems,
        'pagination': Pagination
      }
    },
    {
      path: '/programDiary',
      name: 'ProgramDiary',
      components: {
        default: ProgramDiary,
        'right-items': RightItems,
        'pagination': Pagination
      }
    },
    {
      path: '/searchPage',
      name: 'searchPage',
      components: {
        default: SearchPage,
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
      path: '/editBlog/:title',
      name: 'EditBlog',
      components: {
        default: EditBlog,
        'editor': Editor,
        'editorItems': EditorItems
      }
    },
    {
      path: '/backgroudImage',
      name: 'BackgroudImage',
      component: BackgroudImage,
      children: [
        {path: '/login', name: 'Login', component: Login},
        {path: '/register', name: 'Register', component: Register}
      ]
    },
    {
      path: '/userInfo',
      name: 'UserInfo',
      component: UserInfo,
      redirect: '/userInfo/information',
      children: [
        {path: '/userInfo/information', name: Information, component: Information},
        {path: '/userInfo/blogManage', name: BlogManage, component: BlogManage},
        {path: '/userInfo/commitManage', name: CommitManage, component: CommitManage},
        {path: '/userInfo/alterInformation', name: AlterInformation, component: AlterInformation}
      ]
    }
  ],
  mode: 'history'
})
