import React from 'react';
import { useYoutubeApi } from 'context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';
import VideoCard from 'components/VideoCard';

export default function RelatedVideos({ id }) {
    const { youtube } = useYoutubeApi();
    const { error, isLoading, data: videos } = useQuery(['related', id], () => youtube.relatedVideos(id));

    return (
        <>
            {isLoading && <p>Loading...</p>}
            {error && <p>Something is wrong 😅</p>}
            {videos && (
                <ul className=''>
                    {videos.map((video) => (
                        <VideoCard type='list' key={video.id} video={video} />
                    ))}
                </ul>
            )}
        </>
    );
}
