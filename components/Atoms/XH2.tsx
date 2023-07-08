import { FC, ReactNode } from 'react'
import styled from 'styled-components'

const H2Styled = styled.h2`
    font-size: 20px;
    color: #222;
    font-weight: bolder;
`

type XH2Type = {
    title: string | ReactNode
}

const XH2: FC<XH2Type> = ({title}) => <H2Styled>{title}</H2Styled>

export default XH2