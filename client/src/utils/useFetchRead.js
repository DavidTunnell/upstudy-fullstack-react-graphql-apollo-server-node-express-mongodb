import { useState, useEffect } from "react";

//custom hooks in react must start with 'use' or it wont work
const useFetchRead = (url) => {
    //the state of a component refers to the data being used by a component at a point in time
    //you must use state and not variables because it wont update the page
    //this is because you must use reactive variables (variables that react looks at to check/watch for state change)
    //this is done using hooks (useState hook in particular)
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    //useEffect is a hook that runs every time a component renders (on page load and state change)
    useEffect(() => {
        //this will be associated with the fetch and the be used to stop the fetch if needed
        const abortController = new AbortController();
        //pass it as a 2nd parameter object
        fetch(url, { signal: abortController.signal })
            .then((res) => {
                if (!res.ok) {
                    throw Error("Could not fetch the data.");
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                //also prevent state update if it is an abort error
                if (err.name === "AbortError") {
                    console.log("Fetch was aborted.");
                } else {
                    setError(err.message);
                    setIsPending(false);
                }
            });
        //when data is still being fetched when a component changes, an error is produced. This cleanup prevents this issue.
        //This return fires when the unmount happens (ex: navigating to new blog link), stopping fetch from continuing
        //by using an abort controller to abort the fetch it is associated with
        return () => abortController.abort();

        //you can also look with state, but changing it can put you in an infinite loop
        //if you dont want to always run this every render, pass in a dependency array as a second argument
        //an empty array makes it only run the 1st time on load, not subsequent state changes
        //or you can pass state variables, this will only run when those state variables are updated
    }, [url]);

    //we need to get to the state properties from other components that import this file, thus we need to return them
    return { data, isPending, error };
};

export default useFetchRead;
