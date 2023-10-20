// note item
export default function NoteItem() {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title"></h3>
        <p className="note-item__date"></p>
        <p className="note-item__body"></p>
      </div>
      <div className="note-item__action">
        <button className="note-item__delete-button">Delete</button>
        <button className="note-item__archive-button">Arsipkan</button>
      </div>
    </div>
  );
}
