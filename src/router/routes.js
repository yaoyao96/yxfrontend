
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'teacher',
        name: 'teacher',
        component: () => import('pages/Teacher.vue')
      },
      { path: 'student', name: 'student', component: () => import('pages/Student.vue') },
      { path: 'income', component: () => import('pages/Income.vue') },
      { path: 'form', component: () => import('pages/Form.vue') },
      { path: 'teacher/:id', name: 'teacherdetail', component: () => import('pages/TeacherDetail.vue') },
      { path: 'student/:id', name: 'studentdetail', component: () => import('pages/StudentDetail.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
