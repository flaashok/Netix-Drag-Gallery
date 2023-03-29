import React, { useState } from "react";
import Box from "./Card";
import "./App.css";

const App = () => {
  const [dragId, setDragId] = useState();
  const [viewModal, setViewModal] = useState(null)
  const [boxes, setBoxes] = useState([
    {
      "type": "bank-draft",
      "title": "Bank Draft",
      "position": 0,
      "user":"https://media4.giphy.com/media/CjmvTCZf2U3p09Cn0h/giphy.gif"
  },
  {
      "type": "bill-of-lading",
      "title": "Bill of Lading",
      "position": 1,
      "user":"https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGI2ZWUwMmE5NjRhNGM5NTFlNzRkOWJiMjBiYzliZTA5ZTI1MTk4MSZjdD1n/v6aOjy0Qo1fIA/giphy.gif"
  },
  {
      "type": "invoice",
      "title": "Invoice",
      "position": 2,
      "user":"https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGVkZDM4YWM5MWE4NjliZDUxZDFiODdjMTY1NzdlMjhjMGYzZDU0MyZjdD1n/mlvseq9yvZhba/giphy.gif"
  },
  {
      "type": "bank-draft-2",
      "title": "Bank Draft 2",
      "position": 3,
      "user":"https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWEwOWU2YTE0ZGM4OTA4NzhjNjkzNzAwZDkwYzhmOGU3ZjBlYTM3ZSZjdD1n/sr8jYZVVsCmxddga8w/giphy.gif"
  },
  {
      "type": "bill-of-lading-2",
      "title": "Bill of Lading 2",
      "position": 4,
      "user":"https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWRjOGRhYzc1ZDVjNWQzMTMwYmYzMWQ2ODQ3ODk4MTlhMjNkMDc2MiZjdD1n/Nm8ZPAGOwZUQM/giphy.gif"
  }
  ]);

  const handleDrag = (ev) => {
    setDragId(ev.currentTarget.id);
  };

  const handleDrop = (ev) => {
    const dragBox = boxes.find((box) => box.type === dragId);
    const dropBox = boxes.find((box) => box.type === ev.currentTarget.id);

    const dragBoxOrder = dragBox.position;
    const dropBoxOrder = dropBox.position;

    const newBoxState = boxes.map((box) => {
      if (box.type === dragId) {
        box.position = dropBoxOrder;
      }
      if (box.type === ev.currentTarget.id) {
        box.position = dragBoxOrder;
      }
      return box;
    });

    setBoxes(newBoxState);
  };

  return (
    <>
      <div className="App">
      {boxes
        .sort((a, b) => a.position - b.position)
        .map((box) => (
         <div onClick={() => setViewModal(box)} key={box.type}>
         <Box
            boxTitle={box.title}
            boxType={box.type}
            boxImg={box.user}
            handleDrag={handleDrag}
            handleDrop={handleDrop}
          />
         </div>
        ))}
    </div>
    <div className="popupMenu" style={{display: viewModal ? 'flex' : 'none'}} onClick={() => setViewModal(null)}>
      <div className="popImg" onClick={() => setViewModal(null)}>
      {viewModal?.type === viewModal?.type ? <img src={viewModal?.user} alt={viewModal?.title}/> : () => setViewModal(null) }
      </div>
    </div>
    </>
  );
};

export default App;
