import * as authTypes from "./types";

function reducer(state, action) {
    switch (action.type) {
        case authTypes.LOG_IN:
            return true;
        case authTypes.LOG_OUT:
            return false;
            default: 
            throw new Error();
    }
}

export default reducer;