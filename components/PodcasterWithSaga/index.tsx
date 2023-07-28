'use client'
import Card from "@/components/Cards/Card";
import Loading from "@/components/Loading";
import { GridContainer } from "@/components/Podcaster/Podcaster";
import { setPodcastsStart } from "@/lib/redux/reducers/saga/podcast/slice.saga";
import { RootState } from "@/lib/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterPodcasts } from "@/components/Podcaster/filterFunction";


const PodcasterWithSaga = () => {

    const { data, loading, error } = useSelector((state: any) => state.podcastsSaga)
    const searchValue = useSelector((state: RootState) => state.search.label);
    const dispatch = useDispatch()
    let info = Array.isArray(data) ? [...data] : []

    useEffect(() => {
        dispatch(setPodcastsStart())
    }, [dispatch])

    if (searchValue !== '') {
        const filteredBooks = filterPodcasts([...data], searchValue);
        info = filteredBooks;
    }

    {
        if (loading || error) return <Loading loading={loading} error={error} />
    }

    return (
        <GridContainer data-testid="saga-grid-container">
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
                            <Card info={itemInfo} key={item.id.attributes["im:id"]} data-testid="card-component" />
                        )
                    })
                    : null}
        </GridContainer>
    );
}

export default PodcasterWithSaga