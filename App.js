import React from "react";
import "./App.css";
import "./main.css";
//API key: ee3948955afc4022a3a18da38d5ca918

class App extends React.Component {
  state = {
    isLoading: true,
    news: [],
    error: null
  };

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=de&apiKey=ee3948955afc4022a3a18da38d5ca918"
    )
      .then(response => response.json())
      .then(data => this.setState({ news: data.articles })); //to catch the data from articles
  }

  render() {
    const { isLoading, news, error } = this.state;
    return (
      <React.Fragment>
        <h1>German News</h1>
        {error ? <p>{error.message}</p> : null}
        {isLoading ? (
          news.map((news, index) => {
            const { urlToImage, title, description } = news;
            return (
              <div key={index} className="outside">
                <div className="container">
                  <figure>
                    <img src={urlToImage} alt="crashed bild" />

                    <figcaption>
                      <h4> {title}</h4>
                      <h5> {description} </h5>
                    </figcaption>
                  </figure>
                </div>
              </div>
            );
          })
        ) : (
          <h5>Loading...</h5>
        )}
      </React.Fragment>
    );
  }
}

export default App;
/*rendor(){
const {error, isLoading, items} = this.state;
if(error) {
  return <div>Error: {error.message}</div>;
} else if (!isLoading)

}
else {
  return(
    <div>
      {this.state.news.map(item=>{
        return (<Card title={item.title} img={item.urlToImage})
      })}
    </div>
  )
}
*/
