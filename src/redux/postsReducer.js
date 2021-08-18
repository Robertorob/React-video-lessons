import { CREATE_POST, FETCH_POSTS } from "./types";

const initialState = {
  syncPosts: [
    {
      id: 1,
      title: 'Асинхронный JavaScript', 
      body: 'В этом модуле мы рассмотрим asynchronous JavaScript, почему это важно, и как это поможет эффективно справляться с потенциальной блокировкой операций, таких как получение ресурсов с сервера или запись в файл.',
    },
    {
      id: 2,
      title: 'Необходимые знания', 
      body: 'Асинхронный JavaScript довольно сложная тема, и мы советуем пройти Первые шаги в JavaScript и Блоки в JavaScript прежде чем начать эту тему.',
    },
    {
      id: 3,
      title: 'Руководства', 
      body: 'Если вы ещё не знакомы с концепциями асинхронного программирования, вам стоит начать со статьи Основные концепции асинхронного программирования в этом модуле.',
    },
  ],
  fetchedPosts: []
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        syncPosts: [...state.syncPosts, action.payload]
      }
    case FETCH_POSTS:
      return {
        ...state,
        fetchedPosts: action.payload
      }
    default:
      return state;
  }
}