const simpleReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, {id: Date.now(), text: action.data}];
    case 'REMOVE':
      return state.filter((obj) => {
        return obj.id !== action.data;
      });
    case 'SAVE_EDIT':
      const newText = document.querySelector(`[data-edittext="${action.data}"]`).value;
      const element = state.find(n => n.id === action.data);
      const newElement = {
        ...element,
        text: newText
      }
      return state.map((element) => {
        if (element.id === action.data) {
          return newElement;
        } else {
          return element;
        }
      })
    default:
      return state;  
  }
};

//action creators

export const addNote = (noteText) => {
	return { type: 'ADD', data: noteText };
};

export const removeNote = (id) => {
	console.log(id);
	// you can also remove the element from the dom with the id
	return { type: 'REMOVE', data: id };
};

export const editNote = (id) => {
	document.querySelector(`[data-edittext="${id}"]`).style.display = 'visible';
	//console.log(newText);
};

export const saveEdit = (id) => {
	return { type: 'SAVE_EDIT', data: id };
};

export default simpleReducer;
