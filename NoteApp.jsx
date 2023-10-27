import NoteAppBody from "./noteAppBody";
import NoteAppHeader from "./noteAppHeader";
import { getInitialData } from "../utils";
import React from "react";

let mainData = getInitialData();

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
    const rawData = {
      id: +new Date(),
      title,
      body,
      createdAt: new Date(),
      archived: false,
    };
    mainData.push(rawData);
    this.setState((prevState) => {
      return {
        datas: [...prevState.datas, rawData],
      };
    });
  }

  onDeleteHandler(id) {
    const datas = this.state.datas.filter((data) => data.id !== id);
    const index = mainData.findIndex((x) => x.id === id);
    mainData.splice(index, 1);

    this.setState({ datas });
  }

  onArchiveHandler(id) {
    const datas = this.state.datas.filter((data) => data.id !== id);
    const data = this.state.datas.filter((data) => data.id === id);
    const remainsData = mainData.filter((data) => data.id !== id);
    const targetData = mainData.filter((data) => data.id === id);
    if (data[0].archived === false) {
      data[0].archived = true;
      const lastDatas = datas.push(data[0]);
      this.setState({ lastDatas });
      targetData[0].archived = true;
      remainsData.push(targetData[0]);
      mainData = remainsData;
    } else {
      data[0].archived = false;

      const lastDatas = datas.push(data[0]);

      this.setState({ lastDatas });
      targetData[0].archived = false;
      remainsData.push(targetData[0]);
      mainData = remainsData;
    }
  }
  onSearch(event) {
    const datas = mainData.filter((data) =>
      data.title.toLowerCase().includes(event.target.value.toLowerCase())
    );

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
