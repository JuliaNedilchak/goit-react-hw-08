export const selectUser = (state) => state.auth.user;
export const selectToken = (state) => state.auth.token;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectisRefreshing = (state) => state.auth.isRefreshing;
export const selectisError = (state) => state.auth.isError;
export const selectIsLoading = (state) => state.auth.isLoading;
