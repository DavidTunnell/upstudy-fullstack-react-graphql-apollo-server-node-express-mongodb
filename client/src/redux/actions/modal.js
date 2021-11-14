import * as actions from "../actionTypes";

export const updateAndShowModal = (title, content, imageUrl) => {
    console.log("updateAndShowModal!!!!!!!!!");
    console.log(imageUrl);
    return {
        type: actions.UPDATE_AND_SHOW_MODAL,
        payload: { title, content, imageUrl, show: true },
    };
};
export const hideModal = () => {
    return {
        type: actions.HIDE_MODAL,
    };
};
