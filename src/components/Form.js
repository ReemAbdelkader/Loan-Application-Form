import './FormStyle.css';
import { useState } from 'react';
import Model from './Model';

export default function Form () {

    const [name , setName] = useState('');
    const [errorName , setErrorName] = useState('');

    const [num , setNum] = useState('');
    const [errorNum, setErrorNum] = useState('');

    const [age , setAge] = useState('');
    const [errorAge , setErrorAge] = useState('');

    const [salary , setSalary] = useState('');


    // Function using UseState() for Validation Name
    function handleName (event) {
        const userName = event.target.value;
        const regExpr = /^[a-zA-Zأ-ي\s]+$/;
        const regName = userName.trim().match(regExpr);

        if (regName) {
            setErrorName('');
        }
        else {
            setErrorName("Invalid Name! , please enter a valid name");
        }

        setName(userName);

    }

    // Function using UseState() for Validation Phone Number
    const ValidPhoneNumber =  (event) => {
        const value = parseInt(event.target.value);
        const convertedNumber = value.toString().length;

        if (convertedNumber < 10 || convertedNumber > 12) {
            setErrorNum("Invalid Phone Number")
        }
        else {
            setErrorNum('');
        }

        setNum(value);
    };

    // Function using UseState() for Validation Age
    function handleAge (event) {
        const value = parseInt(event.target.value);

        if (value < 20 || value > 100) {
            setErrorAge("Invalid Age")
        }
        else {
            setErrorAge('');
        }

        setAge(value);
    };

    // Function To Check If All Fields in the Form Is True
    const allInFormIsValid = () => {
        
        const validName = !errorName && name && name.trim();
        const validPhone = !errorNum && num;
        const validAge = age && !errorAge;

        return validName && validPhone && validAge ;
    }

    return (
        <div className='main text'>
            <form className='form'>
                <h2>Requesting a loan</h2>
                <hr className="line"></hr>


                <label className='flexLable'>Name : </label>
                <input className='input' type="text" value={name} onChange={handleName}></input> {errorName && <p style={{color: "red"}}>{errorName}</p>}
                <label className='flexLable'>Phone : </label>
                <input className='input' type="number" value={num} onChange={ValidPhoneNumber}></input> {errorNum && <p style={{color: "red"}}>{errorNum}</p>}
                <label className='flexLable'>Age : </label>
                <input className='input' type="number" value={age} onChange={handleAge}></input> {errorAge && <p style={{color: "red"}}>{errorAge}</p>}

                <label>Are You Employer ?</label>
                <input className='checkbox' type='checkbox'></input>

                <label className='flexLable'>Salary : </label>
                <select className='select' value={salary} onChange={(e) => setSalary(e.target.value)}>
                    <option value=''>choose a salary ...</option>
                    <option value='less'>salary less than 1000$</option>
                    <option value='equal'>salary between 1000$ and 1500$</option>
                    <option value='large'>salary larger than 2000$</option>
                </select>

                <button className={allInFormIsValid() ? 'activeBtn' : 'inactiveBtn'} disabled={!allInFormIsValid()} type='submit'>Submit</button>
            </form>

            {/* <Model /> */}
        </div>
    )
}