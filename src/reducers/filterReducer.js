const filterReducer = (state, action) => {
    console.log("action", action);
    switch (action.type) {
      case "LOW_TO HIGH":
        return [...state].sort((a, b) => a.price - b.price);
      case "HIGH_TO_LOW":
        return [...state].sort((a, b) => b.price - a.price);
      case "All":
        return [...state];
      case 'EYEGLASSES':
        return [...state].filter(item=>item.type == 'eye-glasses');
      case 'COMPUTERGLASSES':
        return [...state].filter(item=>item.type == 'computer-glasses');
      case 'SUNGLASSES':
        return [...state].filter(item=>item.type == 'sun-glasses');
      case "RATINGSS":
        return [...state].filter((item) =>item.rating >= action.payload);
      case "PRICE":
        return [...state].filter((item) => item.price >= action.payload);
      default:
        return [...state];
    }
  };
  export { filterReducer };