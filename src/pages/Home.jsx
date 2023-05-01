import { useState } from "react"
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchData } from '../redux/SongDetailSlice'

const Home = () => {

  const [query, setQuery] = useState('')
  const [data, setData] = useState('')
  const dispatch = useDispatch()

  const search = async() => {
    const res = await fetch(`https://saavn.me/search/all?query=${query}`)
    const data = await res.json()
    setData(data.data.songs.results)
  }

  console.log(data)

  return (
    <section className="flex flex-col justify-start items-center w-full h-full p-4">
      <form onSubmit={(e) => {e.preventDefault(); search()}} className="flex flex-col gap-4 items-center">
        <h2 className="text-center text-2xl">Search songs here...</h2>
        <input onChange={(e) => setQuery(e.target.value)} type="text" className="border border-white/50 outline-none py-2 px-4 w-[600px] rounded-3xl" required />
        <input className="bg-[#25a56a] w-[200px] py-2 px-4 rounded-3xl hover:bg-[#25a56a]/50 cursor-pointer" type="submit" value="Search" />
      </form>
      <div className="grid grid-cols-3 overflow-y-scroll scrollbar scrollbar-thumb-[#25a56a]/70 scrollbar-track-[#25a56a]/30 w-full">
        {
          data ? data.map((d) => {
            return(
              <Link to='/songdetails' onClick={() => dispatch(fetchData(d.url))} >
                {d.title}
                <img className='h-[200px]' src={d.image[2].link} alt={d.title} />
              </Link>
            )
          }) : 'Noting to show...'
        }
        
      </div>
    </section>
  )
}

export default Home
