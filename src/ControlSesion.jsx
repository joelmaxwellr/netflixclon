import React from "react"

class ControlSesion extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }
   
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
   
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }
   
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
   
      if (isLoggedIn) {
        button = <button onClick={this.handleLogoutClick} />;
      } else {
        button = <button onClick={this.handleLoginClick} />;
      }
   
      return (
        <div>
          <button onClick={isLoggedIn} />
          {button}
        </div>
      );
    }
  }

  export default ControlSesion;