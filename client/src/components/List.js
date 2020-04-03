import React, { useState, useEffect } from "react";

export default function List() {

    const [list, setList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);


    useEffect(() => {
        // Update the document title using the browser API
        getList();
    }, []);


    //Retrieves the list of items from the Express app
    function getList() {
        fetch('api/news')
            .then(res => res.json())
            .then(results => {
                setList(results);
                setIsLoaded(true);
                console.log(`length is ${results.length}`)
            })
    }


    if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="App">
                <h1>List of Items</h1>
                {/* Check to see if any items are found*/}
                {list.length ? (
                    <div>
                        {/* Render the list of items */}
                        {list.map((item) => {
                            return (
                                <div>
                                    {item.newsDate}
                                    {item.title}
                                    {item.news_detail}
                                </div>
                            );
                        })}
                    </div>
                ) : (
                        <div>
                            <h2>No List Items Found</h2>
                        </div>
                    )
                }
            </div>

        );
    };
}
