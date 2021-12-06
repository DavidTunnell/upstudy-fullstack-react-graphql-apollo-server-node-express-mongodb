import { useMutation } from "@apollo/client";
import { ARCHIVE_BOOKMARK } from "../utils/mutations";
import React, { useState, useEffect } from "react";
import { modalActions, bookmarksActions } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Bookmarks = (params) => {
    //params from parent
    let bookmarks = params.bookmarks;
    let setBookmarks = params.setBookmarks;
    let userId = params.userId;
    //redux state
    const userBookmarks = useSelector((state) => state.userBookmarks);
    //graphql mutations
    const [archiveBookmark] = useMutation(ARCHIVE_BOOKMARK);

    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log("inside bookmarks component");
    //     console.log(bookmarks);
    //     console.log("bookmarks");
    // }, [bookmarks]);

    const handleBookmarkArchiveClick = async (event) => {
        event.preventDefault();
        const idSelected = event.target.getAttribute("data-index");
        try {
            dispatch(bookmarksActions.archiveBookmarkRedux(idSelected));

            //REPLACE LOCAL STATE WITH REDUX HERE
            //NEED TO ----------------------------------------------------------------
            // UPDATE REDUX STATE SO THAT idSelected gets set to ARCHIVED = TRUE

            // // 1. Make a shallow copy of the items
            // let items = [...userBookmarks];
            // // 2. Make a shallow copy of the item you want to mutate
            // const foundIndex = items.findIndex((x) => x._id === idSelected);
            // items.splice(foundIndex, 1);
            // 5. Set the state to our new copy
            // setBookmarks({ bookmarks: items });

            try {
                await archiveBookmark({
                    variables: {
                        userId: userId,
                        bookmarkId: idSelected,
                    },
                });
            } catch (error) {
                dispatch(
                    modalActions.updateAndShowModal("Error", error.message)
                );
            }
        } catch (err) {
            dispatch(modalActions.updateAndShowModal("Error", err.message));
        }
    };

    return (
        <>
            <h5 className="mb-2 fs-20 font-weight-normal">Bookmarks</h5>
            <div className="row">
                <div className="col">
                    <div className="table-responsive-md">
                        <table className="table table-lined ">
                            <thead style={{ textAlign: "center" }}>
                                <tr>
                                    <th
                                        scope="col"
                                        className="d-none d-sm-table-cell"
                                    >
                                        Title
                                    </th>
                                    <th scope="col">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userBookmarks &&
                                    userBookmarks
                                        .filter(
                                            (bookmark) => !bookmark.archived
                                        )
                                        .map((bookmark) => (
                                            <tr>
                                                <th scope="row">
                                                    <Link to={bookmark.path}>
                                                        {bookmark.name}
                                                    </Link>
                                                </th>
                                                <td className="text-center">
                                                    <div className="dropdown">
                                                        <span
                                                            className="btn btn-ico btn-outline-light text-dark rounded btn-sm"
                                                            role="button"
                                                            id="dropdownMenuLink-3"
                                                            data-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        >
                                                            <i className="icon-more-vertical fs-22"></i>
                                                        </span>
                                                        <div
                                                            className="dropdown-menu"
                                                            aria-labelledby="dropdownMenuLink-3"
                                                        >
                                                            <button className="dropdown-item">
                                                                <Link
                                                                    to={
                                                                        bookmark.path
                                                                    }
                                                                >
                                                                    Open
                                                                </Link>
                                                            </button>
                                                            <button
                                                                className="dropdown-item"
                                                                data-index={
                                                                    bookmark._id
                                                                }
                                                                onClick={
                                                                    handleBookmarkArchiveClick
                                                                }
                                                            >
                                                                Archive
                                                            </button>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Bookmarks;
