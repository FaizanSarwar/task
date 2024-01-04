import React from "react";

const Fun = () => {
  return (
    <div className="ms-2 mt-5">
      <h5 style={{fontSize:'14px'}}>Which type of “Fun” content do you want to create?</h5>
      <div className="row me-5">
        <div className="col-sm-3 col-md-3">
        <select class="form-select  w-100  mt-3" aria-label="Default select example">
    <option selected>Select</option>
    <option>Board games revival</option>
    <option value="1">Comedy trends</option>
    <option value="2">Amusement parks</option>
    <option value="3">Escape rooms</option>
    <option value="3">Street performances</option>
    <option value="3">Online challenges</option>
    <option value="3">Festivals impact</option>
    <option value="3">Crafting movement</option>
    <option value="3">Social gaming</option>
    <option value="3">Virtual reality</option>
</select>

        </div>
      </div>

    
    </div>
  );
};

export default Fun;
