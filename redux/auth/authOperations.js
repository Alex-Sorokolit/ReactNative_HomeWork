// функції для реєстрації і логінізації юзера, ці функції будуть пов'язані із store
import app from "../../firebase/config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
const auth = getAuth(app);

/* за рахунок того що ми працюємо із redux-toolkit ми можемо не встановлювати middelwares
  які дозвлять працювати із асинхронними запитами. 
  У toolkit є athinc thunk він автоматично оприділяє це об'єкт чи функція.
  Якщо це функція він віддає dispatch i getState і продовжує виконуватись.
  Якщо це об'єкт то він перенаправить його в action і виконається виконання якихось дій */

// Registration
export const authSignUp =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log("user: ", user);
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
      const user = await authenticate
        .auth()
        .createUserWithEmailAndPassword(email, password);
      console.log("user: ", user);
    } catch (error) {
      console.log("authSignIn Error: ", error.message);
    }
  };

// LogOut
export const authSignOut = () => async (dispatch, getState) => {};
