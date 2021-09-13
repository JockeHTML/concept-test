import React from "react";

const Text = ({ getUser }) => {
  const { name, email } = getUser;
  return (
    <div className="text-list">
      <div>
        <p>{name}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Text;
