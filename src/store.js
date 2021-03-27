import { createStore } from 'vuex';

const store = createStore({
    state: {
        colors: ['red', 'yellow', 'green'],
        nextColor: null,
        stepRoute: 1,
        currentColorIndex: null,
    },
    mutations: {
        setNextColor(state, currentColor) {
            state.currentColorIndex = state.colors.findIndex(color => color === currentColor);
            if (state.currentColorIndex + state.stepRoute === state.colors.length || state.currentColorIndex + state.stepRoute < 0) {
                state.stepRoute *= -1;
            }
            state.nextColor = state.colors[state.currentColorIndex + state.stepRoute];
        },
    },
});

export default store;