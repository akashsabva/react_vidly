import React, { Component } from 'react';

class Counter extends Component {
    // state = { 
    //         value: this.props.counter.value,
    //         tags: ['tag 1','tag 2','tag 3']
    //        } 
        
          // constructor() {
          // super();
          // this.incrementFunc = this.incrementFunc.bind(this);
          // }
           
           styles = {
             fontSize : 20,
           }
          render() { 
            return (
              <React.Fragment>
                {this.props.children}
                <div className="row">
                  <div className="col-1">
                    <span style={{fontSize : 20}} className={this.dynamicClass()}>{this.formatCounter()}</span>
                  </div>
                  <div className="col">
                    <button onClick={() => this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm m-2'>+</button>
                    <button onClick={() => this.props.onDecrement(this.props.counter)} className='btn btn-secondary btn-sm m-2' disabled={this.props.counter.value === 0 ? 'disabled' : ''}>-</button>
                    <button className="btn btn-danger m-2" onClick={() => this.props.onDelete(this.props.counter.id)}>✕</button>
                  </div>
                </div>
                {this.InsteadOfNgIfElse()}
              </React.Fragment>
            );
          }
        
          formatCounter() {
            const {value} = this.props.counter;
            return value === 0 ? 'Zero' : value;
          }
        
          dynamicClass() {
            const {value} = this.props.counter;
            let classNames = 'badge m-2 badge-';
            classNames += value === 0 ? 'warning' : 'primary';
            return classNames;
          }
        
          InsteadOfNgIfElse() {
            if(this.props.counter.tags.length === 0) {
              return <p>There is no Tags !</p>;
            } else {
              return <ul>{this.props.counter.tags.map((tag,index) => { return <li key={index}>{tag}</li> } )}</ul>
            }
          }
        
          // incrementBtnFunc = () => {
          //   console.log("Increment Clicked", this);
          //   this.setState({tags : this.tagsIncrements(), value : this.state.value + 1});
          // }
        
          // tagsIncrements() {
          //   var updatedList = [];
          //   for(var i=0; i<this.state.tags.length; i++) {
          //     var tagIndex = parseInt(this.state.tags[i].split(" ")[1]) + 1;
          //     console.log("tagIndex", tagIndex);
          //     updatedList.push("tag "+ tagIndex);
          //   }
          //   // var updatedList = this.state.tags.map((tag) => {
          //   //   let incrementalCount = parseInt(tag.split(" ")[1]) + parseInt(1);
          //   //   return "tag "+incrementalCount;
          //   // })
          //   return updatedList;
          // }
}
 
export default Counter;