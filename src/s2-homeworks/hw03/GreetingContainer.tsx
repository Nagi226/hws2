import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string)=>void // need to fix any
}

export const pureAddUser = (name: string, setError: React.Dispatch<React.SetStateAction<string>>, setName: React.Dispatch<React.SetStateAction<string>>, addUserCallback:(name: string)=>void) => {
if (name === '' || name.trim().length === 0) {
    return setError("Ошибка! Введите имя!")
}
    addUserCallback(name)
    setName ('')  // после нажатия очистка инпута

    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnBlur = (name: string, setError: React.Dispatch<React.SetStateAction<string>>) => { // если имя пустое - показать ошибку
    if (name === ''  || name.trim().length === 0) {
        return setError("Ошибка! Введите имя!")
    }

}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: ()=> void) => { // если нажата кнопка Enter - добавить
    if (e.key === 'Enter') {
        addUser()
    }}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
    const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                         users,
                                                                         addUserCallback,
                                                                     }) => {
        // деструктуризация пропсов
        const [name, setName] = useState<string>('') // need to fix any
        const [error, setError] = useState<string>('') // need to fix any

        const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
            setName(e.currentTarget.value) // need to fix

            error && setError('')
        }
        const addUser = () => {
            pureAddUser(name, setError, setName, addUserCallback)



        }

        const onBlur = () => {
            pureOnBlur(name, setError)
        }

        const onEnter = (e: any) => {
            pureOnEnter(e, addUser)
        }

        const totalUsers = users.length // need to fix кол-во добавленных
        let lastUserName;
        if(users.length > 0)
        {
            lastUserName = users[users.length - 1].name
        }
        else
        {
            lastUserName = ''
        }

        return (
            <Greeting
                name={name}
                setNameCallback={setNameCallback}
                addUser={addUser} // событие добавить
                onBlur={onBlur} // событие когда пользователь кликает за пределы поля
                onEnter={onEnter} // событие добавить
                error={error}  // строка ошибка
                totalUsers={totalUsers}
                lastUserName={lastUserName}
            />
        )
    }

export default GreetingContainer
