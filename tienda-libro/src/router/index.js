import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import BookCatalog from '../views/BookCatalog.vue';
import BookDetails from '../views/BookDetails.vue';
import BookReviews from '../views/BookReviews.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/catalog',
    name: 'BookCatalog',
    component: BookCatalog,
    alias: '/books'
  },
  {
    path: '/catalog/:id',
    name: 'BookDetails',
    component: BookDetails,
    children: [
      {
        path: 'reviews',
        name: 'BookReviews',
        component: BookReviews
      }
    ]
  },
  {
    path: '/books',
    redirect: '/catalog'
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

