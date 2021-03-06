import React, {Component} from "react";

class UpdateContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.data.title,
            desc: this.props.data.desc
        }
        this.inputFormHandler = this.inputFormHandler.bind(this);
    }

    inputFormHandler(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    render() {
        console.log(this.props.data);
        return(
            <article>
                <h2>Update</h2>
                <form action="/update_content" method="post"
                onSubmit={function(e) {
                    e.preventDefault();
                    this.props.onSubmit(
                        e.target[0].value, 
                        e.target.desc.value
                    )
                }.bind(this)}>
                    <p><input type="text" name="title" value={this.state.title}
                    onChange={this.inputFormHandler}></input></p>
                    <p><textarea name="desc" value={this.state.desc}
                    onChange={this.inputFormHandler}></textarea></p>
                    <p><input type="submit" value="edit"></input></p>
                </form>
            </article>
        )
    }
}

export default UpdateContent;