import axios from 'axios';

export const localApi = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/'
      : 'http://localhost:3000/', // TODO: remove this when `git rebase` or `git merge`
});
