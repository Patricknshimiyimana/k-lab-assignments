import { configureStore } from '@reduxjs/toolkit';
import toDoReducer from '../features/Reducers/todoSlider';

export const store = configureStore({
  reducer: {
    // allows you create n number of sliders
    toDo: toDoReducer,
 },
})