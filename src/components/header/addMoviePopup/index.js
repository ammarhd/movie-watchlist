import React from "react";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";

const AddMovie = (props) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);

    e.target.reset();
  };

  return (
    <div className="popup-menu">
      <div className="form ">
        <div className="f-title">
          <h2>Add a movie!</h2>
        </div>

        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                placeholder="TITLE"
                name="title"
                ref={register({ required: true })}
              />
            </div>
            <div className="form-group">
              <label>Img URL</label>
              <input
                type="text"
                className="form-control"
                placeholder="Img url"
                name="image"
                ref={register}
              />
            </div>
            <div className="form-group">
              <label>Comment</label>
              <input
                type="text"
                className="form-control"
                placeholder="Comment"
                name="comment"
                ref={register}
              />
            </div>

            <button type="submit" id="close" className="btn btn-primary">
              ADD
            </button>
            <button
              className="btn btn-danger"
              onClick={props.closePopup}
              id="close"
            >
              Close
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
