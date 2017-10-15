const INITIAL_STATE = {
    tip: "Welcome to Marketing Monster"
};

const WelcomeReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export { WelcomeReducer };