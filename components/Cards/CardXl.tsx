import { FC } from "react"
import Image from "next/image"
import Link from "next/link"
import { redirect, useParams } from "next/navigation"
import XH2 from "@/components/Atoms/XH2"
import Loading from '@/components/Loading';
import { useGetPodcasts } from "@/lib/hooks/useGetPodcasts"
import { CardXlImageWrapper } from "./style"
import { motion } from 'framer-motion';
import ROUTES from "@/lib/constants/routes.ctte"

type CardXlType = {}

const DEFAULT_INFO = {
    id: '',
    name: '',
    title: '',
    author: '',
    images: [],
    summary: ''
}

const CardXl: FC<CardXlType> = () => {
    const params: any = useParams()
    const { data, loading, error } = useGetPodcasts()
    const { podcastId } = params
    const currentPodcast = data && data.find((en: any) => en.id.attributes["im:id"] === podcastId)

    if (data && !currentPodcast) {
        redirect(ROUTES.router.podcast)
    }

    const info = currentPodcast ? {
        id: currentPodcast?.id?.attributes["im:id"],
        name: currentPodcast["im:name"]?.label,
        title: currentPodcast?.title?.label,
        author: currentPodcast["im:artist"]?.label,
        images: currentPodcast["im:image"],
        summary: currentPodcast?.summary?.label,
    } : DEFAULT_INFO

    {
        if (loading) return <Loading loading={loading} error={error} />
    }

    return (
        <>
            {
                data && currentPodcast ?
                    <Link href={`${ROUTES.router.podcast}/${info.id}`}>
                        <CardXlImageWrapper>
                            <motion.div
                                className="product-card"
                                initial={{ opacity: 0.2, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: 10 * 0.08 }}
                            >
                                <Image src={info.images[2].label} width={200} height={200} alt={info.name} />
                            </motion.div>
                            <hr />
                            <XH2 title={info.name} />
                            <p>{info.author}</p>
                            <hr />
                            <div className="description">
                                <h3>Description</h3>
                                <p>{info.summary}</p>
                            </div>
                        </CardXlImageWrapper>
                    </Link>
                    : null
            }
        </>
    )
}

export default CardXl