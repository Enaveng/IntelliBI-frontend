// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** doThumb POST /api/Post_thumb/ */
export async function doThumbUsingPOST(
  body: API.PostThumbAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseInt_>('/api/Post_thumb/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
