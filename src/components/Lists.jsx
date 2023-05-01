import { useEffect, useState } from "react"

const Lists = () => {

    const [data, setData] = useState('')

    useEffect(() => {
        getLists()
    }, [])

    const getLists = async () => {
        const res = await fetch('https://saavn.me/modules?language=hindi,english')
        const data = await res.json()
        setData(data)
    }

    console.log(data.data)

    return (
        <section className="py-4">
            <div className="flex justify-center items-center">
                {data.data?.charts.slice(0, 6).map((chart) => {
                    return (
                        <p className="p-2">
                            <h2 className="text-xl">{chart.title.slice(0, 20)}</h2>
                            <img src={chart.image[2].link} alt={chart.title} />
                        </p>
                    )
                })}
            </div>
            <div className="flex justify-center items-center">
                {data.data?.albums.slice(0, 6).map((chart) => {
                    return (
                        <p className="p-2">
                            <h2 className="text-xl">{chart.name.split(" ").slice(0, 3).join(" ")}</h2>
                            <img src={chart.image[2].link} alt={chart.title} />
                        </p>
                    )
                })}
            </div>
        </section>
    )
}

export default Lists