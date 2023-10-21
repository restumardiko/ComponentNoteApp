import NoteItem from "./noteItem";

export default function NotesList(props) {
  return (
    <div className="notes-list">
      {props.data.map((contact) => (
        <NoteItem
          onDeleteHandler={props.onDeleteHandler}
          onArchiveHandler={props.onArchiveHandler}
          key={contact.id}
          {...contact}
        />
      ))}
    </div>
  );
}
