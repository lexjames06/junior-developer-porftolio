const darkMode = (state = phoneDarkMode, action) => {
    switch (action.type) {
        case 'TOGGLEDARKMODE':
            return !state;
        default:
            return state;
    };
};

const phoneDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? true : false;

export default darkMode;