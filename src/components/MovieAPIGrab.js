import React, { Component } from 'react'
import axios from 'axios'

class MovieAPIGrab extends Component {
  state = {
    imgUrl: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2',
    searchResults: []
  }

  makeApiCall = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=32b83121b0d6fd29ba642ad6f7aba473'
    )
    this.setState({
      searchResults: resp.data.results
    })
    console.log(this.state.searchResults)
  }

  componentDidMount() {
    this.makeApiCall()
  }

  render() {
    return (
      <main>
        <h1>CONGRATULATIONS ITS A BABY MOVIE!</h1>
        <ul>
          {this.state.searchResults.map(results => {
            return (
              <li key={results.id}>
                <img src={`${this.state.imgUrl}${results['poster_path']}`} />
                <br />
                {results.title} --
                {results.overview}
              </li>
            )
          })}
        </ul>
      </main>
    )
  }
}

export default MovieAPIGrab
