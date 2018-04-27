import React from "react";

class Input extends React.Component {
    constructor(props){
        super(props);

        // this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    /* handleKeyDown(e){
        if(e.keyCode < 48 || e.keyCode > 57 || e.keyCode === 8){
            e.preventDefault();
        }
    } */

    render() {
        return (
            <input type="text" className="form-control" name={this.props.name} placeholder={this.props.placeholder} value={this.props.inputValue} onChange={this.props.onChange} />
        );
    }
}

export default Input;