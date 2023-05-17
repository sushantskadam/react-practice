import React, { useState } from "react";
import FileUpload from "../HelperComponents/FileUpload";
import "./AddPropChild.css";
import { RiDeleteBin6Line } from "react-icons/ri";

function AddPropChild({ step, setStep }) {
  // console.log({ step });
  const [selected, setSelected] = useState();
  const [plandocs, setPlandocs] = useState([]);
  const [extradocs, setExtradocs] = useState([]);
  // console.log(plandocs);
  const [featProp, setFeatProp] = useState([
    {
      id: 1,
      title: "Residential Properties ",
      desc: "Find and invest in a property you could own! ",
      img: "cardImg1.png",
    },
    {
      id: 2,
      title: "Commercial Properties ",
      desc: "Change the way you work with our workspaces, designed especially for better productivity. ",
      img: "cardImg2.png",
    },
  ]);
  const deleteFile = (i) => {
    console.log(i);
    let docss = [...plandocs];
    docss.splice(i, 1);
    setPlandocs(docss);
  };

  const deleteFileExtra = (i) => {
    console.log(i);
    let docss = [...extradocs];
    docss.splice(i, 1);
    setExtradocs(docss);
  };
  const docsHandler = (document) => {
    setPlandocs([...plandocs, document]);
  };
  const extraDocsHandler = (document) => {
    setExtradocs([...extradocs, document]);
  };
  switch (step) {
    case 0:
      return (
        <div>
          {/* <div className="row"><div className="text-white col-6"><img src=""></img>1st card</div><div className="text-white col-6"> 2nd card</div></div> */}
          <div className="row">
            <p className="addPropDesc ">Which property do you want to add?</p>
            {featProp.map((card) => {
              // console.log(`../../assets/images/${card.img}`);
              return (
                <>
                  <div className="col-lg-5">
                    <div
                      className={`add_prop_card ${
                        selected == card.id
                          ? "add_prop_card_border_green"
                          : "add_prop_card_border"
                      }`}
                      onClick={() => setSelected(card.id)}
                    >
                      <img
                        className="card_img"
                        src={require(`../../assets/images/${card.img}`)}
                      ></img>
                      <div className="add_prop_card_text">
                        {" "}
                        <h2>{card.title}</h2> <p>{card.desc} </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
          <button className="prop_btn_save my-5" onClick={() => setStep(1)}>
              Save & Continue
            </button>
        </div>
      );
    case 1: {
      return (
        <>
          <p className="addPropDesc">Property Details</p>
          <div className="form-width">
            <div className="row mt-2">
              <div className="col-6 inp_form">
                <label className="mb-2">Property Name</label>
                <input className="prop_details_inp " placeholder="Enter Name" />
              </div>
              <div className="col-6 inp_form">
                <label className="mb-2">Category</label>
                <input className="prop_details_inp" />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-6 inp_form">
                <label className="mb-2">Area</label>
                <div className="d-flex">
                  {" "}
                  <input
                    className="prop_details_inp"
                    placeholder="Select Number"
                  />
                  <button className="sqft_btn"> SQ. FT. </button>{" "}
                </div>
              </div>
              <div className="col-6 inp_form">
                <label className="mb-2">Total Units</label>
                <input
                  className="prop_details_inp"
                  placeholder="Enter Number"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-6 inp_form">
                <label className="mb-2">No. of Buildings </label>
                <input
                  className="prop_details_inp"
                  placeholder="Select Number"
                />
              </div>
              <div className="col-6 inp_form">
                <label className="mb-2"> No. of Floors </label>
                <input
                  className="prop_details_inp"
                  placeholder="Enter Number"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-6 inp_form">
                <label className="mb-2">Apartment Type (BHKs)</label>
                {/* <input
                  className="prop_details_inp"
                  placeholder="Select Number"
                /> */}
                <select name="cars" className="prop_details_dropdown" id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
              <div className="col-6 inp_form">
                <label className="mb-2">Property Status</label>
                {/* <input className="prop_details_inp" /> */}
                <select name="cars" className="prop_details_dropdown" id="cars">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="opel">Opel</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-6 inp_form">
                <label className="mb-2">Year of Construction </label>
                <input className="prop_details_inp" placeholder="Enter Name" />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-12 inp_form">
                <label className="mb-2">Property Address </label>
                <input
                  className="prop_details_inp"
                  placeholder="Enter Address"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-4 inp_form">
                <label className="mb-2">Pincode </label>
                <input
                  className="prop_details_inp"
                  placeholder="Enter Address"
                />
              </div>
              <div className="col-4 inp_form">
                <label className="mb-2">State</label>
                <input
                  className="prop_details_inp"
                  placeholder="Enter Address"
                />
              </div>
              <div className="col-4 inp_form">
                <label className="mb-2">City</label>
                <input
                  className="prop_details_inp"
                  placeholder="Enter Address"
                />
              </div>
            </div>
            <button className="prop_btn_save my-5" onClick={() => setStep(2)}>
              Save & Continue
            </button>
          </div>
        </>
      );
    }
    case 2: {
      return (
        // <div>helllo</div>
        <>
          <div>
            <h5 className="fw-bold">2D Floor Plan</h5>
            {/* <FileUpload docs={plandocs} setState={setPlandocs} /> */}
            <FileUpload
              docs={plandocs}
              onChange={docsHandler}
              inputId={"inputId1"}
            />
          </div>
          {plandocs.map((item, i) => (
            <>
              <div className="uploaded_file ">
                <div className="d-flex justify-content-between">
                  <span>
                    <img
                      width={20}
                      height={20}
                      src={require(`../../assets/images/fileLogos/${item.logo}`)}
                    />{" "}
                    {item.name}
                  </span>
                  <span onClick={() => deleteFile(i)}>
                    <RiDeleteBin6Line color="#FF6666" />
                  </span>{" "}
                </div>
                <div className="d-flex justify-content-between mt-1">
                  {" "}
                  <div
                    class="progress  mt-2"
                    style={{ height: "4px", width: "89%", color: "#121212" }}
                  >
                    <div
                      class="progress-bar bg-success"
                      role="progressbar"
                      aria-valuenow="100"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: "100%", color: "blue", color: "#00C08A" }}
                    ></div>
                  </div>
                  <small>100%</small>
                </div>{" "}
              </div>
            </>
          ))}
          <div className="mt-5">
            <h5 className="fw-bold">Additional Images and Videos </h5>
            <small className="mb-3">
              We need images to display for potential property buyers and also
              for purposes of <br />
              3D viewing for the same. Please upload HD images and videos if
              possible.{" "}
            </small>
            <FileUpload
              docs={extradocs}
              onChange={extraDocsHandler}
              inputId={"inputId2"}
            />
            {extradocs.length > 0 && (
              <table class="table table-dark w-75">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Name</th>
                    <th scope="col">Size</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {extradocs.map((item, i) => (
                    <>
                      {" "}
                      <tr>
                        <th className=" d-flex justify-content-center">
                          {" "}
                          <img
                            src={item.image}
                            alt="Preview"
                            width={90}
                            height={90}
                            className="preview_image"
                          />
                        </th>
                        <td>
                          {" "}
                          <span>{item.name}</span>{" "}
                        </td>
                        <td>{item.size}</td>
                        <td>
                          {" "}
                          <span onClick={() => deleteFileExtra(i)}>
                            <RiDeleteBin6Line color="#FF6666" />
                          </span>{" "}
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            )}

            {/* {extradocs.map((item, i) => (
              <>
                <div className="uploaded_file ">
                <img src={item.image} alt="Preview" width={50} height={50} />
                  <div className="d-flex justify-content-between">
     

                    <span>{item.name}</span>
                    <span onClick={() => deleteFileExtra(i)}>
                      <RiDeleteBin6Line color="#FF6666" />
                    </span>{" "}
                  </div>
                  <div className="d-flex justify-content-between mt-1">
                    {" "}
                    <div
                      class="progress  mt-2"
                      style={{ height: "4px", width: "89%", color: "#121212" }}
                    >
                      <div
                        class="progress-bar bg-success"
                        role="progressbar"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{
                          width: "100%",
                          color: "blue",
                          color: "#00C08A",
                        }}
                      ></div>
                    </div>
                    <small>100%</small>
                  </div>{" "}
                </div>
              </>
            ))} */}
            <button className="prop_btn_save my-5" onClick={() => setStep(3)}>
              Save & Continue
            </button>
          </div>
        </>
      );
    }
  }
}

export default AddPropChild;
