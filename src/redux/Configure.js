import { configureStore } from '@reduxjs/toolkit'
import SongDetailSlice from './SongDetailSlice'
import SongsFetchSlice from './SongsFetchSlice'
import ModulesFetchSlice from './modulesFetchSlice'
import PlayerSlice from './PlayerSlice'
import searchSlice from './SearchSlice'
import albumDetailSlice from './albumDetailSlice'
import PlaylistDetailSlice from './PlaylistDetailSlice'
import HomeFetchSlice from './HomeFetchSlice'

const store = configureStore({ reducer: {
    PlaylistDetail : PlaylistDetailSlice,
    AlbumDetail : albumDetailSlice,
    SongDetail : SongDetailSlice,
    Songs : SongsFetchSlice,
    Home : HomeFetchSlice,
    Modules : ModulesFetchSlice,
    Player : PlayerSlice,
    Search : searchSlice,
} })

export default store