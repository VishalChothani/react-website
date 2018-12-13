export default function(state = 'Home', action){
  switch(action.type){
    case 'HEADER_OPTION_SELECTED':
      return action.payload;
    default:
      return state;
  }
}
