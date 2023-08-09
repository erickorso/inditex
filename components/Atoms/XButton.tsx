import { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface XButtonProps {
    size?: string;
    color?: string;
}

const XButtonStyled = styled.button<XButtonProps>`
    font-size: ${(props) => props.size ? props.size + 'px' : '20px'};
    color: ${(props) => props.color ? props.color : '#222'};
    font-weight: bolder;
`

type XButtonType = {
    title: string | ReactNode,
    color?: string,
    size?: string,
}

const XButton: FC<XButtonType> = ({ title, color, size }) => (
    <XButtonStyled color={color} size={size}>
        {title}
    </XButtonStyled>
)

export default XButton