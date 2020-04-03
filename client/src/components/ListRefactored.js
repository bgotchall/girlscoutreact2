import React, { useState, useEffect } from "react";

export default function List() {

    const [list, setList] = useState([]);


    useEffect(() => {
        // Update the document title using the browser API
        getList();
    }, []);


    //Retrieves the list of items from the Express app
    function getList () {
        fetch('api/getList')
            .then(res => {
                
                console.log("hi");
                setList(res.json());  //this doesn't work and I don't know why
                //setList(["new","crap"]);
                
            })
            .then(res=>{setList(res)});
            
    }

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
                                {item}
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


// class List extends Component {
//   // Initialize the state
//   constructor(props){
//     super(props);
//     this.state = {
//       list: []
//     }
//   }

//   // Fetch the list on first mount
//   componentDidMount() {
//     this.getList();
//   }

//   //Retrieves the list of items from the Express app
//   getList = () => {
//     fetch('api/getList')
//     .then(res => res.json())
//     .then(list => this.setState({ list }))
//   }


// //   getList = () => {
// //     list_junk[0]="hi";
// //     list_junk[1]="there";
// //   }

//   render() {
//     const { list } = this.state;

//     return (
//       <div className="App">
//         <h1>List of Items</h1>
//         {/* Check to see if any items are found*/}
//         {list.length ? (
//           <div>
//             {/* Render the list of items */}
//             {list.map((item) => {
//               return(
//                 <div>
//                   {item}
//                 </div>
//               );
//             })}
//           </div>
//         ) : (
//           <div>
//             <h2>No List Items Found</h2>
//           </div>
//         )
//       }
//       </div>
//     );
//   }
// }

// export default List;