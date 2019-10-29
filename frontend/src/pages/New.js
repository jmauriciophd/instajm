import React, {Component} from "react";
import api from '../services/Api'
import './New.css';

class New extends Component{

    state = {
        image:null,
        author: '',
        place : '',
        description: '',
        hashtags: '',
    };
    handleSubmit = e =>{
        e.preventDefault();
       
        const data = new FormData();

        data.append('image',this.state.image);
        data.append('author',this.state.author)
        data.append('place',this.state.place)
        data.append('description',this.state.description)
        data.append('hashtags',this.state.hashtags);

        api.post('posts',data)

        this.props.history.push('/')

    }
    handleChange = e =>{
        this.setState({ [e.target.name]: e.target.value})
    }
    handleImageChange = e =>{
        this.setState({ image: e.target.files[0] });
    }
    render(){
        return( 
                <form id="new-post" onSubmit={this.handleSubmit}>
                        <input type="file" onChange={this.handleImageChange}/>
                        <input type="text"
                        name="author"
                        placeholder="Autor do Post" onChange={this.handleChange} value={this.state.author}
                        />
                        <input type="text"
                        name="place"
                        placeholder="Local do Post" onChange={this.handleChange} value={this.state.place}
                        />
                        <input type="text"
                        name="description"
                        placeholder="Descrição do Post" onChange={this.handleChange} value={this.state.description}
                        />
                        <input type="text"
                        name="hashtags"
                        placeholder="Hastags do Post" onChange={this.handleChange} value={this.state.hashtags}
                        />
                        <button type="submit">Enviar</button>
                </form>
        );
    }
}
export default New;