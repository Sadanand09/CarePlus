import React, { useEffect, useState } from 'react'
import axios from 'axios';

function PatientCard({ _id, name,
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
  id_num }) {





  return (
    <>
      <tr className=''>

        <td className="p-5 text-xl text-gray-200">{name}</td>
        <td className="p-5 text-xl text-gray-200">{dob}</td>
        <td className="p-5 text-xl text-gray-200">{mob_no}</td>
        <td className="p-5 text-xl text-gray-200">{email}</td>
        <td className="p-5 text-xl text-gray-200">{physician}</td>
        <td className="p-5 text-xl text-gray-200">{gender}</td>
        <td className="p-5 text-xl text-gray-200">{address}</td>
        <td className="p-5 text-xl text-gray-200">{occupation}</td>
        <td className="p-5 text-xl text-gray-200">{emergencyname}</td>
        <td className="p-5 text-xl text-gray-200">{emergencynum}</td>
        <td className="p-5 text-xl text-gray-200">{ins_prov}</td>
        <td className="p-5 text-xl text-gray-200">{ins_num}</td>
        <td className="p-5 text-xl text-gray-200">{allergy}</td>
        <td className="p-5 text-xl text-gray-200">{current_med}</td>
        <td className="p-5 text-xl text-gray-200">{family_med_his}</td>
        <td className="p-5 text-xl text-gray-200">{past_med_his}</td>
        <td className="p-5 text-xl text-gray-200">{id_type}</td>
        <td className="p-5 text-xl text-gray-200">{id_num}</td>


      </tr>
    </>
  );
}

export default PatientCard;
