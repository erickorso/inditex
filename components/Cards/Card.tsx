import { FC } from "react"
import Link from "next/link"
import { motion } from 'framer-motion';
import {
    CardImage,
    CardImageWrapper,
    CardSubtitle,
    CardTitle,
    CardWrapper
} from "./style"
import { getRandomNumber } from "@/lib/helpers/functions";

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
            <motion.div
                className="product-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: getRandomNumber() * 0.08 }}
            >
                <CardWrapper>
                    <CardImageWrapper>
                        <CardImage src={info.images[2].label} width={200} height={200} alt={info.name} priority={true} />
                    </CardImageWrapper>
                    <CardTitle title={info.name} />
                    <CardSubtitle>{info.author}</CardSubtitle>
                </CardWrapper>
            </motion.div>
        </Link>
    )
}

export default Card