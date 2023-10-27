export default function NoteAppHeader({ onSearch }) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <div className="note-search">
        <input onChange={onSearch} type="text" placeholder="Cari catatan ..." />
      </div>
    </div>
  );
}
