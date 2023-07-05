"use client"
import { useParams } from 'next/navigation'

const ChapterDetail = () => {
    const params = useParams()
    console.log({ params });

    return (
        <div>ChapterDetail</div>
    )
}

export default ChapterDetail