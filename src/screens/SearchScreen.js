import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getVideosBySearch } from '../redux/actions/videos.action';
import UpNextVideos from '../components/upNextVideos/UpNextVideos'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const SearchScreen = () =>
{

    const { query } = useParams();

    const dispatch = useDispatch()

    useEffect(() =>
    {
        dispatch(getVideosBySearch(query))
    }, [query, dispatch])

    const { videos, loading } = useSelector(state => state.searchedVideos)
    return (
        <Container>
            {!loading ? (
                videos?.map(video => (
                    <UpNextVideos
                        video={video}
                        key={video.id.videoId}
                        searchScreen
                    />
                ))
            ) : (
                <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
                    <Skeleton width='100%' height='160px' count={20} />
                </SkeletonTheme>
            )}
        </Container>
    )
}

export default SearchScreen
