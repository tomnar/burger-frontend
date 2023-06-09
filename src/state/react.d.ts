// Typing react context: https://dev.to/elisealcala/react-context-with-usereducer-and-typescript-4obm

function useReducer<R extends Reducer<any, any>>(
    reducer: R,
    initialState: ReducerState<R>,
    initializer?: undefined
): [ReducerState<R>, Dispatch<ReducerAction<R>>];