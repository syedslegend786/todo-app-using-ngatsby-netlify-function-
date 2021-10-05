import React, { useContext, useReducer, useState } from 'react'
import netlifyidentity from 'netlify-identity-widget'
import { Link } from 'gatsby'
import { IdentityContext } from '../identify-context'
import shortid from 'shortid'

const DashBoard = () => {
    const { user } = useContext(IdentityContext)
    const [inputValue, setinputValue] = useState('')
    const todoReducer = (state, action) => {
        switch (action.type) {
            case "addtodo":
                return [...state, action.payload]
            case "toggle":
                const newState = state.map(val => val.id === action.paylaod ? { ...val, done: !val.done } : val)
                return newState
            default:
                return state
        }
    }
    const [todos, dispatch] = useReducer(todoReducer, [])
    return (
        <div>
            <div style={{
                display: 'flex',
            }}>
                <div>Home</div>
                <Link>Dashbord</Link>
                {user && <div onClick={() => netlifyidentity.logout()}>{`logout ${user.user_metadata.full_name}`}</div>}
            </div>
            <div>
                <input value={inputValue} onChange={(e) => setinputValue(e.target.value)} />
                <button onClick={() => {
                    dispatch({
                        type: "addtodo",
                        payload: { text: inputValue, done: false, id: shortid.generate() }
                    })
                }}>Add todo</button>
                <ul style={{
                    listStyle: 'none'
                }}>
                    {
                        todos.map((val, index) => {
                            return (
                                <div key={index}>
                                    <input onClick={() => {
                                        dispatch({
                                            type: "toggle",
                                            paylaod: val.id
                                        })
                                    }} checked={val.done} type='checkbox' />
                                    <span>{val.text}</span>
                                </div>
                            )
                        })
                    }
                    <li>

                    </li>
                </ul>
            </div>
        </div >
    )
}

export default DashBoard
