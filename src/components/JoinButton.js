import { useState, useEffect } from "react";
import("./joinButton.css");

function joinButton() {
  const [newMessagesAreShown, setNewMessagesAreShown] = useState(false);

  useEffect(() => {
    setMessagesAreShown(true);
  }, []);

  return <div onClick={handleClick}>Join</div>;
}
