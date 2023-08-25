export interface sharedState{
showLoading: boolean;
errorMessage: string;
}
export const initialstate:sharedState = {
    showLoading: false,
    errorMessage: ""
};