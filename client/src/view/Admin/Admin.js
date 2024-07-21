import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PatientCard from '../../components/PatientCard/PatientCard';

function Admin() {
    const [patients, setPatients] = useState([]);

    const loadData = async () => {
        try {
            const response = await axios.get("http://localhost:5000/careplus");
            setPatients(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <img
                src="/assets/icons/logo-full.svg"
                height={1000}
                width={1000}
                className="m-12 h-10 w-fit"
            />
            <div className="ms-20">
                <h1 className="text-4xl font-semibold">Welcome, Admin</h1>
                <p>Start day with messaging new appointments</p>
            </div>
            <div className="w-screen mt-11 container mx-auto my-4 p-4 text-lg shadow-md w-200vw overflow-x-auto">
                <table className="table-fixed ">
                    <thead className=' border-b-2 border-gray-200'>
                        <tr>
                            <th className="p-5 text-xl text-left font-semibold tracking-wide">Patient</th>
                            <th className="p-5 text-xl text-left font-semibold tracking-wide">Date</th>
                            <th className="p-5 text-xl text-left font-semibold tracking-wide">Phone</th>
                            <th className="p-5 text-xl text-left font-semibold tracking-wide">Email</th>
                            <th className="p-5 text-xl text-left font-semibold tracking-wide">Doctor</th>
                            <th className="p-5 text-xl text-left font-semibold tracking-wide">Gender</th>
                            <th className="p-5 text-xl text-left font-semibold tracking-wide">Address</th>
                            <th className="p-5 text-xl text-left font-semibold tracking-wide">Occupation</th>
                            <th className="p-5 text-xl text-left font-semibold tracking-wide">Emergency name</th>
                            <th className="p-5 text-xl text-left font-semibold tracking-wide">Emergency num</th>
                            <th className="p-5 text-xl text-left font-semibold tracking-wide">Insurance</th>
                            <th className="p-5 text-xl text-left font-semibold tracking-wide">Insurance number</th>
                            <th className="p-5 text-xl text-left font-semibold tracking-wide">Allergies</th>
                            <th className="p-5 text-xl text-left font-semibold tracking-wide">Current Med.</th>
                            <th className="p-5 text-xl text-left font-semibold tracking-wide">Family Med. History</th>
                            <th className="p-5 text-xl text-left font-semibold tracking-wide">Past Med. History</th>
                            <th className="p-5 text-xl text-left font-semibold tracking-wide">Id type</th>
                            <th className="p-5 text-xl text-left font-semibold tracking-wide">Id number</th>
                            

                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient, index) => {
                            const { _id, name,
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
                                id_num } = patient;
                            return (
                                <PatientCard
                                    key={_id}
                                    index={index}
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
                                />
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Admin;
