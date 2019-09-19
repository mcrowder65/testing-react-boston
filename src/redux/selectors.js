export const getTheme = state => state.theme;
export const getPrimaryColor = state => getTheme(state).palette.primary.main;
