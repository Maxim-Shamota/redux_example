import { createStore } from 'redux';

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'DEC':
            return state + 1;
        case "INC":
            return state - 1;
        case "RES":
            return 0;
        default:
            return state;
    }
}

const dec = () => ({ type: "DEC" });
const inc = () => ({ type: "INC" });
const res = () => ({ type: "RES" });

const store = createStore(reducer);

document.getElementById('inc').addEventListener('click', () => {
    store.dispatch(inc());
});
document.getElementById("dec").addEventListener('click', () => {
    store.dispatch(dec());
});
document.getElementById("res").addEventListener('click', () => {
    store.dispatch(res());
})

const update = () => {
        document.getElementById('counter').textContent = store.getState();
    }

store.subscribe(update);