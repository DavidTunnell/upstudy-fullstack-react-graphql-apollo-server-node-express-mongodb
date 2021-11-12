import React, { useState, useReducer } from "react";
import SimpleReactValidator from "simple-react-validator";

const SearchBar = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [category, setCategory] = useState("");
    const [message, setMessage] = useState("");
    const [image, setImage] = useState(""); //not sure
    const [validatorFeedback] = useState(new SimpleReactValidator());
    // eslint-disable-next-line
    const [_, forceUpdate] = useReducer((x) => x + 1, 0);

    const onSubmit = () => {
        const selectedCategory = document
            .querySelector(".feedback-type")
            .querySelector(".selectric")
            .querySelector(".label").innerHTML;
        setCategory(selectedCategory);

        if (validatorFeedback.allValid()) {
            console.log("yay");
        } else {
            validatorFeedback.showMessages();
            //force update state to show validation messages to user
            forceUpdate();
        }
    };

    return (
        <>
            <section className="bg-light p-6">
                <div className="container ">
                    <div className="boxed bg-primary p-5 text-white">
                        <div className="row justify-content-between align-items-center text-center text-md-left">
                            <div className="col-md-3">
                                <h3>We're in Alpha.</h3>
                            </div>
                            <div className="col-md-6 mt-1 mt-md-0">
                                <p>
                                    Did you find a bug? Want to make a
                                    suggestion? If you have any feedback please
                                    let us know.
                                </p>
                            </div>
                            <div className="col-md-3 mt-1 mt-md-0 text-lg-right">
                                <button
                                    type="button"
                                    className="btn btn-white btn-rounded px-5"
                                    data-toggle="modal"
                                    data-target="#feedback-modal"
                                >
                                    Write Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div
                class="modal fade"
                id="feedback-modal"
                tabindex="-1"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-xl">
                    <div className="modal-content bg-light">
                        <div className="justify-content-end">
                            <button
                                type="button"
                                className="close m-1"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span
                                    aria-hidden="true"
                                    className="icon-x"
                                ></span>
                            </button>
                        </div>
                        <div className="modal-body text-left mt-n1">
                            <div class="container">
                                <div class="text-center">
                                    <h2>Write Us</h2>
                                    <p class="lead">
                                        Did you find a bug? Want to make a
                                        suggestion? If you have any feedback
                                        please let us know.
                                    </p>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <form class="mt-2">
                                            <div class="row">
                                                <div class="col-md-6 mb-3">
                                                    <label for="firstName">
                                                        Username
                                                    </label>
                                                    <div class="input-group">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text">
                                                                @
                                                            </span>
                                                        </div>
                                                        <input
                                                            type="text"
                                                            class="form-control"
                                                            onChange={(
                                                                event
                                                            ) => {
                                                                setUsername(
                                                                    event.target
                                                                        .value
                                                                );
                                                            }}
                                                            value={username}
                                                            placeholder="Username"
                                                        />
                                                    </div>
                                                    {validatorFeedback.message(
                                                        "username",
                                                        username,
                                                        "required|min:3"
                                                    )}
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                    <label for="lastName">
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        class="form-control"
                                                        placeholder="user@upstudy.io"
                                                        onChange={(event) => {
                                                            setEmail(
                                                                event.target
                                                                    .value
                                                            );
                                                        }}
                                                        value={email}
                                                    />
                                                    {validatorFeedback.message(
                                                        "email",
                                                        email,
                                                        "required|email"
                                                    )}
                                                </div>
                                            </div>

                                            <div class="mb-3 mt-n5">
                                                <label for="email">
                                                    Category
                                                </label>
                                                <div class="form-group feedback-type">
                                                    <select class="form-control">
                                                        <option>
                                                            Suggestion
                                                        </option>
                                                        <option>Bug</option>
                                                        <option>Other</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="mb-3">
                                                <label for="address">
                                                    Message
                                                </label>
                                                <textarea
                                                    type="text"
                                                    class="form-control"
                                                    rows="6"
                                                    style={{
                                                        height: "100%",
                                                    }}
                                                    placeholder="I noticed that..."
                                                    onChange={(event) => {
                                                        setMessage(
                                                            event.target.value
                                                        );
                                                    }}
                                                    value={message}
                                                    required
                                                />
                                                {validatorFeedback.message(
                                                    "message",
                                                    message,
                                                    "required"
                                                )}
                                            </div>
                                            <hr class="mb-2" />
                                            <div>
                                                <div class="form-group">
                                                    <label for="image">
                                                        Image Upload (Optional)
                                                    </label>
                                                    <input
                                                        type="file"
                                                        class="form-control"
                                                        name="image"
                                                        onChange={(event) => {
                                                            setImage(
                                                                event.target
                                                                    .value
                                                            );
                                                        }}
                                                        value={image}
                                                        required
                                                    />
                                                </div>
                                                <button
                                                    type="submit"
                                                    class="btn btn-lg btn-primary w-100"
                                                    onClick={onSubmit}
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchBar;
