"use client"
import { useParams } from 'next/navigation'

const Podcast = () => {
    const params = useParams()
    console.log({ params });

    return (
        <div>Podcast</div>
    )
}

export default Podcast