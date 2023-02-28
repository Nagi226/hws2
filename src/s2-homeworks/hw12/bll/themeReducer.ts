

type StateType = {
    themeId: number
}
const initState = {
themeId: 1,
}
type ActionsType = ChangeThemeIdType
export const themeReducer = (state = initState, action: ActionsType):StateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            const stateCopy = {...state}
            stateCopy.themeId = action.id
        return stateCopy
        // дописать

        default:
            return state
    }
}

export type ChangeThemeIdType = {
    type: 'SET_THEME_ID',
    id: number
}
export const changeThemeId = (id: number): ChangeThemeIdType => ({ type: 'SET_THEME_ID', id }as const) // fix any
