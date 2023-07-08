'use client'
import { useGetData } from '@/lib/hooks/useGetData';
import Loading from '@/components/Loading';
import Card from '@/components/Cards/Card';
import { createCookie } from '@/lib/helpers/cookies';

const Podcasts = () => {
    const { data, loading, error } = (useGetData('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'))
    const entries = data?.feed?.entry

    // if (data && entries) {
    //     createCookie(entries, 'podcasts', '/')
    // }
    {
        if (loading) return <Loading loading={loading} error={error} />
    }
    return (
        <ul style={{ marginTop: '50px' }}>
            {
                data && entries ?
                    entries.map((item: any) => {
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
    );
};

export default Podcasts;
