import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state ={
        datos:[],
        score:"",
        img:"",
        title:"",
        comics:[]
    };
    this.fetchHits = this.fetchHits.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addComic = this.addComic.bind(this);
}

componentDidMount() {//se ejecuta antes que toda la pagina
  this.fetchHits();
  this.fetchDB();
 }
fetchHits() {  
  fetch("/api/comics")//envia peticiones al servidor
       .then(response =>  response.json())          
       .then(data =>{ 
          this.setState({datos: data});
       });
      }
      handleChange(e) {
        const { name, value } = e.target;
        this.setState({
          [name]: value
        });
      }
      addComic(e){
        console.log(this.state)
        fetch('/api/db',{
            method:"POST",
            body: JSON.stringify(this.state),
            headers:{
                'Acept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
        .catch(err => console.error(err))
        e.preventDefault();
  
      }
      fetchDB(){
          fetch('/api/db')
            .then(res => res.json())
            .then(data => {
                this.setState({comics:data})
            });
      }
      
  render() {
    return (
      <div >
            <form onSubmit={this.addComic}>
                <div>
                        <h2 name="title" value={this.state.datos.title}> {this.state.datos.title} </h2>
                </div>

                <div>
                    <img name="img" src={this.state.datos.img} value={this.state.datos.img} width="500" height="300"/>
                </div>

                <div>
                    <p>{this.state.datos.transcript}</p>
                </div>
                    <h5>Do you like this comic ?, Rate it:</h5>
                <input name="score" onChange={this.handleChange} type="text" placeholder="Score.." autoFocus/>
              
                <button  type="submit" >
                    <i className="medium material-icons hoverable">offline_pin</i>
                </button>       
            </form>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>THE BEST</th>
                            <th>         </th>
                            <th>SCORE</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.comics.map(comics =>{
                            return(
                                <tr>
                                    <td>{comics.title}</td>
                                    <td> <img src={comics.img} width="150" height="100"/></td>
                                    <td>{comics.score}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                    

                </table>
            </div>

        </div>
    );
  }
}
export default App; 