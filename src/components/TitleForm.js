import React from "react";

import { connect } from "react-redux";
import { updateTitle, updateNewTitle } from "../actions/titleActions";

const TitleForm = (props) => {
  return (
    <div>
      <input
        className="title-input"
        type="text"
        name="newTitleText"
        value={props.newTitle}
        onChange={(e) => props.updateNewTitle(e.target.value)}
      />
      <button onClick={() => props.updateTitle(props.newTitle)}>
        Update title
      </button>
    </div>
  );
};

const addStateToProps = (state) => {
  return {
    newTitle: state.title.newTitle,
  };
};

export default connect(addStateToProps, { updateNewTitle, updateTitle })(
  TitleForm
);
