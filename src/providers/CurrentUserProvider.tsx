import * as React from "react";

import API from "../helpers/api";
import CurrentUserContext from "../contexts/CurrentUserContext";

export default class CurrentUserProvider extends React.Component {
  state = {
    loggedInStatus: "NOT_LOGGED_IN",
    user: { role: "" },
    isLoading: true,
    loginUser: (user: {}) => {
      console.log("user res", user);
      this.setState({
        loggedInStatus: "LOGGED_IN",
        user: user
      });
    },
    logoutUser: () => {
      this.deleteUserSession();
    },
    toggleIsLoading: () => {
      this.setState({ isLoading: !this.state.isLoading });
    }
  };

  componentDidMount() {
    this.checkLoginStatus();
  }

  deleteUserSession() {
    API.delete("api/log_out", { withCredentials: true })
      .then((response: any) => {
        console.log("respons from logout", response);
        this.setState({ loggedInStatus: "NOT_LOGGED_IN" });
        window.location.href = "/";
      })
      .catch((error: any) => {
        console.log("Error in deleting session", error);
      });
  }

  checkLoginStatus() {
    API.get(`api/logged_in`, { withCredentials: true })
      .then((response: { data: { status: string; user: any } }) => {
        if (
          response.data.status === "logged_in" &&
          this.state.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: response.data.user
          });
        } else if (
          response.data.status === "not_logged_in" &&
          this.state.loggedInStatus === "LOGGED_IN"
        ) {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN"
          });
        }

        this.setState({
          isLoading: false
        });
      })
      .catch((error: any) => {
        console.log("checkLoginStatus error", error);
      });
  }

  render() {
    return (
      <CurrentUserContext.Provider value={this.state}>
        {this.props.children}
      </CurrentUserContext.Provider>
    );
  }
}
