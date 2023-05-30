import React, { createContext } from "react";
import type { Store } from "./reducer";
import type { Action } from "./actions";

type Context = {
  state: Store;
  dispatch: React.Dispatch<Action>;
};

export const AppContext = createContext<Context>({} as Context);