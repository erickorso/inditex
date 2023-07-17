export const filterPodcasts = (data: any[], searchText: string): any[] => {
    const filteredBooks = data.filter((podcast: any) => {
        const title = (podcast.title?.label || '').toLowerCase();
        const author = (podcast['im:artist']?.label || '').toLowerCase();
        return title.includes(searchText.toLowerCase()) || author.includes(searchText.toLowerCase());
    });

    return filteredBooks;
};