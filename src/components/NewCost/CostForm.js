import React, { useState } from 'react';
import './CostForm.css';

const CostForm = (props) => {
    const [inputDescription, setInputDescription] = useState('')
    const [inputAmount, setInputAmount] = useState('')
    const [inputDate, setInputDate] = useState('')

    const nameChangeHandler = (event) => { setInputDescription(event.target.value); }
    const amountChangeHandler = (event) => { setInputAmount(event.target.value); }
    const dateChangeHandler = (event) => { setInputDate(event.target.value); }

    // const [userInput, setUserInput] = useState({
    //     name: '',
    //     amount: '',
    //     date: ''
    // });

    // const nameChangeHandler = (event) => {
    //     setUserInput((previousState) => {
    //         return {
    //             ...previousState,
    //             name: event.target.value,
    //         }
    //     })
    // }
    // const amountChangeHandler = (event) => {
    //     setUserInput({
    //         ...userInput,
    //         amount: event.target.value,
    //     });
    //     console.log(userInput)
    // }
    // const dateChangeHandler = (event) => {
    //     setUserInput({
    //         ...userInput,
    //         date: event.target.value,
    //     });
    //     console.log(userInput)
    // }

    const submitHandler = (event) => {
        event.preventDefault();
        const costData = {
            date: new Date(inputDate),
            description: inputDescription,
            amount: inputAmount
        }
        props.onSaveCostData(costData);
        setInputDescription('');
        setInputAmount('');
        setInputDate('');
    }

    return <form onSubmit={submitHandler}>
        <div className='new-cost__controls'>
            <div className='new-cost__control'>
                <label >Название</label>
                <input type="text"
                    value={inputDescription}
                    onChange={nameChangeHandler} />
            </div>
            <div className='new-cost__control'>
                <label>Сумма</label>
                <input type="text" min="0.01" step="0.01"
                    value={inputAmount}
                    onChange={amountChangeHandler} />
            </div>
            <div className='new-cost__control'>
                <label>Дата</label>
                <input type="date" min="2019-01-01" max="2023-12-31"
                    value={inputDate}
                    onChange={dateChangeHandler} />
            </div>
            <div className='new-cost__actions'>
                <button type="submit">Добавить Расход</button>
                <button type="button" onClick={props.onCancel}>Отмена</button>
            </div>
        </div>
    </form>

}

export default CostForm;