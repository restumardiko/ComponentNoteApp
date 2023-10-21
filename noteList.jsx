import NoteItem from "./noteItem";

export default function NotesList({ data }) {
  return (
    <div className="notes-list">
      {data.map((contact) => (
        <NoteItem key={contact.id} {...contact} />
      ))}
    </div>
  );
}
