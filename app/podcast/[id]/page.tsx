"use client"
import { useParams } from 'next/navigation'

const PodcastDetail = () => {
    const params = useParams()
    console.log({ params });

    return (
        <div>PodcastDetail</div>
    )
}

export default PodcastDetail
