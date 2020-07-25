import React, { useState, useEffect } from "react";
import TechSelectOptions from "../techs/TechSelectOptions"
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Materialize from "materialize-css/dist/js/materialize.min.js";
import { updateLog } from "../../redux/actions/logActions";

const EditLogModal = ({ current, updateLog }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState("");
  const [tech, setTech] = useState("");

  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === "" || tech === "") {
      Materialize.toast({ html: "Please enter a message" });
    } else {
      const upLog = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date(),
      };
      updateLog(upLog);
      Materialize.toast({ html: `Log updated by ${tech}` });
    }

    //Clear Fields
    setMessage("");
    setTech("");
    setAttention(false);
  };

  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field" style={{ margin: "30px 0 0 0" }}>
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="" disabled     className="option">
                Select Technician
              </option>
              <TechSelectOptions />
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in blue"
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
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
EditLogModal.propTypes = {
  current: PropTypes.object,
  updateLog: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  current: state.log.current,
});

const modalStyle = {
  width: "75%",
  height: "75%",
};

export default connect(mapStateToProps, { updateLog })(EditLogModal);