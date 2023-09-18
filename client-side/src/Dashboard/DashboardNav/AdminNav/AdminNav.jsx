import React, { useEffect } from "react";
import { FaHandHoldingMedical, FaHome, FaHouseUser } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";
import { BiSolidAddToQueue } from "react-icons/bi";
import { MdManageSearch, MdOutlineAirplaneTicket } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setAllBookings } from "../../../redux/features/bookingInfoSlice";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { setAllUserInfo } from "../../../redux/features/usersSlice";

const AdminNav = () => {
  const [axiosSecure] = UseAxiosSecure();
  const dispatch = useDispatch();
  const allBooking = useSelector((state) => state.userBookingInfo.allBookings);
  const bookingsRefetch = useSelector(
    (state) => state.userBookingInfo.bookingsRefetch
  );
  useEffect(() => {
    axiosSecure
      .get("/users")
      .then((response) => {
        dispatch(setAllUserInfo(response?.data))
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [axiosSecure]);


  useEffect(() => {
    fetch(`http://localhost:5000/allBookings`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(setAllBookings(data));
      });
  }, [bookingsRefetch]);

  return (
    <>
      <NavLink
        to="adminHome"
        className={({ isActive }) =>
          `flex items-center shadow-lg rounded-full px-4 py-2 mt-5 transition-colors duration-300 transform hover:bg-white hover:text-cyan-500 ${
            isActive
              ? "bg-white text-cyan-500 active:border rounded-full"
              : "text-white"
          }`
        }
      >
        <FaHouseUser className="w-5 h-5" />
        <span className="mx-4 font-medium">Admin Home</span>
      </NavLink>
      <NavLink
        to="manageUsers"
        className={({ isActive }) =>
          `flex items-center shadow-lg rounded-full px-4 py-2 mt-5 transition-colors duration-300 transform hover:bg-white hover:text-cyan-500 ${
            isActive
              ? "bg-white text-cyan-500 active:border rounded-full"
              : "text-white"
          }`
        }
      >
        <TiGroup className="w-5 h-5" />

        <span className="mx-4 font-medium">Manage Users</span>
      </NavLink>
      <NavLink
        to="addFlight"
        className={({ isActive }) =>
          `flex items-center shadow-lg rounded-full px-4 py-2 mt-5 transition-colors duration-300 transform hover:bg-white hover:text-cyan-500 ${
            isActive
              ? "bg-white text-cyan-500 active:border rounded-full"
              : "text-white"
          }`
        }
      >
        <BiSolidAddToQueue className="w-5 h-5" />

        <span className="mx-4 font-medium">Add Flight</span>
      </NavLink>
      <NavLink
        to="flightStatus"
        className={({ isActive }) =>
          `flex items-center shadow-lg rounded-full px-4 py-2 mt-5 transition-colors duration-300 transform hover:bg-white hover:text-gray-800 ${
            isActive
              ? "bg-white text-gray-800 active:border rounded-full"
              : "text-white"
          }`
        }
      >
        <MdManageSearch className="w-5 h-5" />

        <span className="mx-4 font-medium">Manage Flight</span>
      </NavLink>
      <NavLink
        to="insurance"
        className={({ isActive }) =>
          `flex items-center shadow-lg rounded-full px-4 py-2 mt-5 transition-colors duration-300 transform hover:bg-white hover:text-cyan-500 ${
            isActive
              ? "bg-white text-cyan-500 active:border rounded-full"
              : "text-white"
          }`
        }
      >
        <FaHandHoldingMedical className="w-5 h-5" />

        <span className="mx-4 font-medium">Insurance</span>
      </NavLink>
      <NavLink
        to="managebookings"
        className={({ isActive }) =>
          `flex items-center shadow-lg rounded-full px-4 py-2 mt-5 transition-colors duration-300 transform hover:bg-white hover:text-gray-800 ${
            isActive
              ? "bg-white text-gray-800 active:border rounded-full"
              : "text-white"
          }`
        }
      >
        <MdOutlineAirplaneTicket className="w-5 h-5" />

        <span className="mx-4 font-medium">Bookings</span>
      </NavLink>
      <NavLink
        to="account"
        className={({ isActive }) =>
          `flex items-center shadow-lg rounded-full px-4 py-2 mt-5 transition-colors duration-300 transform hover:bg-white hover:text-cyan-500 ${
            isActive
              ? "bg-white text-cyan-500 active:border rounded-full"
              : "text-white"
          }`
        }
      >
        <BsFillPersonFill className="w-5 h-5" />

        <span className="mx-4 font-medium">Account</span>
      </NavLink>
    </>
  );
};

export default AdminNav;
