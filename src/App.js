import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = { 
      directorsData : [],
      moviesDetails : []
     }
  }

  componentDidMount() {
    console.log("mounting...");
    fetch('http://localhost:3006/api/directors/')
    .then(res => res.json())
    .then(data => this.setState({
      directorsData: data
    }))
    .catch(err => console.log(`oops... error ${err}`));
  }

  getingDirId = id => {
    console.log(id);
    fetch(`http://localhost:3006/api/directors/${id}/movies`)
    .then(res => res.json())
    .then(data => this.setState({
      moviesDetails: data
    }))
    .catch(err => console.log(`oops... error ${err}`));
  }

  deleteItem = v => {
    console.log("Deleted Contact id=" + v);
    fetch(`http://localhost:3006/api/movies/${v}`, { method: 'DELETE' })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const movie = this.state.moviesDetails.filter(c => c.id !== v);
      this.setState({moviesDetails: movie });
    })
  };

  render() { 
    return ( 
      <div className= "directors-name-main">
      
      <div className = "directors-list-main-division">
      <h1 className = "director-head">Directors List</h1>
        {this.state.directorsData.map(item => 
          <span className= "directors-list-head">
            <span onClick= {() => this.getingDirId(item.directorId)} key = {item.directorId} className = "directors-list">&#176; {item.director_name}<br/></span>
            <button deleteDirKey  = {item.directorId} onClick = {() => this.deleteDirItem(item.directorId)} className= "delete-Dir-button" >X</button>
          </span>
        )}
        </div>
        <div className = "movies-details-main-division">
            {this.state.moviesDetails.map(items =>
            <span className="movies-details">
            <h3>{items.id}</h3>
            <h3>Rank : {items.rank}</h3>
            <h2>{items.title}</h2>
            <p>{items.description}</p>
            <p>Runtime : {items.runtime}</p>
            <p>Metascore : {items.metascore}</p>
            <p>Votes : {items.votes}</p>
            <p>Gross Earning : {items.gross_Earning_in_Mil}</p>
            <p>Actor : {items.actor}</p>
            <p>Year : {items.year}</p>
            <button editkey  = {items.id} onClick = {() => this.editItem(items.id)} className= "edit-button" >Edit</button>
            <button deletekey  = {items.id} onClick = {() => this.deleteItem(items.id)} className= "delete-button" >Delete</button>
            </span>
            )}
        </div>
      </div>
     );
  }
}

export default App;
