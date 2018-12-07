import {combineReducers} from 'redux';
import CommentList from './reducer_commentList';
import Auth from './reducer_auth';
const rootReducer = combineReducers({
    commentList: CommentList,
    auth:Auth
});

export default rootReducer;