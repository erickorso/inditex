'use client'
import Card from "@/components/Cards/Card";
import Loading from "@/components/Loading";
import { GridContainer, filterPodcasts } from "@/components/Podcaster/Podcaster";
import { setPodcastsStart } from "@/lib/redux/reducers/saga/podcast/slice.saga";
import { RootState } from "@/lib/redux/store";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const PodcasterWithSaga = memo(() => {

    const { data, loading, error } = useSelector((state: any) => state.podcastsSaga)
    const searchValue = useSelector((state: RootState) => state.search.label);
    const dispatch = useDispatch()
    let info = [...data]

    useEffect(() => {
        dispatch(setPodcastsStart())
    }, [dispatch, setPodcastsStart])

    if (searchValue !== '') {
        const filteredBooks = filterPodcasts([...data], searchValue);
        info = filteredBooks;
    }

    {
        if (loading) return <Loading loading={loading} error={error} />
    }

    return (
        <GridContainer>
            {
                info ?
                    info.map((item: any) => {
                        let itemInfo = {
                            id: item.id.attributes["im:id"],
                            name: item["im:name"].label,
                            title: item.title.label,
                            author: item["im:artist"].label,
                            images: item["im:image"],
                        }
                        return (
                            <Card info={itemInfo} key={item.id.attributes["im:id"]} />
                        )
                    })
                    : null}
        </GridContainer>
    );
})

export default PodcasterWithSaga