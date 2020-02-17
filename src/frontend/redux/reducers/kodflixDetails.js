const kodflixDetailsVisibliity = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLEKODFLIXDETAILS':
            return !state;
        default:
            return state;
    };
};

export default kodflixDetailsVisibliity;