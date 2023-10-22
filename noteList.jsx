import NoteItem from "./noteItem";

export default function NotesList(props) {
  return (
    <div className="notes-list">
      {props.data.map((contact) => (
        <NoteItem
          onDeleteHandler={props.onDeleteHandler}
          onArchiveHandler={props.onArchiveHandler}
          id={contact.id}
          key={contact.id}
          {...contact}
        />
      ))}
    </div>
  );
}
