import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [data, setdata] = useState({
    name: "",
    post: "",
    disc: "",
    status: "",
  });

  let name, value;
  const handleInputData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setdata({ ...data, [name]: value });
  };

  const { id } = useParams("");
  const getDataFun = async () => {
    try {
      axios
        .get("/update/" + id)
        .then((res) => {
          setdata(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDataFun();
  }, []);

  const finalSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`/finalUpdate/${id}`, {
        name: data.name,
        post: data.post,
        disc: data.disc,
        status: data.status,
      })
      .then(() => {
        console.log("Done");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div
        className="container"
        style={{
          // background: "#283048",
          // background: "-webkit-linear-gradient(to right, #859398, #283048)",
          background: " linear-gradient(to right, #859398, #283048)",
          borderRadius: "15px",
        }}
      >
        <div className="row align-items-center py-5 my-2">
          <form action="" method="post" onSubmit={finalSubmit}>
            <div
              className="col-5 m-auto border py-3 px-5 text-center bg-white"
              style={{ borderRadius: "10px" }}
            >
              <h1> Update Testimonials </h1>
              <img
                src={"http://localhost:3000/upload/" + data.img}
                alt=""
                style={{ width: "100px", height: "100px", borderRadius: "50%" }}
                className="mb-4"
              />
              <input
                type="text"
                placeholder="name"
                className="form-control mb-4"
                onChange={handleInputData}
                value={data.name}
                name="name"
              />
              <input
                type="text"
                placeholder="post"
                className="form-control mb-4"
                onChange={handleInputData}
                value={data.post}
                name="post"
              />
              <input
                type="text"
                placeholder="disc"
                name="disc"
                className="form-control mb-4"
                onChange={handleInputData}
                value={data.disc}
              />
              <select
                name="status"
                id=""
                className="form-control mb-4"
                onChange={handleInputData}
                value={data.status}
              >
                <option value="1"> Active </option>
                <option value="0"> Inactive </option>
              </select>
              <button className="btn btn-primary" type="submit">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
