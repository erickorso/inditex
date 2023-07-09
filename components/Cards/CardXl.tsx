import { FC } from "react"
import Image from "next/image"
import Link from "next/link"
import { redirect, useParams } from "next/navigation"
import XH2 from "@/components/Atoms/XH2"
import Loading from '@/components/Loading';
import { useGetPodcasts } from "@/lib/hooks/useGetPodcasts"

type CardXlType = {}

const DEFAULT_INFO = {
    id: '',
    name: '',
    title: '',
    author: '',
    images: [],
}

const CardXl: FC<CardXlType> = () => {
    const params: any = useParams()
    const { data, loading, error } = useGetPodcasts()
    const { podcastId } = params
    const currentPodcast = data && data.find((en: any) => en.id.attributes["im:id"] === podcastId)

    if (data && !currentPodcast) {
        redirect('/podcast')
    }

    const info = currentPodcast ? {
        id: currentPodcast.id.attributes["im:id"],
        name: currentPodcast["im:name"].label,
        title: currentPodcast.title.label,
        author: currentPodcast["im:artist"].label,
        images: currentPodcast["im:image"],
    } : DEFAULT_INFO

    {
        if (loading) return <Loading loading={loading} error={error} />
    }

    return (
        <>
            {
                data && currentPodcast ?
                    <Link href={`/podcast/${info.id}`}>
                        <div>
                            <Image src={info.images[2].label} width={200} height={200} alt={info.name} />
                            <XH2 title={info.name} />
                            <p>{info.author}</p>
                        </div>
                    </Link>
                    : null
            }
        </>
    )
}

export default CardXl