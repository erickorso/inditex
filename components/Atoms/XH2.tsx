import { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface H2Props {
    size?: string;
    color?: string;
}

const H2Styled = styled.h2<H2Props>`
    font-size: ${(props) => props.size ? props.size + 'px' : '20px'};
    color: ${(props) => props.color ? props.color : '#222'};
    font-weight: bolder;
`

type XH2Type = {
    title: string | ReactNode,
    color?: string,
    size?: string,
}

const XH2: FC<XH2Type> = ({ title, color, size }) => (
    <H2Styled color={color} size={size}>
        {title}
    </H2Styled>
)

export default XH2