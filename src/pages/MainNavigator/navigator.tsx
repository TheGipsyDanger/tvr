import { Main } from './Main'
import { Initial } from './Initial';
import { CreateCard } from './CreateCard';
// import views here

const views: { [key: string]: any } = {
  Main,
  Initial,
CreateCard,
// add viewsName here
};

export const routes  = Object.keys(views).map((route) => ({
  options: { headerShown: false },
  name: route,
  key: route,
  component: views[route],
}));
