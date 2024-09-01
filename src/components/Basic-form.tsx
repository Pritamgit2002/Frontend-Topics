import React, { useState } from "react";

const BasicForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
      setSubmitSuccess("Please fill all the fields.");
      alert(submitSuccess);
      setIsSubmitting(false);
    }

    try {
      const response = await fetch(
        "https://www.greatfrontend.com/api/questions/contact-form",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        setSubmitSuccess(
          "Thank you for your message. We will get back to you soon."
        );
        alert(submitSuccess);
        setIsSubmitting(false);
        console.log(formData);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitSuccess("An error occured. Please try again later.");
        alert(submitSuccess);
        setIsSubmitting(false);
      }
    } catch (error) {
      alert("Something went wrong");
      console.error("error : ", error);
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex flex-col items-start gap-4 w-80 "
    >
      <div className=" flex items-center justify-start gap-x-2 ">
        <label htmlFor="name" className=" text-xl ">
          Name:
        </label>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className=" border-2 border-black rounded-lg p-1 "
        />
      </div>
      <div className=" flex items-center justify-start gap-x-2 ">
        <label htmlFor="name" className=" text-xl ">
          Email:
        </label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className=" border-2 border-black rounded-lg p-1 "
        />
      </div>
      <div className=" flex items-start justify-start gap-x-2 ">
        <label htmlFor="name" className=" text-xl ">
          Message:
        </label>
        <textarea
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className=" border-2 border-black rounded-lg p-1 "
        />
      </div>
      <button
        type="submit"
        className=" w-max p-2 text-lg font-medium bg-black text-white rounded-lg "
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default BasicForm;
