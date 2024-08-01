import { RootState } from "@slices/store";

export const selectStoriesList = (state: RootState) => state.storiesList.stories;
