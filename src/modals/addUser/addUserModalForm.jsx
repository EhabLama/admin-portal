import React from "react";

export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input className="form-control" id="username" required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          id="password"
          placeholder="Must contain letters and numbers!"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="tag">Tag</label>
        <input className="form-control" id="tag" />
      </div>

      <div className="form-group">
        <label htmlFor="groupname">Role</label>
        <input
          className="form-control"
          id="groupname"
          placeholder="Admins, Product_users or Business_users"
        />
      </div>

      <div className="form-group">
        <button className="form-control btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
// export default Form;
