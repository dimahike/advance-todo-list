import { RootState } from "../store.ts";

export const isLoginSelector = (state: RootState) => state.auth.isLoggedIn;
