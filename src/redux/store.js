import { createStore, applyMiddleware, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { authReducer } from './reducers/auth.reducer';
import { 
    homeVideoReducer, 
    selectedVideoReducer, 
    relatedVideoReducer,
    searchedVideosReducer,
    subscriptionsChannelReducer,
    channelVideosReducer,
} from './reducers/videos.reducers';
import { channelDetailsReducer } from './reducers/channel.reducer';
import { commentListReducer } from './reducers/comments.reducer';

const rootreducer = combineReducers({
    auth: authReducer,
    homeVideos: homeVideoReducer,
    selectedVideo: selectedVideoReducer,
    channelDetails: channelDetailsReducer,
    commentList:commentListReducer,
    relatedVideos:relatedVideoReducer,
    searchedVideos:searchedVideosReducer,
    subscriptionChannels:subscriptionsChannelReducer,
    channelVideos:channelVideosReducer,
})

const store = createStore(
    rootreducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;