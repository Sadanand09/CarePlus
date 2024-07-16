import React, { useEffect, useState } from 'react'
import axios from 'axios';

function PatientCard({ _id, name, dob, mob_no, email, physician }) {





  return (
    <>
      <tr>

        <td className="border p-10">{name}</td>
        <td className="border p-10">{dob}</td>
        <td className="border px-2 py-2">{mob_no}</td>
        <td className="border px-2 py-2">{email}</td>
        <td className="border px-2 py-2">{physician}</td>

      </tr>
    </>
  );
}

export default PatientCard;
