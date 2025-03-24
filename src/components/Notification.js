import {useEffect} from "react";


function Notification({message, type, onClose}) {
  useEffect(() => {
      if (message) {
          const timer = setTimeout(() => {
              onClose();
          }, 6000);
          return () => clearTimeout(timer);
      }
  }, [message, onClose]);

  if(!message) return null;

  return (
        <div className={`notification ${type}`}>
            <p>{message}</p>
            <button onClick={onClose}>Close</button>
        </div>
  );
}

export default Notification;