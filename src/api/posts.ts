import request from '../utils/request';

export const fetchPost = () => request.get('posts');
