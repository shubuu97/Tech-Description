import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import Selectionreducer from './SelectionReducer';

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: Selectionreducer
});
