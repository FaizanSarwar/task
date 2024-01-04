import React from "react";

const Education = () => {
  return (
    <div className="ms-2 mt-5">
      <h5 style={{fontSize:'14px'}}>Which type of “Education” content do you want to create?</h5>


  <div className="row me-5">
        <div className="col-sm-3 col-md-3">
        <select class="form-select  w-100  mt-3" aria-label="Default select example">
        <option selected>Select</option>

        <option>Gamified learning</option>
        <option value="1">Education systems</option>
        <option value="2">Bilingual benefits</option>
        <option value="3">Escape rooms</option>
        <option value="4">Standardized testing</option>
        <option value="5">Arts in schools</option>
        <option value="6">Tech bootcamps</option>
        <option value="7">Homeschooling dynamics</option>
        <option value="8">Mentorship importance</option>
        <option value="9">Educational equity</option   >
        <option value="10">Mobile learning</option   >

      </select>
    </div>
    </div>
    </div>
  );
};

export default Education;
