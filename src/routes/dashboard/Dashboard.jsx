import { useState, useEffect } from "react"

export default function Dashboard() {

    const [data, setData] = useState()
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        fetch("https://marketdata.tradermade.com/api/v1/live_crypto_list?api_key=V_KR5sofYEy1Mj6S-NRm")
            .then((response) => response.json())
            .then((data) => setData(data.available_currencies))
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
    }, [])

    console.log(data)
    return (
        <main className="main-dashboard">
            <ul className="ul-dashboard">
                {error && <li>{error}</li>}
                {loading && <li>Loading...</li>}
                {data && Object.keys(data).map((clave) => (
                    <li key={data[clave]} className="li-dashboard">
                        {clave}: {data[clave]}
                    </li>
                ))}
            </ul>
        </main>
    )
}