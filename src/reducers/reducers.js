
export const RENDER_ITEM = "RENDER_ITEM";

const initialState = {
    data: []
};


export  const Reducer = (state = initialState, action) =>  {
    console.log("STATE ", state)
    console.log("ACTION ", action.type)
    console.log("PAYLOAD ", action?.payload)
    switch (action.type) {
        case RENDER_ITEM:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}

export default Reducer;


