import request from '../utils/request';

export function search() {
  return request({
    url: '/search',
    method: 'GET',
    params: {
      keywords: '海阔天空',
      limit: 10,
    },
  });
}

export function private_content() {
  return request({
    url: '/personalized/privatecontent',
    method: 'GET',
  });
}

