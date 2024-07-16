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
            <div className="max-w-lg mx-auto my-4 p-4 rounded-lg shadow-md">
                <table className="table-fixed">
                    <thead>
                        <tr>
                            <th className=" px-2 py-2">Patient</th>
                            <th className=" px-2 py-2">Date</th>
                            <th className=" px-2 py-2">Phone</th>
                            <th className=" px-2 py-2">Email</th>
                            <th className=" px-2 py-2">Doctor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient) => {
                            const { _id, name, dob, mob_no, email, physician } = patient;
                            return (
                                <PatientCard
                                    key={_id}
                                    _id={_id}
                                    name={name}
                                    dob={dob}
                                    mob_no={mob_no}
                                    email={email}
                                    physician={physician}
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
