import React, { Component } from "react";
import SinglePost from "../components/SinglePost";
import axios from "axios";
import ProfileIndividual from "../components/ProfileIndividual";
import "../styles/ProfileView.css";

export default class ProfileView extends Component {
  constructor() {
    super();
    this.state = {
      profile: {
        username: "",
        name: "",
        bio: "",
        id: "",
        avatar: ""
      },
      posts: []
    };
  }
  _getUser = () => {
    const { username } = this.props.match.params;
    axios.get("/users/" + username).then(user => {
      console.log(user);
      this.setState({ profile: user.data });
    });
  };

  componentDidMount() {
    this._getUser();
    console.log(this.state.profile);
  }

  render() {
    return (
      <div className="ProfileView">
        <ProfileIndividual profile={this.state.profile} />
        {this.state.posts.map(post => {
          return <SinglePost key={post.post_id} />;
        })}
      </div>
    );
  }
}
