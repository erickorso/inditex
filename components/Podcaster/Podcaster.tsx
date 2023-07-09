'use client'
import { useSelector } from 'react-redux';
import Loading from '@/components/Loading';
import Card from '@/components/Cards/Card';
import { useGetPodcasts } from '@/lib/hooks/useGetPodcasts';
import Search from '@/components/Search';
import { RootState } from '@/lib/redux/store';
import styled from 'styled-components';

const filterPodcasts = (data: any[], searchText: string): any[] => {
    const filteredBooks = data.filter((podcast: any) => {
        const title = (podcast.title?.label || '').toLowerCase();
        const author = (podcast['im:artist']?.label || '').toLowerCase();
        return title.includes(searchText.toLowerCase()) || author.includes(searchText.toLowerCase());
    });

    return filteredBooks;
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 50px;
  width: 90%;
  padding: 20px;
  margin-top: 40px;
`;

const Podcasts = () => {
    const { data, loading, error } = useGetPodcasts()
    let info = data
    const searchValue = useSelector((state: RootState) => state.search.label);

    if (searchValue !== '') {
        const filteredBooks = filterPodcasts(data, searchValue);
        info = filteredBooks;
    }

    {
        if (loading) return <Loading loading={loading} error={error} />
    }
    return (
        <>
            <Search />
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
        </>
    );
};

export default Podcasts;
