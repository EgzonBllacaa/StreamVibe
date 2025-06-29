import React, { useState } from "react";
import validator from "validator";
import ButtonCta from "../ButtonCta";
import SuccessModal from "../SuccessModal";

const SupportForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleValidation = () => {
    setSuccess(false);
    setError("");
    if (firstName.trim() === "") {
      setError("First name is mandatory");
      return false;
    }
    if (/\d/.test(firstName)) {
      setError("First name should only contain String");
      return false;
    }
    if (lastName.trim() === "") {
      setError("Last name is mandatory");
      return false;
    }
    if (/\d/.test(lastName)) {
      setError("Last name should only contain String");
      return false;
    }
    if (!validator.isEmail(email)) {
      setError("The email you provided is not valid");
      return false;
    }
    if (phoneNumber.trim() === "") {
      setError("Phone number must be filled in");
      return false;
    }
    if (phoneNumber.length > 15) {
      setError("Phone number is too long");
      return false;
    }

    if (message.length >= 500) {
      setError("Message is too long ");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      setError("");
      setLastName("");
      setFirstName("");
      setMessage("");
      setPhoneNumber("");
      setEmail("");
      setSuccess(true);
    }
  };
  return (
    <form
      className="flex flex-col items-end w-full gap-12 p-12 rounded-xl bg-black-06 border-1 border-black-15"
      onSubmit={handleSubmit}
    >
      <div className="flex w-full gap-12 ">
        <div className="w-full text-lg">
          <label
            className="block font-semibold text-absolute-white"
            htmlFor={firstName}
          >
            First Name
          </label>
          <input
            className="w-full p-5 rounded-lg text-gray bg-black-08 border-black-15 border-1"
            placeholder="Enter First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
          />
        </div>
        <div className="w-full">
          <label
            className="block font-semibold text-absolute-white"
            htmlFor={lastName}
          >
            Last Name
          </label>
          <input
            className="w-full p-5 rounded-lg text-gray bg-black-08 border-black-15 border-1"
            value={lastName}
            placeholder="Enter Last Name"
            onChange={(e) => setLastName(e.target.value)}
            type="text"
          />
        </div>
      </div>
      <div className="flex w-full gap-12">
        <div className="w-full">
          <label
            className="block font-semibold text-absolute-white"
            htmlFor={email}
          >
            Email
          </label>
          <input
            className="w-full p-5 rounded-lg text-gray bg-black-08 border-black-15 border-1"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
        </div>
        <div className="w-full">
          <label
            className="block font-semibold text-absolute-white"
            htmlFor={phoneNumber}
          >
            Phone Number
          </label>
          <input
            className="w-full p-5 rounded-lg text-gray bg-black-08 border-black-15 border-1"
            placeholder="Enter Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="number"
          />
        </div>
      </div>

      <div className="w-full">
        <label
          className="block font-semibold text-absolute-white"
          htmlFor={message}
        >
          Message
        </label>
        <textarea
          className="w-full p-5 rounded-lg text-gray bg-black-08 border-black-15 border-1"
          placeholder="Enter your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
        />
      </div>
      {error && <p>{error}</p>}
      <div className="transition-opacity duration-200 ease-in-out opacity-100">
        <SuccessModal
          isOpen={success}
          message={"Successfully submitted the form"}
          onClose={() => setSuccess(false)}
        />
      </div>
      <ButtonCta type="submit" children={"Send Message"} />
    </form>
  );
};

export default SupportForm;
