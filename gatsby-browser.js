import React from 'react'

import { Provider } from './src/identify-context'


export const wrapRootElement = ({ element }) => (
    <Provider>{element}</Provider>
)