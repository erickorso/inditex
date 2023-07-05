"use client";
import { FC, ReactNode } from 'react'
import styles from '../../app/page.module.css'
import { MainTemplateStyle } from './style';
import XNav from '@/components/XNav'
import XFooter from '@/components/XFooter'

type TemplateType = {
    children: ReactNode
}

const Maintemplate: FC<TemplateType> = ({ children }) => (
    <MainTemplateStyle className={styles.main}>
        <XNav />
        {children}
        <XFooter />
    </MainTemplateStyle>
)

export default Maintemplate
