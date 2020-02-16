const menuVisibility = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLEMENUVISIBILITY':
            return !state;
        default:
            return state;
    };
};

export default menuVisibility;