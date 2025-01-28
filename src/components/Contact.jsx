import React from "react";

const Contact = () => {
  const Contacts = {
    phoneno: "+91 9130646130",
    email: "Imhjaiswal7@gmail.com",
  };

  return (
    <>
      <div className="pb-2 px-28 ">
        <p className="border-t border-stone-900"></p>
      </div>
      <div className="py-8 px-50">
        <h2 className="my-6 text-center text-4xl">Get in Touch</h2>
        <div className="text-center tracking-tighter">
          <p className="pb-2">{Contacts.phoneno}</p>
          <p>{Contacts.email}</p>
        </div>
      </div>
    </>
  );
};

export default Contact;
