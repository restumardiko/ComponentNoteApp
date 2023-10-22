export default function ArchiveButton(props) {
  return (
    <button
      onClick={() => onArchiveHandler()}
      className="note-item__archive-button"
    >
      Arsipkan
    </button>
  );
}
