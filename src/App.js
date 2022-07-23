// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Movie from './components/movie';
import Counters from './components/counters'
import NavBar from './components/navbar';
import NavBarVidly from './components/navBarVidly';
import { Redirect, Route, Switch } from 'react-router-dom';
import Rentals from './components/rentals';
import Customers from './components/customers';
import NotFound from './components/notFound';
import MovieDetails from './components/movieDetails';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import MovieForm from './components/movieForm';
import Crud from './components/crud';

// function App() {
  
//   return (
//     <React.StrictMode>
//       <NavBar></NavBar>
//       <main role="main" className="container">
//           <Counters></Counters>
//           <Movie></Movie>
//       </main>
//     </React.StrictMode>
//   );
// }

class App extends Component {
  state = { 
    counters : [
        {id : 1, value : 0, tags: ['tag 1','tag 2','tag 3']},
        {id : 2, value : 0, tags: ['tag 1','tag 2','tag 3']},
        {id : 3, value : 0, tags: ['tag 1','tag 2','tag 3']}
    ]
  }
  onDeleteHandle = (id) => {
    const counters = this.state.counters.filter(c => c.id !== id);
    this.setState({counters});
  }

  onReset = () => {
      const counters = this.state.counters.map((c,index) => {
          c.value = 0;
          c.tags = ['tag 1','tag 2','tag 3'];
          return c;
      });
      this.setState({counters});
  }

  onIncrement = counter => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value++;

      var updatedList = [];
      for(var i=0; i<counters[index].tags.length; i++) {
        var tagIndex = parseInt(counters[index].tags[i].split(" ")[1]) + 1;
        updatedList.push("tag "+ tagIndex);
      }
      counters[index].tags = updatedList;
      this.setState({counters});
  }

  onDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    console.log('counters[index]',counters[index]);
    counters[index].value--;

    var updatedList = [];
    for(var i=0; i<counters[index].tags.length; i++) {
      var tagIndex = parseInt(counters[index].tags[i].split(" ")[1]) - 1;
      updatedList.push("tag "+ tagIndex);
    }
    counters[index].tags = updatedList;
    this.setState({counters});
  }

  render() { 
    return (
      <React.Fragment>
        <NavBar totalCounter={this.state.counters.filter(c => c.value > 0).length}></NavBar>
        <main role="main" className="container">
            <Counters counters={this.state.counters} onDelete={this.onDeleteHandle} onReset={this.onReset} onIncrement={this.onIncrement} onDecrement={this.onDecrement}></Counters>
            
        </main>
        
        <NavBarVidly></NavBarVidly>
        <main role="main" className="container py-5">
          <Switch>
            <Route path="/register" component={RegisterForm}></Route>
            <Route path="/login" component={LoginForm}></Route>
            <Route path="/movies/new" component={MovieForm}></Route>
            <Route path="/movies/:id" component={MovieDetails}></Route>
            <Route path="/movies" component={Movie}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/notFound" component={NotFound}></Route>
            <Redirect from="/" exact to="/movies"></Redirect>
            <Redirect to="/notFound"></Redirect>

            {/* <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/notFound" component={NotFound}></Route>
            <Route path="/movies/:id" component={MovieDetails}></Route>
            <Route path="/movies" component={Movie}></Route>
            <Route path="/" exact component={Movie}></Route>
            <Redirect to="/notFound"></Redirect> */}
          </Switch>
        </main>

        <main role="main" className="container py-5">
          <Crud></Crud>
        </main>
      </React.Fragment>
    );
  }
}

export default App;

// import React, { Component } from 'react';

// class App extends Component {
//   state = { 
//     count: 0,
//     tags: ['tag 1','tag 2','tag 3']
//    } 

//   // constructor() {
//   // super();
//   // this.incrementFunc = this.incrementFunc.bind(this);
//   // }
   
//    styles = {
//      fontSize : 20,
//    }
//   render() { 
    
//     return (
//       <React.Fragment>
//         <span style={{fontSize : 20}} className={this.dynamicClass()}>{this.formatCounter()}</span>
//         <button onClick={this.incrementBtnFunc} className='btn btn-secondary btn-sm'>Increment</button>
//         {this.InsteadOfNgIfElse()}
//       </React.Fragment>
//     );
//   }

//   formatCounter() {
//     const {count} = this.state;
//     return count === 0 ? 'Zero' : count;
//   }

//   dynamicClass() {
//     const {count} = this.state;
//     let classNames = 'badge m-2 badge-';
//     classNames += count === 0 ? 'warning' : 'primary';
//     return classNames;
//   }

//   InsteadOfNgIfElse() {
//     if(this.state.tags.length === 0) {
//       return <p>There is no Tags !</p>;
//     } else {
//       return <ul>{this.state.tags.map((tag,index) => { return <li key={index}>{tag}</li> } )}</ul>
//     }
//   }

//   incrementBtnFunc = () => {
//     console.log("Increment Clicked", this);
//     this.setState({tags : this.tagsIncrements(), count : this.state.count + 1});
//   }

//   tagsIncrements() {
//     var updatedList = [];
//     for(var i=0; i<this.state.tags.length; i++) {
//       var tagIndex = parseInt(this.state.tags[i].split(" ")[1]) + 1;
//       console.log("tagIndex", tagIndex);
//       updatedList.push("tag "+ tagIndex);
//     }
//     // var updatedList = this.state.tags.map((tag) => {
//     //   let incrementalCount = parseInt(tag.split(" ")[1]) + parseInt(1);
//     //   return "tag "+incrementalCount;
//     // })
//     return updatedList;
//   }

// }
 
// export default App;
