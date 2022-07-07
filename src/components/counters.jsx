import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    // state = { 
    //     counters : [
    //         {id : 1, value : 0, tags: ['tag 1','tag 2','tag 3']},
    //         {id : 2, value : 0, tags: ['tag 1','tag 2','tag 3']},
    //         {id : 3, value : 0, tags: ['tag 1','tag 2','tag 3']}
    //     ]
    // } 

    // onDeleteHandle = (id) => {
    //     console.log("Delete Called", id);
    //     const counters = this.state.counters.filter(c => c.id !== id);
    //     this.setState({counters});
    // }

    // onReset = () => {
    //     const counters = this.state.counters.map((c,index) => {
    //         c.value = 0;
    //         c.tags = ['tag 1','tag 2','tag 3'];
    //         return c;
    //     });
    //     this.setState({counters});
    // }

    // onIncrement = counter => {
    //     const counters = [...this.state.counters];
    //     const index = counters.indexOf(counter);
    //     counters[index] = {...counter};
    //     counters[index].value++;

    //     var updatedList = [];
    //     for(var i=0; i<counters[index].tags.length; i++) {
    //       var tagIndex = parseInt(counters[index].tags[i].split(" ")[1]) + 1;
    //       updatedList.push("tag "+ tagIndex);
    //     }
    //     counters[index].tags = updatedList;
    //     this.setState({counters});
    // }  

    render() {
        const {onReset, counters, onDelete, onIncrement, onDecrement} = this.props;
        return (
            <div>
                <button className="btn btn-primary m-2" onClick={onReset}>Reset</button>
                {counters.map(counter => 
                    <Counter key={counter.id} counter={counter} onDelete={onDelete} onIncrement={onIncrement} onDecrement={onDecrement}>
                        <h4>Counter #{counter.id}</h4>
                    </Counter>
                )}
            </div>    
        );
    }
}
 
export default Counters;