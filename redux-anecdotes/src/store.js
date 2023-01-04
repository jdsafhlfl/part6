import { configureStore } from '@reduxjs/toolkit'

import {reducer} from './reducers/anecdoteReducer'

const store = configureStore({
    reducer: {
        AnecdoteReducer: reducer
    }
})

export default store