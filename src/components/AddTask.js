import React from 'react'
import { useState } from 'react'

const Addtext = ({ onAdd }) => {

    const [text, settext] = useState('')

    const [day, setday] = useState('')

    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please enter a text')
        }

        onAdd({text, day, reminder})

        settext('')
        setday('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>text</label>
                <input type='text' placeholder='Add text' value={text} 
                onChange={(e) => settext(e.target.value)} />
            </div>
            <div className='form-control'>
                <label>Day & time</label>
                <input type='date' placeholder='Add Day & Time' value={day} 
                onChange={(e) => setday(e.target.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' value={reminder} 
                onChange={(e) => setReminder(e.target.checked)} checked={reminder}/>
            </div>
            <input className='btn btn-block' type='submit' value='Submit'/>
        </form>
    )
}

export default Addtext
