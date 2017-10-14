import React from "react";
import "../styles/LatestBlog.css";

export default function LatestBlog(props) {
  return (
    <div className="LatestBlog col-2-4">
      <img src="https://www.webnode.com/blog/wp-content/uploads/2016/10/Blog-intro.jpg" />
      <div className="LB-content">
        <h2>Title of the Post</h2>
        <p>
          Quisque velit nisi, pretium ut lacinia in, elementum id enim.
          Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed
          magna dictum porta. Proin eget tortor risus.
        </p>
      </div>
    </div>
  );
}
