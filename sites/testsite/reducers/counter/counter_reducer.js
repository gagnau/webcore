import * as types from './counter_types';

const initial = { count: 0 };

export default function awards(state = initial, action) {
    switch (action.type) {
        case types.INCREMENT:
            return { count: state.count + 1 };
        case types.DECREMENT:
            return { count: state.count - 1 };
        default:
            return state;
    }
}
