import React from "react";
import "../styles/SmallBlog.css";

export default function SmallBlog(props) {
  return (
    <div className="SmallBlog col-1-4">
      <h3>Title of this Blog Post</h3>
      <img src="https://az616578.vo.msecnd.net/files/2016/03/07/635929253515034235-1812155405_journal.jpg" />
      <div>
        <p>
          Proin eget tortor risus. Sed porttitor lectus nibh. Curabitur aliquet
          quam id dui posuere blandit. Vivamus suscipit tortor eget felis
          porttitor volutpat.
        </p>
      </div>
    </div>
  );
}
