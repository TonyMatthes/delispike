const sidebarReducer = (state = {open:false}, action) => {
    switch (action.type) {
      case 'TOGGLE_SIDEBAR':
        return !state;
      default:
        return state;
    }
  };
  
  export default sidebarReducer;