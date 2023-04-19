import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uresId: null,
  name: null,
  stateChange: null,
};

export const authSlice = createSlice({
  // Ім'я слайсу
  name: "auth",
  // Початковий стан редюсера слайсу
  initialState: initialState,
  // Об'єкт редюсерів
  reducers: {
    updateUserProfile: (state, action) => ({
      ...state,
      userId: action.payload.uresId,
      name: action.payload.name,
    }),
    authStateChange: (state, action) => ({
      ...state,
      stateChange: action.payload.stateChange,
    }),
  },
});
// Генератори екшенів
// const { updateUserProfile } = authSlice.actions;
// Редюсер слайсу
// const authReducer = authSlice.reducer;

console.log("authSlice: ", JSON.stringify(authSlice, null, 2));

/* 
Функція createSlice() це надбудова над createAction() та createReducer(), яка приймає параметри налаштувань, створює і повертає типи екшенів, генератори екшенів та редюсер.

Властивість name визначає ім'я слайсу, яке додаватиметься під час створення екшенів, як приставка до імен редюсерів, оголошених у властивості reducers. Так ми отримаємо екшени з типами tasks/addTask, tasks/deleteTask та tasks/toggleCompleted.

Екшени це події, які можуть статися в додатку, це об'єкти, які передають дані з компонентів у стор8

Reduser це функція, яка приймає поточний state та екшен як аргументи і повертає новий state
Отримує state та action (type тип екшена, payload - дані які приходять у відповіді від сервера)
*/
