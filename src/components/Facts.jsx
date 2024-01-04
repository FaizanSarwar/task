import React from "react";

const Facts = () => {
  return (
    <div className="ms-2 mt-5">
      <h5 style={{fontSize:'14px'}}>Which type of “Facts” content do you want to create?</h5>

      <div className="row me-5">
        <div className="col-sm-3 col-md-3">
        <select class="form-select  w-100  mt-3" aria-label="Default select example">
        <option selected>Select</option>

        <option>Animal oddities</option>
        <option value="1">Everyday science</option>
        <option value="2">Historical obscurities</option>
        <option value="3">Science myths</option>
        <option value="4">Human body facts</option>
        <option value="5">Oceanic discoveries</option>
         <option value="7">Space exploration</option>
        <option value="8">Ancient tech</option>
        <option value="9">World laws</option   >
        <option value="9">Bizarre news</option   >

 
      </select>
    </div>
    </div>
    </div>
  );
};

export default Facts;
