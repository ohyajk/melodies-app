import { configureStore } from '@reduxjs/toolkit'


import SongDetailSlice from './SongDetailSlice'

const store = configureStore({ reducer: {
    SongDetail : SongDetailSlice
} })

export default store