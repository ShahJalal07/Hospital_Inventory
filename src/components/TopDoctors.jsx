import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { doctors as doctorData } from "../assets/assets";
import { setDoctors } from "../redux/Slices/DoctorSlice";

const TopDoctors = () => {
  const doctors = useSelector((state) => state.doctor.doctors);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (doctorData) {
      dispatch(setDoctors(doctorData));
    }
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="text-sm text-center sm:w-1/3">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="grid w-full gap-4 px-3 pt-5 grid-cols-auto gap-y-6 sm:px-0">
        {doctors?.length > 0 ? (
          doctors.slice(0, 10).map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="overflow-hidden border border-blue-200 cursor-pointer rounded-xl hover:translate-y-[-10px] transition-all duration-500"
              key={item._id}
            >
              <img
                className="bg-blue-50"
                src={item.image}
                alt={item.name || "Doctor"}
              />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-lg font-medium text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-600">{item.speciality}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-600">No doctors available.</p>
        )}
      </div>
      <button
        onClick={() => navigate("/doctors") && scrollTo(0, 0)}
        //Note: If scrollTo is not working then use this method: onClick={() => navigate("/doctors"); scrollTo(0, 0)
        className="px-12 py-3 mt-10 text-gray-600 rounded-full bg-blue-50 "
      >
        More
      </button>
    </div>
  );
};

export default TopDoctors;
