import NoteAppBody from "./noteAppBody";
import NoteAppHeader from "./noteAppHeader";
import { getInitialData } from "../utils";
import React from "react";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: getInitialData(),
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }
  onAddNoteHandler({ title, body }) {
    console.log("mantap bor kena");
    this.setState((prevState) => {
      return {
        datas: [
          ...prevState.datas,
          {
            id: +new Date(),
            title,
            body,
            createdAt: +new Date(),
            archived: false,
          },
        ],
      };
    });
  }

  render() {
    return (
      <>
        <NoteAppHeader />
        <NoteAppBody datas={this.state.datas} addNote={this.onAddNoteHandler} />
      </>
    );
  }
}
export default NoteApp;
