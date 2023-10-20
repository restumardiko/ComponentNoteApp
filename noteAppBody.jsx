import NoteInput from "./noteInput";
import NotesList from "./noteList";

export default function NoteAppBody() {
  return (
    <div className="note-app__body">
      <NoteInput />
      <h2>Catatan Aktif</h2>
      <NotesList isArchived="false" />
      <h2>Arsip</h2>
      <NotesList isArchived="true" />
    </div>
  );
}
