import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

export default function configureStore(api) {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    {},
    applyMiddleware(thunk, sagaMiddleware)
  );

  sagaMiddleware.run(rootSaga, api);
  
  return store;
}
