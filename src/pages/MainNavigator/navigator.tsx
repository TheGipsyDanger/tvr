import {Main} from './Main';
import {Initial} from './Initial';
import {CreateCard} from './CreateCard';
import {Test} from './Test';
import { CreateCardFinish } from './CreateCardFinish';
import { SelectedCard } from './SelectedCard';
// import views here

const views: {[key: string]: any} = {
  Main,
  Initial,
  CreateCard,
  Test,
  CreateCardFinish,
SelectedCard,
// add viewsName here
};

export const routes = Object.keys(views).map(route => ({
  options: {headerShown: false},
  name: route,
  key: route,
  component: views[route],
}));
