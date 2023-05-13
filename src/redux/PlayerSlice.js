import { createSlice } from '@reduxjs/toolkit';

const cstm = {
  "id": "88yO3-aL",
  "name": "Ainak",
  "type": "",
  "album": {
    "id": "38409733",
    "name": "Ainak",
    "url": "https://www.jiosaavn.com/album/ainak/Tc51EunlBPs_"
  },
  "year": "2022",
  "releaseDate": "2022-09-26",
  "duration": "178",
  "label": "Red Leaf Music",
  "primaryArtists": "Gulab Sidhu, Sukh Lotey",
  "primaryArtistsId": "760193, 5418853",
  "featuredArtists": "",
  "featuredArtistsId": "",
  "explicitContent": 0,
  "playCount": "3173285",
  "language": "punjabi",
  "hasLyrics": "false",
  "url": "https://www.jiosaavn.com/song/ainak/SFASfkcdVn8",
  "copyright": "℗ 2022 Red leaf music",
  "image": [
    {
      "quality": "50x50",
      "link": "https://c.saavncdn.com/051/Ainak-Punjabi-2022-20220921132620-50x50.jpg"
    },
    {
      "quality": "150x150",
      "link": "https://c.saavncdn.com/051/Ainak-Punjabi-2022-20220921132620-150x150.jpg"
    },
    {
      "quality": "500x500",
      "link": "https://c.saavncdn.com/051/Ainak-Punjabi-2022-20220921132620-500x500.jpg"
    }
  ],
  "downloadUrl": [
    {
      "quality": "12kbps",
      "link": "https://aac.saavncdn.com/051/5a7f1914048d13163d0d4e2bcdff3e77_12.mp4"
    },
    {
      "quality": "48kbps",
      "link": "https://aac.saavncdn.com/051/5a7f1914048d13163d0d4e2bcdff3e77_48.mp4"
    },
    {
      "quality": "96kbps",
      "link": "https://aac.saavncdn.com/051/5a7f1914048d13163d0d4e2bcdff3e77_96.mp4"
    },
    {
      "quality": "160kbps",
      "link": "https://aac.saavncdn.com/051/5a7f1914048d13163d0d4e2bcdff3e77_160.mp4"
    },
    {
      "quality": "320kbps",
      "link": "https://aac.saavncdn.com/051/5a7f1914048d13163d0d4e2bcdff3e77_320.mp4"
    }
  ]
}

// Define the extra reducer with an initial state
const PlayerSlice = createSlice({
  name: 'PlayerSlice',
  initialState: { data: cstm, isLoading: false, error: null },
  reducers: {
    src(state, action) {
        state.data = action.payload
    }
  },
});

export const {src} = PlayerSlice.actions
export default PlayerSlice.reducer;
