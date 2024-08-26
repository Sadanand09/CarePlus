import React, {useEffect, useState} from "react";
import axios from "axios";

import PatientCard from "../../components/PatientCard/PatientDetails";

function Admin() {
    const [patients, setPatients] = useState([]);

    const patientDetails = async () => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_API_URL}/careplus`
            );
            setPatients(response.data.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        patientDetails();
    }, []);

    return (
        <div className="">
            <div>
                {/* Logo */}
                <img
                    src="/assets/icons/logo-full.svg"
                    height={1000}
                    width={1000}
                    className="m-20 h-10 w-fit"
                    alt="Logo"
                />
                {/* Welcome Message */}
                <div className="ms-20">
                    <h1 className="text-4xl font-semibold">Welcome, Admin</h1>
                    <p>Start your day by messaging new appointments</p>
                </div>
            </div>
            {/* Patient Table */}
            <div>
                <div className="w-full mt-11 container mx-auto my-4 p-4 text-md shadow-md w-200vw overflow-x-auto">
                    {/* Map through patients and display each one */}
                    {patients.map((patient) => {
                        const {
                            _id,
                            name,
                            email,
                            mob_no,
                            dob,
                            gender,
                            address,
                            occupation,
                            emergencyname,
                            emergencynum,
                            physician,
                            ins_prov,
                            ins_num,
                            allergy,
                            current_med,
                            family_med_his,
                            past_med_his,
                            id_type,
                            id_num,
                            image,
                        } = patient;
                        return (
                            <PatientCard
                                key={_id}
                                _id={_id}
                                name={name}
                                dob={dob}
                                mob_no={mob_no}
                                email={email}
                                physician={physician}
                                gender={gender}
                                address={address}
                                occupation={occupation}
                                emergencyname={emergencyname}
                                emergencynum={emergencynum}
                                ins_prov={ins_prov}
                                ins_num={ins_num}
                                allergy={allergy}
                                current_med={current_med}
                                family_med_his={family_med_his}
                                past_med_his={past_med_his}
                                id_type={id_type}
                                id_num={id_num}
                                image={image}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Admin;
