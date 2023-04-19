// функції для реєстрації і логінізації юзера, ці функції будуть пов'язані із store
// import { createAsyncThunk } from "@reduxjs/toolkit";
import app from "../../firebase/config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { authSlice } from "./authSlice";
const auth = getAuth(app);

// Registration
export const authSignUp =
  ({ email, password, name }) =>
  // console.log("email, password, nickName: ", email, password, name);

  async (dispatch, getState) => {
    try {
      // 1. Реєструємо користувача по email і password
      await createUserWithEmailAndPassword(auth, email, password);

      // 2. після реєстрації додаємо nickName у юзера (відправляємо в базу даних)
      await updateProfile(auth.currentUser, {
        displayName: name,
      });

      // 3. робим запит за актуальними даними юзера
      const user = await auth.currentUser;
      console.log("user: ", JSON.stringify(user, null, 2));

      //  4. Викликаємо dispatch в якому викликаємо action і прокидуємо в нього об'єкт який приходить, берем з нього uid та name і обновлюємо state
      dispatch(
        authSlice.actions.updateUserProfile({
          userId: user.uid,
          name: user.name,
        })
      );

      console.log(user);
    } catch (error) {
      console.log("authSignIn Error: ", error.message);
    }
  };

//  Login
// через портал dispatch ми отримаємо доступ до цієї функції в яку передамо об'єк кандидата
export const authSignIn =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);

      // console.log(JSON.stringify(user, null, 2));

      // console.log("user: ", user.user);
    } catch (error) {
      console.log("authSignIn Error: ", error.message);
    }
  };

// LogOut
export const authSignOut = () => async (dispatch, getState) => {};

// Check
export const authStatus =
  ({ email, password }) =>
  async (dispatch, getState) => {
    const user = await onAuthStateChanged(auth, (user) =>
      console.log("user: ", user)
    );
  };

/* за рахунок того що ми працюємо із redux-toolkit ми можемо не встановлювати middelwares
  які дозвлять працювати із асинхронними запитами. 
  У toolkit є athinc thunk він автоматично оприділяє це об'єкт чи функція.
  Якщо це функція він віддає dispatch i getState і продовжує виконуватись.
  Якщо це об'єкт то він перенаправить його в action і виконається виконання якихось дій */

/* Для того щоб сповістити сторінку про те, що в інтерфейсі відбулася якась подія, необхідно відправити екшен. Для цього у бібліотеці React Redux є хук useDispatch(), який повертає посилання на функцію надсилання екшенів dispatch з об'єкта створеного нами раніше стора Redux. */
