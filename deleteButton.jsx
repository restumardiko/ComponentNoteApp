export default function DeleteButton({ id, onDeleteHandler }) {
  return (
    <button
      onClick={() => onDeleteHandler(id)}
      className="note-item__delete-button"
    >
      Delete
    </button>
  );
}
