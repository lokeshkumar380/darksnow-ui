export default function slidingImagesReducer(state = [], action) {
  switch (action.type) {
    case "UPDATE_IMAGES_TO_SLIDER": {
      const IMAGES = action.payload;
      console.info(IMAGES);
      state.images = IMAGES;
      return {
        ...state
      };
    }
    default:
      return state;
  }
}
