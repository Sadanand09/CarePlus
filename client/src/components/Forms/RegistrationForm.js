import React, { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function RegistrationForm() {
    const navigate = useNavigate();

    
    const handleSubmit = () => {
        navigate('/message');
    };



    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mob_no, setMob_no] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [occupation, setOccupation] = useState('');
    const [emergencyname, setEmergencyname] = useState('');
    const [emergencynum, setEmergencynum] = useState('');
    const [physician, setPhysician] = useState('');
    const [ins_prov, setIns_prov] = useState('');
    const [ins_num, setIns_num] = useState('');
    const [allergy, setAllergy] = useState('');
    const [current_med, setCurrent_med] = useState('');
    const [family_med_his, setFamily_med_his] = useState('');
    const [past_med_his, setPast_med_his] = useState('');
    const [id_type, setId_type] = useState('');
    const [id_num, setId_num] = useState('');


    const addPatient = async () => {
        try {
            const response = await axios.post(`http://localhost:${process.env.REACT_APP_PORT}/careplus`, {
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
                id_num
            });
            toast.success(response.data.message);
            setName('');
            setEmail('');
            setMob_no('');
            setDob('');
            setGender('');
            setAddress('');
            setOccupation('');
            setEmergencyname('');
            setEmergencynum('');
            setPhysician(''); 
            setIns_prov('');
            setIns_num('');
            setAllergy('');
            setCurrent_med('');
            setFamily_med_his('');
            setPast_med_his('');
            setId_type('');
            setId_num('');
        } catch (error) {
            toast.error('Failed to add patient');
        }
    };

    const handleClick = () => {
        addPatient();
        handleSubmit();
    };

    return (
        <>
            <h1 className='font-semibold text-2xl mt-11 mb-7 '>Personal Information</h1>
            <div className='flex bg-[#1A1D21] w-8/12 rounded-lg border border-gray-600'>
                <img className='px-3' src='/assets/icons/user.svg ' />
                <input
                    className='w-full py-3 px-2 bg-transparent outline-none'
                    placeholder='John Doe'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className='flex w-8/12 mt-7 '>
                <div className='w-1/2 '>
                    <p className='mb-3 text-sm text-gray-300'>Email Address</p>
                    <div className='flex bg-[#1A1D21] rounded-lg border  border-gray-600'>
                        <img className='px-3' src='/assets/icons/email.svg ' />
                        <input
                            className='py-3 px-2  w-full outline-none bg-transparent '
                            placeholder='johndoe@example.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                    </div>
                </div>
                <div className='ms-6 w-1/2'>
                    <p className='mb-3 text-sm text-gray-300'>Phone Number</p>
                    <div className='bg-[#1A1D21] rounded-lg border  border-gray-600'>
                        <input
                            className='py-3 px-2  w-full outline-none bg-transparent '
                            placeholder='1234567890'
                            value={mob_no}
                            onChange={(e) => setMob_no(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className='flex w-8/12 mt-7'>
                <div className='w-1/2'>
                    <p className='mb-3 text-sm text-gray-300'>Date of Birth</p>
                    <div className='bg-[#1A1D21] rounded-lg border  border-gray-600'>
                        <input
                            className='p-2 w-full bg-transparent outline-none'
                            placeholder='YYYY-MM-DD'
                            type='date'
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                        />

                    </div>
                </div>
                <div className='ms-6 w-1/2'>
                    <p className='mb-3 text-sm text-gray-300'>Gender</p>
                    <div className='flex items-center'>
                        <label className='mr-4'>
                            <input
                                type='radio'
                                name='gender'
                                value='Male'
                                checked={gender === 'Male'}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            Male
                        </label>
                        <label className='mr-4'>
                            <input
                                type='radio'
                                name='gender'
                                value='Female'
                                checked={gender === 'Female'}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            Female
                        </label>
                        <label>
                            <input
                                type='radio'
                                name='gender'
                                value='Other'
                                checked={gender === 'Other'}
                                onChange={(e) => setGender(e.target.value)}
                            />
                            Other
                        </label>
                    </div>
                </div>
            </div>

            <div className='flex w-8/12 mt-7'>
                <div className='w-1/2'>
                    <p className='mb-3 text-sm text-gray-300'>Address</p>
                    <div className='bg-[#1A1D21] rounded-lg border  border-gray-600'>

                        <input
                            className='py-3 px-2 w-full bg-transparent outline-none'
                            placeholder='14 street, New York, NY-5101'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                </div>
                <div className='ms-6 w-1/2'>
                    <p className='mb-3 text-sm text-gray-300'>Occupation</p> {/* corrected typo here */}
                    <div className='bg-[#1A1D21] rounded-lg border  border-gray-600'>

                        <input
                            className='py-3 px-2 w-full bg-transparent outline-none'
                            placeholder='Software Engineer'
                            value={occupation}
                            onChange={(e) => setOccupation(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className='flex w-8/12 mt-7'>
                <div className='w-1/2'>
                    <p className='mb-3 text-sm text-gray-300'>Emergency contact name</p>
                    <div className='bg-[#1A1D21] rounded-lg border  border-gray-600'>
                        <input
                            className='py-3 px-2 w-full bg-transparent outline-none'
                            placeholder="Guardian's name"
                            value={emergencyname}
                            onChange={(e) => setEmergencyname(e.target.value)}
                        />

                    </div>
                </div>
                <div className='ms-6 w-1/2'>
                    <p className='mb-3 text-sm text-gray-300'>Emergency contact number</p>
                    <div className='bg-[#1A1D21] rounded-lg border  border-gray-600'>

                        <input
                            className='py-3 px-2 w-full bg-transparent outline-none'
                            placeholder='1234567890'
                            value={emergencynum}
                            onChange={(e) => setEmergencynum(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <h1 className='font-semibold text-2xl mt-7'>Medical Information</h1>

            <div className='mt-7'>
                <select
                    className='py-3 px-2 w-8/12 bg-[#1A1D21] rounded-lg border border-gray-600 outline-none'
                    placeholder='Select a physician'
                    value={physician}
                    onChange={(e) => setPhysician(e.target.value)}>
                    <option value='John Green'>John Green</option>
                    <option value='Leila Cameron'>Leila Cameron</option>
                    <option value='David Livingston'>David Livingston</option>
                    <option value='Evan Peter'>Evan Peter</option>
                    <option value='Jane Powell'>Jane Powell</option>
                    <option value='Alex Ramirez'>Alex Ramirez</option>
                    <option value='Jasmine Lee'>Jasmine Lee</option>
                    <option value='Alyana Cruz'>Alyana Cruz</option>
                    <option value='Hardik Sharma'>Hardik Sharma</option>
                </select>
            </div>

            <div className='flex w-8/12 mt-7'>
                <div className='w-1/2'>
                    <p className='mb-3 text-sm text-gray-300'>Insurance Provider</p>
                    <div className='bg-[#1A1D21] rounded-lg border  border-gray-600'>

                        <input
                            className='py-3 px-2 w-full bg-transparent  outline-none'
                            placeholder='Insurance Provider'
                            value={ins_prov}
                            onChange={(e) => setIns_prov(e.target.value)}
                        />
                    </div>
                </div>
                <div className='ms-6 w-1/2'>
                    <p className='mb-3 text-sm text-gray-300'>Insurance Number</p>
                    <div className='bg-[#1A1D21] rounded-lg border  border-gray-600'>

                        <input
                            className='py-3 px-2 w-full bg-transparent  outline-none'
                            placeholder='Insurance Number'
                            value={ins_num}
                            onChange={(e) => setIns_num(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className='flex w-8/12 mt-7'>
                <div className='w-1/2'>
                    <p className='mb-3 text-sm text-gray-300'>Allergies</p>
                    <div className='bg-[#1A1D21] rounded-lg border  border-gray-600'>

                        <input
                            className='py-3 px-2 w-full bg-transparent outline-none'
                            placeholder='Allergies'
                            value={allergy}
                            onChange={(e) => setAllergy(e.target.value)}
                        />
                    </div>
                </div>
                <div className='ms-6 w-1/2'>
                    <p className='mb-3 text-sm text-gray-300'>Current Medications</p>
                    <div className='bg-[#1A1D21] rounded-lg border  border-gray-600'>

                        <input
                            className='py-3 px-2 w-full bg-transparent outline-none'
                            placeholder='Current Medications'
                            value={current_med}
                            onChange={(e) => setCurrent_med(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className='flex w-8/12 mt-7'>
                <div className='w-1/2'>
                    <p className='mb-3 text-sm text-gray-300'>Family Medical History</p>
                    <div className='bg-[#1A1D21] rounded-lg border  border-gray-600'>

                        <input
                            className='py-3 px-2 w-full bg-transparent outline-none'
                            placeholder='Family Medical History'
                            value={family_med_his}
                            onChange={(e) => setFamily_med_his(e.target.value)}
                        />
                    </div>
                </div>
                <div className='ms-6 w-1/2'>
                    <p className='mb-3 text-sm text-gray-300'>Past Medical History</p>
                    <div className='bg-[#1A1D21] rounded-lg border border-gray-600'>

                        <input
                            className='py-3 px-2 w-full  bg-transparent outline-none'
                            placeholder='Past Medical History'
                            value={past_med_his}
                            onChange={(e) => setPast_med_his(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <h1 className='font-semibold mt-7 text-2xl'>Identification and Verification</h1>

            <div className='mt-7 bg-[#1A1D21] w-8/12 rounded-lg border  border-gray-600'>
                <select
                    className='py-3 px-2 w-full  bg-transparent outline-none'
                    placeholder='Birth Certificate'
                    value={id_type}
                    onChange={(e) => setId_type(e.target.value)}>
                    <option value='Birth Certificate'>Birth Certificate</option>
                    <option value="Driver's License">Driver's License</option>
                    <option value='Medical Insurance'>Medical Insurance Card/Policy</option>
                    <option value='Military Id'>Military ID Card</option>
                    <option value='Natoinal Id'>National Identity Card</option>
                    <option value='Passport'>Passport</option>
                    <option value='Green Card'>Resident Alien Card (Green Card)</option>
                    <option value='Social Security Card'>Social Security Card</option>
                    <option value='State ID Card'>State ID Card</option>
                    <option value='Student ID Card'>Student ID Card</option>
                    <option value='Voter ID Card'>Voter ID Card</option>
                </select>
            </div>

            <div className='mt-7 w-8/12'>
                <p className='mb-3 text-sm text-gray-300'>ID Number</p>
                <div className='bg-[#1A1D21] rounded-lg border  border-gray-600'>

                    <input
                        className='py-3 px-2 w-3/4 outline-none bg-transparent'
                        placeholder='387498'
                        value={id_num}
                        onChange={(e) => setId_num(e.target.value)}
                    />
                </div>
            </div>
            <div>
                <h1 className='font-semibold mt-7 text-2xl'>Consent and Privacy</h1>
                <div className='mt-5'>
                    <label>
                        <input type='checkbox' className='bg-red-500 me-4' />
                        I consent to receive treatment for my health condition.
                    </label>
                </div>
                <div className='mt-5'>
                    <label>
                        <input type='checkbox' className='bg-red-500 me-4' />
                        I consent to the use and disclosure of my health information for treatment purposes.
                    </label>
                </div>
                <p className='mt-5'>I acknowledge that I have reviewed and agree to the privacy policy</p>

            </div>

            <button onClick={handleClick} className='mt-7 p-2 w-8/12 bg-[#24AE7C] text-white'>
                Submit and Continue
            </button>
        </>
    );
}

export default RegistrationForm;
