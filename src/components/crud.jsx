import React, { Component } from 'react';
import axios from 'axios';

const apiEndPoint = "https://jsonplaceholder.typicode.com/posts";
class Crud extends Component {
    state = {  
        posts: []
    };

    async componentDidMount() {
        const { data: posts } = await axios.get(apiEndPoint);
        this.setState({ posts });
    }

    handleAdd = async () => {
        const obj = {title: 'Hellos...', body: 'B' };
        const {data: post} = await axios.post(apiEndPoint, obj);
        const posts = [post, ...this.state.posts];
        this.setState({ posts });
    }

    handleUpdate = async post => {
        post.title = 'UPDATED';
        const { data } = await axios.put(apiEndPoint+'/'+post.id, post);
        console.log("Update", data);

        const posts = [...this.state.posts];
        const index = posts.indexOf(post);
        posts[index] = post;
        this.setState({ posts });
    }

    handleDelete = async post => {
        const { data } = await axios.put(apiEndPoint+'/'+post.id);
        console.log("Update", data);

        const posts = this.state.posts.filter(p => p.id !== post.id);
        this.setState({ posts });
    }

    render() { 
        const { posts } = this.state;
        return (
            <React.Fragment>
                <button className="btn btn-primary" onClick={this.handleAdd}>Add</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th className='col-8'>Title</th>
                            <th className='col-2'>Update</th>
                            <th className='col-2'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            posts.map((post,index) => (
                                <tr key={index}>
                                    <td>{post.title}</td>
                                    <td><button className="btn btn-info" style={{ color: 'white' }}onClick={() => this.handleUpdate(post)}>Update</button></td>
                                    <td><button className="btn btn-danger" onClick={() => this.handleDelete(post)}>Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}
 
export default Crud;