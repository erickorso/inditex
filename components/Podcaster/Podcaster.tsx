'use client'
import { useState, useEffect } from 'react'
import { PodcasterStyle } from './style'
import { RootState } from '@/lib/redux/store'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPodcasts } from '@/lib/redux/reducers/podcasts'

export default async function Page() {

    const {data, error, loading} = useSelector((state: RootState) => state.podcasts)
    const dispatch = useDispatch();  
    
    useEffect(() => {
        if(!data[1] && !error && !loading){
            console.log(data);
            fetchPodcasts(dispatch)
        }
    }, [data, error, loading])

    return (
        <PodcasterStyle>{JSON.stringify(data)}</PodcasterStyle>
    )
}