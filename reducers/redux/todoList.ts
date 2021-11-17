import produce from 'immer';

export type Todo = {
  id: number;
  contents: string;
};
export type ListPost = {
  post: Todo[];
};

const listInit: ListPost = {
  post: [
    { id: 4, contents: 'sfefsfe' },
    { id: 3, contents: 'sfefsfe' },
    { id: 2, contents: 'sfefsfe' },
    { id: 1, contents: 'sfefsfe' },
  ],
};

const list = (state: ListPost = listInit, action: any) => {
  switch (action.type) {
    case 'ADD_LIST_ITEM':
      return produce(state, (draftState) => {
        draftState.post.unshift({
          id: action.data.id,
          contents: action.data.content,
        });
      });
    case 'DELETE_LIST_ITEM':
      return produce(state, (draftState) => {
        console.log(action.data);
        draftState.post = draftState.post.filter((e) => {
          if (e.id !== action.data) return e;
        });
      });
    default:
      return state;
  }
};
export default list;
