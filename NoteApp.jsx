import NoteAppBody from "./noteAppBody";
import NoteAppHeader from "./noteAppHeader";
import { getInitialData } from "../utils";
import { showFormattedDate } from "../utils";
import React from "react";

// main data save in array ,mainData isolated from mainState,each main state change by add or delete,the mainData also change ,
// the importan rule is that the state only display the UI ..
let mainData = getInitialData();
//console.log(mainData);

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
    // console.log(mainData);
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
    const index = mainData.findIndex((x) => x.id === id);
    // console.log(index);
    mainData.splice(index, 1);
    //console.log(mainData);
    //console.log(mainData == datas);

    this.setState({ datas });
    //console.log(datas);
  }

  onArchiveHandler(id) {
    const datas = this.state.datas.filter((data) => data.id !== id);
    const data = this.state.datas.filter((data) => data.id === id);
    //maindata
    const remainsData = mainData.filter((data) => data.id !== id);
    const targetData = mainData.filter((data) => data.id === id);
    if (data[0].archived === false) {
      data[0].archived = true;
      const lastDatas = datas.push(data[0]);
      this.setState({ lastDatas });
      //console.log(this.state.datas);
      //maindata
      targetData[0].archived = true;
      remainsData.push(targetData[0]);
      mainData = remainsData;
      // console.log(mainData);
    } else {
      data[0].archived = false;

      const lastDatas = datas.push(data[0]);

      this.setState({ lastDatas });
      //maindata
      targetData[0].archived = false;
      remainsData.push(targetData[0]);
      mainData = remainsData;
      //console.log(this.state.datas);
      //console.log(mainData);
    }
  }
  onSearch(event) {
    //console.log(event.target.value);
    //
    const datas = mainData.filter((data) =>
      data.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    //console.log(datas);

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
