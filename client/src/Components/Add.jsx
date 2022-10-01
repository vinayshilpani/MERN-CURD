import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const Add = () => {
  const [data, setdata] = useState({
    name: "",
    post: "",
    disc: "",
    img: "",
  });

  let name, value;
  const handleInputData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setdata({ ...data, [name]: value });
  };

  const handleImg = (e) => {
    setdata({ ...data, img: e.target.files[0] });
  };

  const sendFormData = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("post", data.post);
    formData.append("disc", data.disc);
    formData.append("img", data.img);

    if (!data.name || !data.post || !data.disc || !data.img) {
      return alert("Please Fill all the Fields");
    }

    axios
      .post("/add", formData)
      .then((res) => {
        console.log(res.data);
        if (res.data === "please Fill All The Fields") {
          return alert("please fill all the fields");
        } else if (res.data === "DataSaved") {
          setdata({ name: "", post: "", disc: "", img:"" });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {/* <form action="" method="post">
        <input
          type="text"
          onChange={handleInputData}
          value={data.name}
          name={"name"}
          placeholder="Enter Name"
        />
        <input
          type="text"
          onChange={handleInputData}
          value={data.post}
          name={"post"}
          placeholder="Enter Post"
        />
        <input
          type="text"
          onChange={handleInputData}
          value={data.disc}
          name={"disc"}
          placeholder="Enter Discription"
        />

        <input
          type="file"
          name="img"
          onChange={handleImg}
          accept=".png,.jpg,.jpeg"
        />

        <button type="submit" onClick={sendFormData}>
          Submit
        </button>
      </form> */}

      <div
        className="container"
        style={{
          // background: "#283048",
          // background: "-webkit-linear-gradient(to right, #859398, #283048)",
          background: " linear-gradient(to right, #859398, #283048)",
          borderRadius: "15px",
        }}
      >
        <div className="row align-items-center py-5 my-5">
          <form action="" method="post">
            <div
              className="col-5 m-auto border py-3 px-5 text-center bg-white"
              style={{ borderRadius: "10px" }}
            >
              <h1> Add Testimonials </h1>

              <input
                type="text"
                onChange={handleInputData}
                value={data.name}
                name={"name"}
                placeholder="Enter Name"
                className="form-control mb-2"
              />
              <input
                type="text"
                onChange={handleInputData}
                value={data.post}
                name={"post"}
                placeholder="Enter Post"
                className="form-control mb-2"
              />
              {/* <input
          type="text"
          onChange={handleInputData}
          value={data.disc}
          name={"disc"}
          placeholder="Enter Discription"
          className="form-control mb-2"
        /> */}
              <textarea
                cols="30"
                rows="5"
                className="form-control mb-3"
                onChange={handleInputData}
                value={data.disc}
                placeholder={"Enter Discription"}
                name={"disc"}
              ></textarea>

              <input
                type="file"
                name="img"
                onChange={handleImg}
                accept=".png,.jpg,.jpeg"
                className="form-control mb-2"
              />

              <button className="btn btn-primary" onClick={sendFormData}>
                Submit
              </button>
              <div className="d-flex" style={{justifyContent:"space-between"}}>
                  <Link to={'/view'} className="btn btn-dark"> Dashboard </Link>
                  <Link to={'/'} className="btn btn-dark"> Home </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Add;
