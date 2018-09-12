import {combineReducers, createStore,applyMiddleware} from 'redux';
import {reducer as reduxFormReducer} from 'redux-form';
import thunk from 'redux-thunk';

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
const store = createStore(reducer,applyMiddleware(thunk))

export default store;
