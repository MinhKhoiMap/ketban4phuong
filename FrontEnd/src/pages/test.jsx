import React from "react";

const test = () => {
  return (
    <form
      action="http://localhost:3002/test"
      method="POST"
      encType="multipart/form-data"
    >
      <input type="text" name="username" />
      <input type="password" name="password" />
      <input type="file" name="avatar" accept=".png, .jgp, .webp" multiple />
      <button type="submit">submit</button>
    </form>
  );
};

export default test;
