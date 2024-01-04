import React from "react";

const Sport = () => {
  return (
    <div className="ms-2 mt-5">
      <h5 style={{ fontSize: "14px" }}>
        Which type of “Sport” content do you want to create?
      </h5>

      <div className="row me-5">
        <div className="col-sm-3 col-md-3">
        <select class="form-select  w-100   mt-3" aria-label="Default select example">        <option selected>Select</option>

        <option>Sports medicine</option>
        <option value="1">Team sociology</option>
        <option value="2">Olympic economics</option>
        <option value="3">Gender parity</option>
        <option value="4">Extreme sports</option>
        <option value="5">Fandom psychology</option>
        <option value="6">Sports business</option>
        <option value="7">Youth athletics</option>
        <option value="8">Data analytics</option>
        <option value="9">Doping ethics</option>
      </select>
    </div>
    </div>
    </div>
  );
};

export default Sport;
