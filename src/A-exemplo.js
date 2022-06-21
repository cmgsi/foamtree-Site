import React from "react";

class UserComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleButtonClick = () => {
    const fetchUserEmail = async () => {
      const response = await fetch("/emails");
      const { email } = await response.json();
      this.setState({
        email
      });
    };
    fetchUserEmail();
  };

  render() {
    return (
      <div>
      <h1>A user < /h1>
        < p > { this.state.email } < /p>
        < button onClick = { this.handleButtonClick } > Fetch Email < /button>
          < /div>
    );
  }
}