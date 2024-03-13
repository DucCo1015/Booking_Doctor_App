import React, { useEffect, useState } from "react";
import DoctorCard from "./../../components/Doctors/DoctorCard";
import { doctors } from "./../../assets/data/doctors.js";
import Testimonial from "../../components/Testimonial/Testimonial";
import { BASE_URL } from "../../../config.js";
import useFetchData from "../../hooks/useFetchData";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const Doctors = () => {
  const [query, setQuery] = useState("");
  const handleSearch = () =>{
    setQuery(query.trim())
    console.log("handleSearch")
  }

  const [debounceQuery, setDebounceQuery] = useState()

  useEffect(() =>{
    const timeout = setTimeout(() =>{
      setDebounceQuery(query)
    },700)
  },[query])


  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors?query=${debounceQuery}`);
  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input
              type="search"
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer"
              placeholder="Search Doctor by name or specification"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <button className="btn mt-0 rounded-[0px] rounded-r-md" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            {loading && <Loading />}
            {error && <Error />}
            {!loading &&
              !error &&
              doctors.map((doctor) => (
                <DoctorCard key={doctor._id} doctor={doctor} />
              ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our patient say</h2>
            <p className="txt__para text-center">
              World-class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>

          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Doctors;
