import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";

// використовуємо combineReducer який об'єднує всі редюсери в один
const rootReduser = combineReducers({
  // authSlice.name це ім'я редюсера
  // authSlice.reduce його значення
  [authSlice.name]: authSlice.reducer,
});

// створюємо store
export const store = configureStore({
  reducer: rootReduser,
});

/* 
Підключення Redux ___________________
https://redux-toolkit.js.org/tutorials/quick-start

Інстанюємо модуль
npm install @reduxjs/toolkit react-redux

Створюємо папку redux в корені проекту

Створюємо store у файлі store.js

В app.js  обгортаємо NavigationContainer у Provider і передаємо пропсом store

В папці Auth створюємо стани  (редюсери і екшени) у вигляді слайса для цього створюємо файл authSlice.js в якому описуємо слайс

Імпортуємо authSlice в store.js

*/
