import { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface H1Props {
    size?: string;
    color?: string;
}

const H1Styled = styled.h1<H1Props>`
    font-size: ${(props) => props.size ? props.size + 'px' : '25px'};
    color: ${(props) => props.color ? props.color : '#3675a7'};
    font-weight: bolder;
`

type XH1Type = {
    title: string | ReactNode,
    color?: string,
    size?: string,
}

const XH1: FC<XH1Type> = ({ title, color, size }) => (
    <H1Styled color={color} size={size}>
        {title}
    </H1Styled>
)

export default XH1