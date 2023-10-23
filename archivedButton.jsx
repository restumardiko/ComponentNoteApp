import React from "react";

export default function ArchiveButton({ id, onArchiveHandler, archived }) {
  let arP = "Arsipkan";
  if (archived === true) {
    arP = "Pindahkan";
  }
  return (
    <button
      onClick={() => onArchiveHandler(id)}
      className="note-item__archive-button"
    >
      {arP}
    </button>
  );
}
