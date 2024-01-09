import NoteItem from "./noteItem";

export default function NotesList(props) {
  if (props.data.length === 0) {
    return <p className="notes-list__empty-message">Tidak ada catatan</p>;
  } else {
    return (
      <div className="notes-list">
        {props.data.map((contact) => (
          <NoteItem
            onDeleteHandler={props.onDeleteHandler}
            onArchiveHandler={props.onArchiveHandler}
            id={contact.id}
            archived={contact.archived}
            key={contact.id}
            {...contact}
          />
        ))}
      </div>
    );
  }
}
