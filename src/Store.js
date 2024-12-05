import { configureStore, createSlice } from "@reduxjs/toolkit";

// Create a slice of state
const counterSlice = createSlice({
    name: "counter",
    initialState: { count: 0 },
    reducers: {
        increaseCount: (state) => {
            state.count += 1;
        },
        decreaseCount: (state) => {
            if (state.count > 0) state.count -= 1;
        },
        resetCount: (state) => {
            state.count = 0;
        },
    },
});

// Export actions for dispatching
export const { increaseCount, decreaseCount, resetCount } = counterSlice.actions;

// Create and export the store
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer, // Combine the counter reducer
    },
    
});

export default store;
