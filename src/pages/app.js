import React from 'react'
import { Router } from '@reach/router'
import DashBoard from '../components/DashBoard'
import HOC from '../HOC/HOC'
const app = () => {
    return (
        <Router basepath='/app'>
            <HOC path="/" componrnt={DashBoard} />
        </Router>
    )
}

export default app
