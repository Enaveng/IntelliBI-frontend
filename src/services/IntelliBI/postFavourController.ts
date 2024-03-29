// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** doPostFavour POST /api/Post_favour/ */
export async function doPostFavourUsingPOST(
  body: API.PostFavourAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseInt_>('/api/Post_favour/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listFavourPostByPage POST /api/Post_favour/list/page */
export async function listFavourPostByPageUsingPOST(
  body: API.PostFavourQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePagePostVO_>('/api/Post_favour/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listMyFavourPostByPage POST /api/Post_favour/my/list/page */
export async function listMyFavourPostByPageUsingPOST(
  body: API.PostQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePagePostVO_>('/api/Post_favour/my/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
