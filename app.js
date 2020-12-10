class App extends React.Component {
    state = {
        name: "",
        message: "",
        comments: []
    }

    handleName = (event) => {
        console.log("Name : " + event.target.value);
        this.setState ({
            name: event.target.value
        })
    }

    handleMessage = (event) => {
        console.log("Message : " + event.target.value);
        this.setState ({
            message: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const comment = {
            name: this.state.name,
            message: this.state.message
        }

        const tmp = this.state.comments.concat(comment);
        console.log(tmp);

        this.setState({
            comments: tmp
        })
    }

    render() {
        return(
            <div className="comment-send">
                <form onSubmit={this.handleSubmit} className="form-comment" method="post">
                    <label className="form-title"><strong>Say something</strong></label>
                    <input className="form-content-name box" value={this.state.name} onChange={this.handleName} type="text" placeholder="Your Name"></input>
                    <textarea className="form-content-comment box" value={this.state.message} onChange={this.handleMessage} placeholder="Your Comment"></textarea>
                    <button className="form-submit" type="submit">Comment =&gt;</button>
                </form>
            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('app'));