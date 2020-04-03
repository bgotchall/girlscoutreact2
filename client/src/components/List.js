import React, { Component } from 'react';
//let list_junk=[];
class List extends Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      list: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  //Retrieves the list of items from the Express app
  getList = () => {
    fetch('api/news')
      .then(res => res.json())
      .then(results => {
        this.setState({
          isLoaded: true,
          list: results

        })
        console.log(`results is ${results}`);
      })

  }

  // data => this.setState( data ))

  //   getList = () => {
  //     list_junk[0]="hi";
  //     list_junk[1]="there";
  //   }

  render() {
    const { list, isLoaded } = this.state;

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
              {/* <h3>The list is {list.length} items long</h3> */}
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
    }
  }
}

export default List;