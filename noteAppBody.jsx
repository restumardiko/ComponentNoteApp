import NoteInput from "./noteInput";
import NotesList from "./noteList";

export default function NoteAppBody(props) {
  const datas = props.datas;
  if (datas.length === 0) {
    return (
      <div className="note-app__body">
        <NoteInput addNote={props.addNote} />
        <h1>Tidak ada catatan</h1>
      </div>
    );
  } else {
    return (
      <div className="note-app__body">
        <NoteInput addNote={props.addNote} />
        <h2>Catatan Aktif</h2>
        <NotesList
          onDeleteHandler={props.onDeleteHandler}
          onArchiveHandler={props.onArchiveHandler}
          data={datas.filter(function (data) {
            return data.archived == false;
          })}
        />
        <h2>Arsip</h2>
        <NotesList
          onDeleteHandler={props.onDeleteHandler}
          onArchiveHandler={props.onArchiveHandler}
          data={datas.filter(function (data) {
            return data.archived == true;
          })}
        />
      </div>
    );
  }
}
