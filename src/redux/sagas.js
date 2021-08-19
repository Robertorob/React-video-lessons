import {put, takeEvery, call} from 'redux-saga/effects';
import { AlertType } from '../Types/AlertTypes';
import { hideLoader, showLoader, addAlert } from './actions';
import { FETCH_POSTS, REQUEST_POSTS, REQUEST_POSTS_WITH_ERROR } from './types';

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, requestPostsWorker);
  yield takeEvery(REQUEST_POSTS_WITH_ERROR, requestPostsWithErrorWorker);
}

function* requestPostsWorker() {
  try {
    yield put(showLoader());
    const payload = yield call(fetchPosts);
    yield put({type: FETCH_POSTS, payload});
    yield put(hideLoader());
  }
  catch (e) {
    yield put(hideLoader());
    yield put(addAlert({type: AlertType.Custom, text: e.message}));
  }
}

function* requestPostsWithErrorWorker() {
  try {
    yield put(showLoader());

    yield call(async () => {
      try {
        const sleep = duration => new Promise((resolve, reject) => {
          setTimeout(() => { 
              const success = false;
              if (success) {
                return resolve();
              }

              // Имитируем эксепшн
              try {
                const variable = {};
                variable.text.toString();
              }
              catch (e) {
                return reject(e.message);
              }

            }, duration);
        });

        await sleep(1000);
      }
      catch (e) {
        console.log('error in fetch posts');
        throw e;
      }
    });

    yield put(hideLoader());
  }
  catch (e) {
    yield put(hideLoader());
    yield put(addAlert({type: AlertType.Custom, text: e}));
  }
}

async function fetchPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const sleep = duration => new Promise(resolve => {
      setTimeout(resolve, duration);
    });
    await sleep(1000);
    return await response.json();
  }
  catch (e) {
    console.log('error in fetch posts');
    throw e;
  }
}
