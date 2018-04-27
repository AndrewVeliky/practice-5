import React from "react";
import PropTypes from "prop-types";

export default class TabItem extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            cardHeader: "card-header text-white bg-info",
            cartBody: "card-body d-none"
        }

        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(){
        this.state.cardHeader.indexOf("active") === -1 ? 
            this.setState((prevState)=>({cardHeader: `${prevState.cardHeader} active`,
                                        cartBody: prevState.cartBody.replace("d-none", "")
            })):
            this.setState((prevState)=>({cardHeader: prevState.cardHeader.replace("active", ""),
                                        cartBody: `${prevState.cartBody} d-none`
            }));
    }
    
    render() {
        return (
            <div className="card">
                <div className={this.state.cardHeader} onClick={this.clickHandler}>
                    {this.props.tab.header}
                </div>
                <div className={this.state.cartBody}>
                    {this.props.tab.content}
                </div>
            </div>
        );
    }
}
