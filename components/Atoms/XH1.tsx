import { FC, ReactNode } from 'react'
import styled from 'styled-components'

const H1Styled = styled.h1`
    font-size: 25px;
    color: #3675a7;
    font-weight: bolder;
`

type XH1Type = {
    title: string | ReactNode
}

const XH1: FC<XH1Type> = ({title}) => <H1Styled>{title}</H1Styled>

export default XH1