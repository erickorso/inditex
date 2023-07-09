'use client'
import { useSelector } from 'react-redux';
import Loading from '@/components/Loading';
import Card from '@/components/Cards/Card';
import { useGetPodcasts } from '@/lib/hooks/useGetPodcasts';
import Search from '@/components/Search';
import { RootState } from '@/lib/redux/store';

const filterPodcasts = (data: any[], searchText: string): any[] => {
    const filteredBooks = data.filter((podcast: any) => {
        const title = (podcast.title?.label || '').toLowerCase();
        const author = (podcast['im:artist']?.label || '').toLowerCase();
        return title.includes(searchText.toLowerCase()) || author.includes(searchText.toLowerCase());
    });

    return filteredBooks;
};

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
            <ul style={{ marginTop: '50px' }}>
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
                                <li key={item.id.attributes["im:id"]}>
                                    <Card info={itemInfo} />
                                </li>
                            )
                        })
                        : null}
            </ul>
        </>
    );
};

export default Podcasts;
