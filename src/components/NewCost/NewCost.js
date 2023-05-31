import React, { useState } from 'react';
import CostForm from './CostForm';
import './NewCost.css';


const NewCost = (props) => {
    const [isFormVisible, setIsFormVisible] = useState(false)
    const inputCostDataHandler = () => {
        setIsFormVisible(true)
    }
    const cancelCostDataHandler = () => {
        setIsFormVisible(false)
    }
    const saveCostDataHandlet = (inputCostData) => {
        const costData = {
            id: Math.random().toString(),
            ...inputCostData
        }
        props.onAddCost(costData);
        setIsFormVisible(false);
    }
    return (
        <div className='new-cost' >
            {!isFormVisible && <button onClick={inputCostDataHandler}>Добавить новый расход</button>}
            {isFormVisible && <CostForm onSaveCostData={saveCostDataHandlet} onCancel={cancelCostDataHandler} />}
        </div >
    )
}
export default NewCost;