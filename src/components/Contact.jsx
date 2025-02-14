import { FaPhone, FaUser } from "react-icons/fa";
import styles from "./Contact.module.css";

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
      <li className={styles.item}>
        <div>
          <p>
            <FaUser style={{ marginRight: "10px" }} />
            {name}
          </p>

          <p>
            <FaPhone style={{ marginRight: "10px" }} />
            {number}
          </p>
        </div>
        <button className={styles.button} onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </li>
    </>
  );
};

export default Contact;
