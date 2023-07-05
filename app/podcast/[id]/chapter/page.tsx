"use client"
import { useParams } from 'next/navigation'

const Chapter = () => {
    const params = useParams()
    console.log({ params });

    return (
        <div>Chapter</div>
    )
}

export default Chapter