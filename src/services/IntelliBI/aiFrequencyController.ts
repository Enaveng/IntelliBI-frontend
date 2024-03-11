// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** getAiFrequency GET /api/aiFrequency/get */
export async function getAiFrequencyUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseAiFrequencyVO_>('/api/aiFrequency/get', {
    method: 'GET',
    ...(options || {}),
  });
}
