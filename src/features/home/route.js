import {
  DefaultPage,
} from './';

export default {
  path: '/',
  name: 'Home',
  childRoutes: [
    { path: 'dashboard',
      name: 'Dashboard',
      component: DefaultPage,
      isIndex: true,
    },
  ],
};
