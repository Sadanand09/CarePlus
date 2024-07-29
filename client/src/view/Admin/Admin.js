import React, { useEffect, useState } from 'react';
import axios from 'axios';

import PatientCard from '../../components/PatientCard/PatientDetails';

function Admin() {
    const [patients, setPatients] = useState([]);


    const patientDetails = async () => {
        try {
           
            const response = await axios.get(`http://localhost:${process.env.REACT_APP_PORT}/careplus`);
            setPatients(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
            
        }
    };

    useEffect(() => {
        
        patientDetails();
    }, []);

    return (
        <div>
            {/* Logo */}
            <img
                src="/assets/icons/logo-full.svg"
                height={1000}
                width={1000}
                className="ms-20 m-12 h-10 w-fit"
                alt="Logo"
            />
            {/* Welcome Message */}
            <div className="ms-20">
                <h1 className="text-4xl font-semibold">Welcome, Admin</h1>
                <p>Start your day by messaging new appointments</p>
            </div>
            {/* Patient Table */}
            <div className="w-screen mt-11 container mx-auto my-4 p-4 text-lg shadow-md w-200vw overflow-x-auto">
                <table className="table-fixed">
                    <thead className='border-b-2 border-gray-200'>
                        <tr>
                            {/* Table Headers */}
                            {[
                                'Patient', 'Date', 'Phone', 'Email', 'Doctor', 'Gender',
                                'Address', 'Occupation', 'Emergency Name', 'Emergency Num',
                                'Insurance', 'Insurance Number', 'Allergies', 'Current Med.',
                                'Family Med. History', 'Past Med. History', 'ID Type', 'ID Number'
                            ].map(header => (
                                <th
                                    key={header}
                                    className="p-5 text-xl text-left font-semibold tracking-wide"
                                >
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {/* Map through patients and display each one */}
                        {patients.map((patient) => {
                            const {
                                _id, name, email, mob_no, dob, gender, address, occupation,
                                emergencyname, emergencynum, physician, ins_prov, ins_num,
                                allergy, current_med, family_med_his, past_med_his, id_type, id_num
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
