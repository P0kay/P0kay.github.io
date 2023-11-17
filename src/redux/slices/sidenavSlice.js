import { createSlice } from '@reduxjs/toolkit'

export const sidenavSlice = createSlice({
    name: 'sidenav',
    initialState: {
        expanded: false,
        className: 'translate-x-[-100%]'
    },
    reducers: {
        switchExpand: state => {
            if (state.className === '') {
                state.className = 'translate-x-[-100%]'
            }
            else if (state.className === 'translate-x-[-100%]') {
                state.className = ''
            }
            state.expanded = !state.expanded
        }
    }
})

export const { switchExpand } = sidenavSlice.actions

export const sidenavValue = (state) => state.sidenav

export default sidenavSlice.reducer