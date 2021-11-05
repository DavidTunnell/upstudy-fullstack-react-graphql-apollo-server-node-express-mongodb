import Auth from "../utils/auth";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../redux/actions/";

const Test = () => {
    const bgColor = "#000";
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <>
            {/* to set !important in react: https://joshtronic.com/2018/03/22/how-to-important-inline-styles-in-react/ */}
            <section
                className="p-0 pt-10 bg-primary text-white"
                ref={(el) => {
                    if (el) {
                        el.style.setProperty(
                            "background-color",
                            bgColor,
                            "important"
                        );
                    }
                }}
            >
                <div className="container">
                    <div className="row align-items-center justify-content-between py-5 py-md-10">
                        <div>
                            when using queries, do the loading conditional{" "}
                            {/* {loading ? (
                                <div>Loading...</div>
                            ) : (
                                <ProfileList
                                    profiles={profiles}
                                    title="Here's the current roster of friends..."
                                />
                            )} */}
                            <p>
                                also, use folder structure of pages and
                                components for those pages like:
                                https://i.imgur.com/iID3etR.png
                            </p>
                        </div>
                        <div>
                            <h2>Redux State Store</h2>
                            <p>Counter: {counter}</p>
                            <button
                                onClick={() =>
                                    dispatch(counterActions.increment(10))
                                }
                            >
                                +
                            </button>
                            <button
                                onClick={() =>
                                    dispatch(counterActions.decrement(10))
                                }
                            >
                                -
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Test;
