import { configureStore } from '@reduxjs/toolkit'

import SongDetailSlice from './SongDetailSlice'
import SongsFetchSlice from './SongsFetchSlice'
import AlbumsFetchSlice from './AlbumsFetchSlice'
import PlayerSlice from './PlayerSlice'
import searchSlice from './Search'

const store = configureStore({ reducer: {
    SongDetail : SongDetailSlice,
    Songs : SongsFetchSlice,
    Albums : AlbumsFetchSlice,
    Player : PlayerSlice,
    Search : searchSlice,
} })

export default store