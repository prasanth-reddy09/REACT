const Contact = () => {
  return (
    <div>
      {/* <h1>Contact Us</h1> */}
      <h2 className="font-bold text-3xl">Prasanth Reddy</h2>
      <form>
        <input
          className="border border-black px-2 ml-2"
          type="text"
          placeholder="name"
        ></input>
        <input
          className="border border-black px-2 ml-2"
          type="text"
          placeholder="messege"
        ></input>
        <button className="border border-black px-2 ml-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
