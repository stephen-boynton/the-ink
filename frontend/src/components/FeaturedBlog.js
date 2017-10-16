import React from "react";
import "../styles/FeaturedBlog.css";

export default function FeaturedBlog(props) {
  return (
    <div className="FeaturedBlog col-4-4">
      <img src={props.image} />
      <div className="FB-content">
        <h3>
          <span>FEATURED: </span>Title
        </h3>
        <h3>
          <span>author: </span>Author
        </h3>
        <p>
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla
          sit amet nisl tempus convallis quis ac lectus. Curabitur non nulla sit
          amet nisl tempus convallis quis ac lectus. Sed porttitor lectus nibh.
          Cras ultricies ligula sed magna dictum porta. Pellentesque in ipsum id
          orci porta dapibus. Curabitur aliquet quam id dui posuere blandit.
        </p>
      </div>
    </div>
  );
}
