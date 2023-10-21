export default function Form() {
  return (
    <>
      <p className="note-input__title__char-limit">sisa karakter:{}</p>
      <input type="text" placeholder="Ini adalah judul ..." />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="Tuliskan catatanmu disini ..."
      ></textarea>
      <button type="submit">buat</button>
    </>
  );
}
