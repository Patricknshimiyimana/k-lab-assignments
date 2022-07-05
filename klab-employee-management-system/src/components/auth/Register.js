import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function Register() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [position, setPosition] = useState('');
    const [password, setPassword] = useState('');
    const [age, setAge] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    // const handleAdd = e => {
    //     e.preventDefault();
    //     if (!firstName || !lastName || !email || !salary || !date) {
    //         return Swal.fire({
    //             icon: 'error',
    //             title: 'Error!',
    //             text: 'All fields are required.',
    //             showConfirmButton: true
    //         });
    //     }

    //     const id = employees.length + 1;
    //     const newEmployee = {
    //         id,
    //         firstName,
    //         lastName,
    //         email,
    //         salary,
    //         date
    //     }
    //     employees.push(newEmployee);
    //     setEmployees(employees);
    //     setIsAdding(false);

    //     Swal.fire({
    //         icon: 'success',
    //         title: 'Added!',
    //         text: `${firstName} ${lastName}'s data has been Added.`,
    //         showConfirmButton: false,
    //         timer: 1500
    //     });
    // }


    return (
        <div className="small-container">
             <form >
                <h1>Register</h1>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    ref={textInput}
                    name="firstName"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <label htmlFor="position">Position</label>
                <input
                    id="position"
                    type="text"
                    name="text"
                    value={position}
                    onChange={e => setPosition(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <label htmlFor="age">Age (Years)</label>
                <input
                    id="age"
                    type="number"
                    name="age"
                    value={age}
                    onChange={e => setAge(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Register" />
                </div>
            </form>
        </div>
    );
}

export default Register;