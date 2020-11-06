import { baseRoutes } from "../../../router";

const userLocalStorageName = 'userLogged';

export const registerUserLogged = (user: string) => {
    localStorage.setItem(userLocalStorageName, user);
}

export const getUserLogged = () => {
    return localStorage.getItem(userLocalStorageName);
}

export const unregisterUserLogged = () => {
    localStorage.removeItem(userLocalStorageName);
    window.location.href = baseRoutes.root;
}
