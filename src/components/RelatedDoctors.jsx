import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const RelatedDoctors = ({ docId, speciality }) => {
  const doctors = useSelector((state) => state.doctor.doctors);
  const [relDoc, setRelDoc] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDoc(doctorData);
    }
  }, [doctors, docId, speciality]);

  // Function to handle navigation and scrolling
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <div className="grid w-full gap-4 px-3 pt-5 grid-cols-auto gap-y-6 sm:px-0">
        {relDoc?.length > 0 ? (
          relDoc.slice(0, 5).map((item) => (
            <div
              key={item._id}
              onClick={() => handleNavigation(`/appointment/${item._id}`)}
              className="overflow-hidden border border-blue-200 cursor-pointer rounded-xl hover:translate-y-[-10px] transition-all duration-500"
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
        onClick={() => handleNavigation("/doctors")}
        className="px-12 py-3 mt-10 text-gray-600 rounded-full bg-blue-50"
      >
        More
      </button>
    </div>
  );
};

export default RelatedDoctors;
