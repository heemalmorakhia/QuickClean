import React, { useState, useEffect } from 'react';
import PageLayout from '../components/layout';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER } from '../utilities/queries';
import { UPDATE_USER } from '../utilities/mutation';
import { UPDATE_USER_PASSWORD } from '../utilities/mutation';
import Auth from '../utilities/auth';

function EditProfile() {
    const { loading, data } = useQuery(QUERY_USER);

    const user = data?.user || {};
    console.log(user)
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        phone: '',
        email: '',
    });

    useEffect(() => {
        if (!loading && data?.user) {
            const { firstName, lastName, userName, phone, email } = data.user;
            setFormState({
                firstName: firstName || '',
                lastName: lastName || '',
                userName: userName || '',
                phone: phone || '',
                email: email || '',
            });
        }
    }, [loading, data]);
    console.log(formState)
    const [password, setPassword] = useState('');
    const [isPasswordChanged, setIsPasswordChanged] = useState(false);

    const [updateUser, { error }] = useMutation(UPDATE_USER);
    const [updateUserPassword] = useMutation(UPDATE_USER_PASSWORD);

    const handlePasswordSubmit = async (event) => {
        event.preventDefault();
        try {
            await updateUserPassword({
                variables: { password: password },
            });
            setPassword('');
            setIsPasswordChanged(true);
        } catch (e) {
            console.log(e);
        }
    };

    const handlePasswordChange = (event) => {
        const { value } = event.target;
        setPassword(value);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            await updateUser({
                variables: { ...formState },
            });
            window.location.reload();
        } catch (e) {
            console.log(e);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({

            [name]: value,
        });
    };

    if(error){
        return (
            <div>
                404-ERROR!
            </div>
        )
    }

    return (
        <PageLayout>
            {Auth.loggedIn() ? (
                <>
                    {loading ? (
                        <div>loading....</div>
                    ) : (
                        <div className='d-flex justify-content-center vh-100 align-items-center mb-5 pb-5'>
                            <div className='' style={{ width: '40rem', height: '45rem' }}>
                                <div
                                    className='text-center'
                                    style={{ paddingTop: '40px', paddingBottom: '40px', borderBottom: '1px solid black' }}
                                >
                                    <h2 className='card-title'>My Profile</h2>
                                </div>
                                <div className='' style={{ paddingTop: '40px', paddingBottom: '90px' }}>
                                    <div className=''>
                                        <div>
                                            <form onSubmit={handleFormSubmit}>
                                                <div className='form-group mb-3'>
                                                    <label style={{ fontWeight: 'bolder' }} htmlFor='firtName'>
                                                        First Name: {user.firstName}
                                                    </label>
                                                    <input
                                                        className='form-control'
                                                        placeholder='Update Your First Name'
                                                        name='firstName'
                                                        type='text'
                                                        id='firstName'
                                                        value={formState.firstName}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className='form-group mb-3'>
                                                    <label style={{ fontWeight: 'bolder' }} htmlFor='lastName'>
                                                        Last Name: {user.lastName}
                                                    </label>
                                                    <input
                                                        className='form-control'
                                                        placeholder='Update Your Last Name'
                                                        name='lastName'
                                                        type='text'
                                                        id='lastName'
                                                        value={formState.lastName}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className='form-group mb-3'>
                                                    <label style={{ fontWeight: 'bolder' }} htmlFor='userName'>
                                                        User Name: {user.userName}
                                                    </label>
                                                    <input
                                                        className='form-control'
                                                        placeholder='Update Your User Name'
                                                        name='userName'
                                                        type='text'
                                                        id='userName'
                                                        value={formState.userName}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className='form-group mb-3'>
                                                    <label style={{ fontWeight: 'bolder' }} htmlFor='phone'>
                                                        Phone: {user.phone}
                                                    </label>
                                                    <input
                                                        className='form-control'
                                                        placeholder='Update Your Phone Number'
                                                        name='phone'
                                                        type='text'
                                                        id='phone'
                                                        value={formState.phone}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className='form-group mb-3'>
                                                    <label style={{ fontWeight: 'bolder' }} htmlFor='email'>
                                                        Email address: {user.email}
                                                    </label>
                                                    <input
                                                        className='form-control'
                                                        placeholder='email'
                                                        name='email'
                                                        type='email'
                                                        id='email'
                                                        value={formState.email}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className='text-center'>
                                                    <button className='btn btn-primary' type='submit'>
                                                        Update Profile
                                                    </button>
                                                </div>
                                            </form>
                                            <div style={{ paddingTop: '20px' }}>
                                                <form onSubmit={handlePasswordSubmit}>
                                                    <div className='form-group mb-3'>
                                                        <label style={{ fontWeight: 'bolder' }} htmlFor='password'>
                                                            New Password:
                                                        </label>
                                                        <input
                                                            className='form-control'
                                                            placeholder='********'
                                                            name='password'
                                                            type='password'
                                                            id='password'
                                                            onChange={handlePasswordChange}
                                                        />
                                                    </div>

                                                    <div className='text-center mb-2'>
                                                        <button className='btn btn-primary' type='submit'>
                                                            Update Password
                                                        </button>
                                                    </div>

                                                    {isPasswordChanged ?
                                                        <div className='mb-5 pb-5'>
                                                            <div className="alert alert-success" role="alert">
                                                                Password Has Been Updated!
                                                            </div>
                                                        </div>
                                                        :
                                                        ""
                                                    }
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <div className='vh-100 d-flex justify-content-center align-items-center'>
                    <div>404 - PAGE DOES NOT EXIST</div>
                </div>
            )}
        </PageLayout>
    );
}

export default EditProfile;