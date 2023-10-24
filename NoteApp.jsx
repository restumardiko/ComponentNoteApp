import NoteAppBody from "./noteAppBody";
import NoteAppHeader from "./noteAppHeader";
import { getInitialData } from "../utils";
import { showFormattedDate } from "../utils";
import React from "react";

// main data save in array
const mainData = getInitialData();
console.log(mainData);

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: getInitialData(),
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }
  onAddNoteHandler({ title, body }) {
    //
    const rawData = {
      id: +new Date(),
      title,
      body,
      createdAt: showFormattedDate(+new Date()),
      archived: false,
    };
    mainData.push(rawData);
    console.log(mainData);
    this.setState((prevState) => {
      return {
        datas: [
          ...prevState.datas,
          // {
          //   id: +new Date(),
          //   title,
          //   body,
          //   createdAt: showFormattedDate(+new Date()),
          //   archived: false,
          // },
          rawData,
        ],
      };
    });
  }

  onDeleteHandler(id) {
    const datas = this.state.datas.filter((data) => data.id !== id);
    mainData = datas;
    console.log(mainData);
    this.setState({ datas });
  }

  onArchiveHandler(id) {
    const datas = this.state.datas.filter((data) => data.id !== id);
    const data = this.state.datas.filter((data) => data.id === id);
    if (data[0].archived === false) {
      data[0].archived = true;
      const lastDatas = datas.push(data[0]);

      this.setState({ lastDatas });
    } else {
      data[0].archived = false;

      const lastDatas = datas.push(data[0]);
      this.setState({ lastDatas });
    }
  }
  onSearch(event) {
    console.log(event.target.value);
    const datas = this.state.datas.filter((data) =>
      data.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    console.log(datas);

    this.setState({ datas });
  }

  render() {
    return (
      <>
        <NoteAppHeader onSearch={this.onSearch} />
        <NoteAppBody
          datas={this.state.datas}
          addNote={this.onAddNoteHandler}
          onArchiveHandler={this.onArchiveHandler}
          onDeleteHandler={this.onDeleteHandler}
        />
      </>
    );
  }
}
export default NoteApp;
