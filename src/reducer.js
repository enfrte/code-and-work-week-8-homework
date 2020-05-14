const simpleReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, {id: Date.now(), text: action.data}];
    case 'REMOVE':
      return state.filter((obj) => {
        return obj.id !== action.data;
      });
    case 'SAVE_EDIT':
			const newText = action.data.text;
      const obj = state.find(n => n.id === action.data.id);
      const newObj = {
        ...obj,
        text: newText
      }
      return state.map((obj) => {
        if (obj.id === action.data.id) {
          return newObj;
        } else {
          return obj;
        }
      })
    default:
      return state;  
  }
};

// Action creators

export const addNote = (noteText) => {
	return { type: 'ADD', data: noteText };
};

export const removeNote = (id) => {
	//console.log(id);
	return { type: 'REMOVE', data: id };
};

export const saveEdit = (id, text) => {
	return { type: 'SAVE_EDIT', data: {id: id, text: text} };
};

export default simpleReducer;
