import {combineReducers, createStore} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import {
  cryptoTableReducer,
  newOrderTableReducer,
  sidebarReducer,
  themeReducer,
  customizerReducer,
  pieChartReducer,
  ideasReducer
} from '../redux/reducers/index';

const reducer = combineReducers({
  form: reduxFormReducer, // mounted under "form",
  theme: themeReducer,
  sidebar: sidebarReducer,
  cryptoTable: cryptoTableReducer,
  newOrder: newOrderTableReducer,
  customizer: customizerReducer,
  select:pieChartReducer,
  ideas:ideasReducer
});
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);

export default store;
