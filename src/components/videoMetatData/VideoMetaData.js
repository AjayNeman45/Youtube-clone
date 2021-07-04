import React, { useEffect } from 'react'
import './_videoMetaData.scss';

import moment from 'moment';
import numeral from 'numeral';
import { MdThumbUp, MdThumbDown } from 'react-icons/md'
import ShowMoreText from 'react-show-more-text';
import { useDispatch, useSelector } from 'react-redux';
import { checkSubscriptionStatus, getChannelDetails } from '../../redux/actions/channel.action';

const VideoMetaData = ({ video: { snippet, statistics }, videoId }) =>
{

    const { channelId, channelTitle, description, title, publishedAt } = snippet;


    const { viewCount, likeCount, dislikeCount } = statistics;

    const dispatch = useDispatch();

    const {
        snippet: channelSnippet,
        statistics: channelStatistics,
    } = useSelector(state => state.channelDetails.channel)

    useEffect(() =>
    {
        dispatch(getChannelDetails(channelId));
        dispatch(checkSubscriptionStatus(channelId));
    }, [dispatch, channelId])


    const subscriptionStatus = useSelector(state => state.channelDetails.subscriptionStatus)
    return (
        <div className="videoMetaData py-2">
            <div className="videoMetaData__top">
                <h5 style={{ color: "white" }} className="my-3">{title}</h5>
                <div className="d-flex justify-content-between align-item-center py-1">
                    <span>
                        {numeral(viewCount).format('0.a')} Views • {moment(publishedAt).fromNow()}
                    </span>
    
                    <div>
                        <span className="mx-3">
                            <MdThumbUp size={26} />  {numeral(likeCount).format('0.a')}
                        </span>
                        <span className="mr-3">
                            <MdThumbDown size={26} />  {numeral(dislikeCount).format('0.a')}
                        </span>
                    </div>

                </div>
            </div>
            <div className="videoMetaData__channel d-flex align-item-center justify-content-between my-2 py-3">
                <div className="d-flex">
                    <img src={channelSnippet?.thumbnails?.default?.url}
                        alt=""
                        className="rounded-circle mr-3"
                    />
                    <div className="d-flex flex-column mx-2">
                        <span style={{ color: 'white' }}>{channelTitle}</span>
                        <span style={{ fontSize: "13px" }}>{numeral(channelStatistics?.subscriberCount).format('0.a')} Subscribers</span>
                    </div>
                </div>
                <button
                    className={`btn border-0 m-2
                    ${subscriptionStatus && 'btn-gray'}`}>
                    {subscriptionStatus ? 'Subscribed' : 'Subscribe'}
                </button>
            </div>
            <div className="videoMetaData__description">
                <ShowMoreText
                    lines={3}
                    more='SHOW MORE'
                    less='SHOW LESS'
                    anchorClass='showMoreText'
                    expanded={false}
                >
                    {description}
                </ShowMoreText>

            </div>
        </div>
    )
}

export default VideoMetaData


