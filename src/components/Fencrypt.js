import React, { useState } from 'react';
import axios from 'axios';
import Progressbar from './Progressbar';

export default function Fencrypt() {
    //Encrypt
    const [file, setfile] = useState("")
    const [progress, setprogress] = useState(0)
    const [filepswd, setfilepswd] = useState('')

    function handlefile(e) {
        setfile(e.target.files)

    }

    async function encrptfile(e) {
        e.preventDefault();
        setprogress(2)
        const formData = new FormData();
        for (let i = 0; i < file.length; i++) {
            formData.append("file", file[i]);
        }

        formData.append("filepswd", filepswd);
        await axios({
            method: 'post',
            url: process.env.REACT_APP_ANServer + 'fencrypt',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress(progressEvent) {
                var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                setprogress(percentCompleted)
            }
        }).then((response) => {
            console.log(response.data);
            const link = document.createElement('a');
            link.href = response.data;
            document.body.appendChild(link);
            link.click();
        });
    }


    return (
        <div>
            <form onSubmit={encrptfile}>
                <div className="form-group">
                    <input type="file" id="file" className="d-none form-control" onChange={(e) => handlefile(e)} required />

                    <label htmlFor="file" className="btn btn-lg p-4  d-block btn-danger w-100"> <i className="fa fa-download mr-2"></i> {file !== '' ? 'Selected files ' + file[0].name + '...' : 'Choose a file...'} </label>

                    {file !== '' ? (
                        <>
                            <div className="form-group">
                                <label htmlFor="Password1">Password</label>
                                <input type="password" className="form-control" id="Password1" onChange={(e) => { setfilepswd(e.target.value) }} placeholder="Password" required />
                            </div>
                            <button type="submit" className="btn btn-success my-2">Encrypt</button>
                        </>
                    ) : 'No file is selected'}
                </div>

            </form>

            <Progressbar progress={progress} setprogress={setprogress} msg="Encrypted File is Downloading... !" alerttype="green" />
            <h2 className="my-2">How its works</h2>
            <ol>
                <li>Upload your file</li>
                <li>Enter Your password</li>
                <li>Click on Encrypt button</li>
                <li>after that your encrypted file will automatically download</li>
                <li>send this file to anybody</li>
                <li> if he/she have the password then only that person can access/Decrypt the file</li>
            </ol>
        </div>
    )
}
