import Image from "next/image"
import { FC } from "react"
import XH2 from "@/components/Atoms/XH2"
import Link from "next/link"

type ImageType = {
    label: string,
    attributes?: any
}

type ItemInfoType = {
    id: string,
    name: string,
    title: string,
    author: string,
    images: ImageType[],
}

type CardType = {
    info: ItemInfoType
}

const Card: FC<CardType> = ({info}) => {
    return (
        <Link href={`/podcast/${info.id}`}>
            <div>
                <Image src={info.images[2].label} width={200} height={200} alt={info.name}/>
                <XH2 title={info.name}/>
                <p>{info.author}</p>
            </div>
        </Link>
    )
}

export default Card