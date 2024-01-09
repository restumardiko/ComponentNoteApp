import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    if (event.target.value.length >= 51) {
      this.setState(() => {
        return {
          title: this.state.title,
        };
      });
    } else {
      this.setState(() => {
        return {
          title: event.target.value,
        };
      });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();

    this.props.addNote(this.state);
  }

  render() {
    return (
      <div className="note-input">
        <h2>Buat catatan</h2>
        <form onSubmit={this.onSubmitEventHandler}>
          <p className="note-input__title__char-limit">
            Sisa karakter: {50 - this.state.title.length}
          </p>
          <input
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
            type="text"
            placeholder="Ini adalah judul ..."
            required
          />
          <textarea
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Tuliskan catatanmu disini ..."
            required
          ></textarea>
          <button type="submit">Buat</button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
