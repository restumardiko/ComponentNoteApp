import ArchiveButton from "./archivedButton";
import DeleteButton from "./deleteButton";

export default function NoteItem(props) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{props.title}</h3>
        <p className="note-item__date">{props.createdAt}</p>
        <p className="note-item__body">{props.body}</p>
      </div>
      <div className="note-item__action">
        <DeleteButton id={props.id} onDeleteHandler={props.onDeleteHandler} />
        <ArchiveButton
          id={props.id}
          archived={props.archived}
          onArchiveHandler={props.onArchiveHandler}
        />
      </div>
    </div>
  );
}
