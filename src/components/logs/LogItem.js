import React from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { deleteLog, setCurrent } from "../../redux/actions/logActions";
import Materialize from "materialize-css/dist/js/materialize.min.js";
const LogItem = ({ log, deleteLog, setCurrent }) => {
  const onDelete = () => {
    deleteLog(log.id);
    Materialize.toast({ html: "Log Deleted" });
  };

  return (
    <li className="collection-item" style={flex}>
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
          onClick={() => setCurrent(log)}
        >
          {log.message}
        </a>
        <div className="grey-text" style={{ marginTop: "5px" }}>
          <span className="black-text">ID #{log.id}</span> last updated by{" "}
          <span className="black-text">{log.tech}</span> on{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
        </div>
      </div>
      <div>
        <a href="#!" onClick={onDelete} className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

const flex = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};
export default connect(null, { deleteLog, setCurrent })(LogItem);
