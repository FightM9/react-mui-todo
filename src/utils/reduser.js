export const actionType = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  EDIT: 'EDIT',
  TOGGLE: 'TOGGLE'
}


/**
 * Returns the state with the new todo item prepended
 *
 * @param {Object[]} state
 * Current app state
 *
 * @param {String} todoTitle
 * Title for the new todo item
 */

function addTodo(state, todoTitle) {
  const todoId = Math.random().toString(36).substring(2, 6);
  const todoItem = { id: todoId, title: todoTitle, complete: false };
  return [todoItem, ...state];
}

/**
 * Returns an updated state with the target todo item
 * excluded (as per target ID)
 *
 * @param {Object[]} state
 * Current app state
 *
 * @param {String} id
 * ID of the todo item to be removed
 */

function removeTodo(state, id) {
  return state.filter((todo) => todo.id !== id);
}

/**
 * Returns an updated state with the target todo item
 * new title (as per target ID and todoTotle)
 *
 * @param {Object[]} state
 * Current app state
 *
 * @param {String} id
 * ID of the todo item to be edited
 *
 * @param {String} todoTitle
 * New title for the todo item
 */

function editTodoTitle(state, id, todoTitle) {
  return state.map((todo) =>
    todo.id === id ? { ...todo, title: todoTitle } : { ...todo }
  );
}

/**
 * Returns an updated state with the opposite completion
 * status for the target todo item (as per target ID)
 *
 * @param {Object[]} state
 * Current app state
 *
 * @param {String} id
 * ID of the todo item to be toggle completion
 */

function toggleTodo(state, id) {
  return state.map((todo) =>
    todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
  );
}

export default function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      const todotitle = action.payload;
      return addTodo(state, todotitle);

    case "REMOVE":
      const removeId = action.payload;
      return removeTodo(state, removeId);

    case "EDIT":
      const editId = action.payload;
      const newTitle = action.title;
      return editTodoTitle(state, editId, newTitle);

    case "TOGGLE":
      const toggleId = action.payload;
      return toggleTodo(state, toggleId);

    default:
      return state;
  }
}
