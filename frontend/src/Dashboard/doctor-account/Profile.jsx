import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import uploadImageToCloudinary from "../../utils/uploadClouding.js";
import { BASE_URL, token } from "../../../config.js";
import { toast } from "react-toastify";

const Profile = ({ doctorData }) => {
  const [fromData, setFromData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    bio: "",
    gender: "",
    specialization: "",
    ticketPrice: 0,
    qualifications: [],
    experiences: [],
    timeSlots: [],
    photo: "",
    about: ""
  });

  useEffect(() =>{
    setFromData({
    name: doctorData?.name,
    email: doctorData?.email,
    phone: doctorData?.phone,
    bio: doctorData?.bio,
    gender: doctorData?.gender,
    specialization: doctorData?.specialization,
    ticketPrice: doctorData?.ticketPrice,
    qualifications: doctorData?.qualifications,
    experiences: doctorData?.experiences,
    timeSlots: doctorData?.timeSlots,
    photo: doctorData?.photo,
    about: doctorData?.about
    })
  },[doctorData])

  const handleInputChange = (e) => {
    setFromData({ ...fromData, [e.target.name]: e.target.value });
  };

  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const data = await uploadImageToCloudinary(file);

    setFromData({ ...fromData, photo: data?.url });
  };

  const updateProfileHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/doctors/${doctorData._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(fromData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message);
      }

      toast.success(result.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  //reusable function for adding item
  const addItem = (key, item) => {
    setFromData((prevFormData) => ({
      ...prevFormData,
      [key]: [...prevFormData[key], item],
    }));
  };

  // reusable input change function
  const handelReusableInputChangeFunction = (key, index, event) => {
    const { name, value } = event.target;

    setFromData((prevFormData) => {
      const updateItems = [...prevFormData[key]];

      updateItems[index][name] = value;

      return {
        ...prevFormData,
        [key]: updateItems,
      };
    });
  };

  //reusable function for deleting item
  const deleteItems = (key, index) => {
    setFromData((prevFormData) => ({
      ...prevFormData,
      [key]: prevFormData[key].filter((_, i) => i !== index),
    }));
  };

  const addQualification = (e) => {
    e.preventDefault();
    addItem("qualifications", {
      startingDate: "",
      endingDate: "",
      degree: "",
      university: "",
    });
  };

  const handleQualificationsChange = (event, index) => {
    handelReusableInputChangeFunction("qualifications", index, event);
  };

  const deleteQualifications = (e, index) => {
    e.preventDefault();
    deleteItems("qualifications", index);
  };

  const addExperience = (e) => {
    e.preventDefault();
    addItem("experiences", {
      startingDate: "",
      endingDate: "",
      position: "",
      hospital: "",
    });
  };

  const handleExperienceChange = (event, index) => {
    handelReusableInputChangeFunction("experiences", index, event);
  };

  const deleteExperience = (e, index) => {
    e.preventDefault();
    deleteItems("experiences", index);
  };

  const addTimeSlots = (e) => {
    e.preventDefault();
    addItem("timeSlots", {
      day: "",
      startingTime: "",
      endingTime: "",
    });
  };

  const handleTimeSlotsChange = (event, index) => {
    handelReusableInputChangeFunction("timeSlots", index, event);
  };

  const deleteTimeSlots = (e, index) => {
    e.preventDefault();
    deleteItems("timeSlots", index);
  };

  return (
    <div>
      <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10 ">
        Profile information
      </h2>

      <form>
        <div className="mb-5">
          <p className="form__label">Name*</p>
          <input
            type="text"
            name="name"
            value={fromData.name}
            onChange={handleInputChange}
            placeholder="Full name"
            className="form__input"
          />
        </div>

        <div className="mb-5">
          <p className="form__label">Email*</p>
          <input
            type="email"
            name="email"
            value={fromData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="form__input"
            readOnly
            aria-readonly
            disabled
          />
        </div>

        <div className="mb-5">
          <p className="form__label">Phone number*</p>
          <input
            type="text"
            name="phone"
            value={fromData.phone}
            onChange={handleInputChange}
            placeholder="Phone number"
            className="form__input"
          />
        </div>

        <div className="mb-5">
          <p className="form__label">Bio*</p>
          <input
            type="text"
            name="bio"
            value={fromData.bio}
            onChange={handleInputChange}
            placeholder="Bio"
            className="form__input"
            maxLength={100}
          />
        </div>

        <div className="mb-5">
          <div className="grid grid-cols-3 gap-5 mb-[30px]">
            <div>
              <p className="form__label">Gender</p>
              <select
                name="gender"
                value={fromData.gender}
                onChange={handleInputChange}
                className="form__input py-3.5"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <p className="form__label">Specialization</p>

              <select
                name="specialization"
                value={fromData.specialization}
                className="form__input py-3.5"
                onChange={handleInputChange}
              >
                <option value="">Select</option>
                <option value="surgeon">Surgeon</option>
                <option value="neurologist">Neurologist</option>
                <option value="dermatologist">Dermatologist</option>
              </select>
            </div>

            <div>
              <p className="form__label">Ticket Price*</p>

              <input
                type="number"
                value={fromData.ticketPrice}
                placeholder="100"
                name="ticketPrice"
                className="form__input"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div className="mb-5">
          <p className="form__label">Qualification*</p>

          {fromData.qualifications?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form__label">StartingDate*</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={fromData.startingDate}
                      className="form__input"
                      onChange={(e) => handleQualificationsChange(e, index)}
                    />
                  </div>

                  <div>
                    <p className="form__label">EndingDate*</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={fromData.endingDate}
                      className="form__input"
                      onChange={(e) => handleQualificationsChange(e, index)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div>
                    <p className="form__label">Degree*</p>
                    <input
                      type="text"
                      name="degree"
                      value={fromData.degree}
                      className="form__input"
                      onChange={(e) => handleQualificationsChange(e, index)}
                    />
                  </div>

                  <div>
                    <p className="form__label">University*</p>
                    <input
                      type="text"
                      name="university"
                      value={fromData.university}
                      className="form__input"
                      onChange={(e) => handleQualificationsChange(e, index)}
                    />
                  </div>
                </div>

                <button
                  className="bg-red-600 p-2 rounded-full text-[18px] mt-2 mb-[30px] cursor-pointer text-white"
                  onClick={(e) => deleteQualifications(e, index)}
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={addQualification}
            className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer"
          >
            Add Qualification
          </button>
        </div>

        <div className="mb-5">
          <p className="form__label">Experience*</p>

          {fromData.experiences?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="form__label">StartingDate*</p>
                    <input
                      type="date"
                      name="startingDate"
                      value={fromData.startingDate}
                      className="form__input"
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>

                  <div>
                    <p className="form__label">EndingDate*</p>
                    <input
                      type="date"
                      name="endingDate"
                      value={fromData.endingDate}
                      className="form__input"
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-5 mt-5">
                  <div>
                    <p className="form__label">Position*</p>
                    <input
                      type="text"
                      name="position"
                      value={fromData.position}
                      className="form__input"
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>

                  <div>
                    <p className="form__label">Hospital*</p>
                    <input
                      type="text"
                      name="hospital"
                      value={fromData.hospital}
                      className="form__input"
                      onChange={(e) => handleExperienceChange(e, index)}
                    />
                  </div>
                </div>

                <button
                  onClick={(e) => deleteExperience(e, index)}
                  className="bg-red-600 p-2 rounded-full text-[18px] mt-2 mb-[30px] cursor-pointer text-white"
                >
                  <AiOutlineDelete />
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={addExperience}
            className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer"
          >
            Add Experiences
          </button>
        </div>

        <div className="mb-5">
          <p className="form__label">Time Slots*</p>

          {fromData.timeSlots?.map((item, index) => (
            <div key={index}>
              <div>
                <div className="grid grid-cols-2 md:grid-cols-4 mb-[30px] gap-5 ">
                  <div>
                    <p className="form__label">Day*</p>

                    <select
                      name="day"
                      value={fromData.day}
                      className="form__input py-3.5"
                      onChange={(e) => handleTimeSlotsChange(e, index)}
                    >
                      <option value="">Select</option>
                      <option value="saturday">Saturday</option>
                      <option value="sunday">Sunday</option>
                      <option value="monday">Monday</option>
                      <option value="tuesday">Tuesday</option>
                      <option value="wednesday">Wednesday</option>
                      <option value="thursday">Thursday</option>
                      <option value="friday">Friday</option>
                    </select>
                  </div>

                  <div>
                    <p className="form__label">Starting Time*</p>
                    <input
                      type="time"
                      name="startingTime"
                      value={fromData.startingTime}
                      className="form__input"
                      onChange={(e) => handleTimeSlotsChange(e, index)}
                    />
                  </div>

                  <div>
                    <p className="form__label">Ending Time*</p>
                    <input
                      type="time"
                      name="endingTime"
                      value={fromData.endingTime}
                      className="form__input"
                      onChange={(e) => handleTimeSlotsChange(e, index)}
                    />
                  </div>

                  <div className="flex items-center">
                    <button
                      onClick={(e) => deleteTimeSlots(e, index)}
                      className="bg-red-600 p-2 rounded-full text-[18px] mt-7 cursor-pointer text-white"
                    >
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={addTimeSlots}
            className="bg-[#000] py-2 px-5 rounded text-white h-fit cursor-pointer"
          >
            Add Time Slots
          </button>
        </div>

        <div className="mb-5">
          <p className="form__label">About*</p>
          <textarea
            name="about"
            rows={5}
            value={fromData.about}
            placeholder="Write about you"
            onChange={handleInputChange}
            className="form__input"
          ></textarea>
        </div>

        <div className="mb-5 flex items-center gap-3">
          {fromData?.photo && (
            <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-between">
              <img
                src={fromData.photo}
                alt=""
                className="w-full rounded-full"
              />
            </figure>
          )}
          <div className="relative w-[130px] h-[50px] ">
            <input
              type="file"
              name="photo"
              id="customFile"
              accept=".jpg, .png"
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handleFileInputChange}
            />
            <label
              htmlFor="customFile"
              className="absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem]  py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
            >
              Upload Photo
            </label>
          </div>
        </div>

        <div className="mt-7">
          <button
            type="submit"
            onClick={updateProfileHandler}
            className="bg-primaryColor text-white text-[18px] leading-[30px] w-full py-3 px-4 rounded-lg"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
