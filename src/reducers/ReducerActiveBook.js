import { BOOK_SELECTED } from '../actions/index';

// state is the one this reducer is responsible for
export default function (state = null, action) {
    switch (action.type) {
        case BOOK_SELECTED:
            return action.payload;
    }
    return state;
}
