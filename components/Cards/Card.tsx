import { FC } from "react"
import Link from "next/link"
import {
    CardImage,
    CardImageWrapper,
    CardSubtitle,
    CardTitle,
    CardWrapper
} from "./style"

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

const Card: FC<CardType> = ({ info }) => {
    return (
        <Link href={`/podcast/${info.id}`}>
            <CardWrapper>
                <CardImageWrapper>
                    <CardImage src={info.images[2].label} width={200} height={200} alt={info.name} priority={true} />
                </CardImageWrapper>
                <CardTitle title={info.name} />
                <CardSubtitle>{info.author}</CardSubtitle>
            </CardWrapper>
        </Link>
    )
}

export default Card