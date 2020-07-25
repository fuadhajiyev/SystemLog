import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {addTech} from "../../redux/actions/techActions";
import Materialize from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = ({addTech}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      Materialize.toast({ html: "Please enter the first and last name" });
    } else {
      addTech({
        firstName,
        lastName
      })
      Materialize.toast({ html: `${firstName} ${lastName} was added as a tech` });
      //Clear Fields
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>New Technician</h4>
        <div className="row">
          <div className="input-field" style={{ margin: "30px 0 0 0" }}>
            <input
              type="text"
              name="message"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field" style={{ margin: "30px 0 0 0" }}>
            <input
              type="text"
              name="message"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer" style={{ padding: "0 18px" }}>
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue waves-light btn"
        >
          Enter{" "}
        </a>
      </div>
    </div>
  );
};

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
};

export default connect(null, { addTech })(AddTechModal);
