import React, { useState } from 'react'

function AfterLoginForm({ AfterLogin }) {
    const [afterLoginDetails, setAfterLoginDetails] = useState({
        name: '',
        dob: '',
        religion: '',
        height: '',
    })
    const submitHandler = (e) => {
        e.preventDefault()
        AfterLogin(afterLoginDetails)
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        onChange={(e) =>
                            setAfterLoginDetails({
                                ...afterLoginDetails,
                                name: e.target.value,
                            })
                        }
                        value={afterLoginDetails.name}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">DOB</label>
                    <input
                        type="text"
                        name="DOB"
                        id="DOB"
                        onChange={(e) =>
                            setAfterLoginDetails({
                                ...afterLoginDetails,
                                DOB: e.target.value,
                            })
                        }
                        value={afterLoginDetails.DOB}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="religion">Religion</label>
                    <input
                        type="text"
                        name="religion"
                        id="religion"
                        onChange={(e) =>
                            setAfterLoginDetails({
                                ...afterLoginDetails,
                                religion: e.target.value,
                            })
                        }
                        value={afterLoginDetails.religion}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Height">Height</label>
                    <input
                        type="text"
                        name="height"
                        id="height"
                        onChange={(e) =>
                            setAfterLoginDetails({
                                ...afterLoginDetails,
                                height: e.target.value,
                            })
                        }
                        value={afterLoginDetails.height}
                    />
                </div>
                <button  disabled>Save Me</button>
            </div>

        </form>
    )
}

export default AfterLoginForm
