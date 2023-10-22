export default function ArchiveButton({ id, onArchiveHandler }) {
  return (
    <button
      onClick={() => onArchiveHandler(id)}
      className="note-item__archive-button"
    >
      Arsipkan
    </button>
  );
}
