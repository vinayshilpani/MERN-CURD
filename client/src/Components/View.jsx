import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const View = () => {
  const [data, setData] = useState({});
  const getDataFun = async () => {
    try {
      axios
        .get("/getData")
        .then((res) => {
          setData(res.data);
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

  ///

  // const [upData, setUpData] = useState({
  //   newName: "",
  //   newPost: "",
  //   newDisc: "",
  //   dataId: "",
  //   newStatus: "",
  // });

  // let name, value;

  // const handleUpdateData = (e) => {
  //   name = e.target.name;
  //   value = e.target.value;
  //   setUpData({ ...upData, [name]: value });
  // };

  //   const handleImgInp = (e) => {
  //     setUpData({ ...upData, newImg: e.target.files[0] });
  //   };

  // const updateTestimonials = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("newName", upData.newName);
  //   formData.append("newPost", upData.newPost);
  //   formData.append("newDisc", upData.newDisc);
  //   formData.append("newStatus", upData.newStatus);
  //   formData.append("dataId", upData.dataId);
  //   // formData.append("newImg", upData.newImg);

  //   if (!upData.newName || !upData.newPost || !upData.newDisc) {
  //     return alert("Please Fill all the Fields");
  //   }

  //   axios
  //     .post("/update", formData)
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const [img, setImg] = useState();
  // const fillModal = (e) => {

  //   setImg(e.target.getAttribute("data-img"));
  //   setUpData({ ...upData, dataId: e.target.getAttribute("data-id") });
  //   setUpData({ ...upData, newName: e.target.getAttribute("data-name")});
  //   setUpData({ ...upData, newPost: e.target.getAttribute("data-post")});
  //   setUpData({ ...upData, newDisc: e.target.getAttribute("data-disc")});
  //   setUpData({ ...upData, newStatus: e.target.getAttribute("data-status")});
  // };

  return (
    <>
      <div className="px-3">
        <div className="d-flex" style={{justifyContent:"space-between",alignItems:"center"}}>
        <div>
        <h3 className="text-center mb-3 mt-2"> Testimonials Dashboard </h3>
        </div>
        <div>
          <Link to={'/add'} className="btn btn-dark me-3"> ADD </Link>
          <Link to={'/'} className="btn btn-dark"> Home </Link>
        </div>
        
        </div>
        <div className="table-responsive">
          <table
            className="table"
            style={{
              borderRadius: "15px",
              overflow: "hidden",
              // background: "#283048",
              // background: "-webkit-linear-gradient(to right, #859398, #283048)",
              background: " linear-gradient(to right, #859398, #283048)",
              color: "white",
            }}
          >
            <thead>
              <tr style={{ height: "50px" }}>
                <th style={{ width: "100px" }}> Profile </th>
                <th style={{ width: "120px" }}> Name </th>
                <th style={{ width: "120px" }}> Post </th>
                <th> Disc </th>
                <th style={{ width: "120px" }}> Created Date </th>
                <th style={{ width: "150px" }}> Updated Date </th>
                <th style={{ width: "70px" }}> Status </th>
                <th style={{ width: "60px" }}> Edit </th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 && (
                <>
                  {data.map((dbData) => (
                    <tr key={dbData.id}>
                      <td>
                        <img
                          src={"upload/" + dbData.img}
                          alt=""
                          style={{ width: "100px", borderRadius: "50%" }}
                        />
                      </td>
                      <td> {dbData.name} </td>
                      <td> {dbData.post} </td>
                      <td> {dbData.disc} </td>
                      <td> {dbData.cDate} </td>
                      <td> {dbData.upDate} </td>
                      <td> {dbData.status} </td>
                      <td>
                        <Link to={`/update/${dbData._id}`}>
                          <i class="lni lni-pencil-alt" style={{color:"white"}}></i>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default View;
