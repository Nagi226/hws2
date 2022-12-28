import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps // все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    let finalClassName = s.button + (className ? ' ' + className : '');
    if (disabled)
    {
        finalClassName += ' ' + s.disabled;
    }
    else
    {
        switch (xType) {
            case 'secondary':
                finalClassName += ' ' + s.secondary;
                break;
            case 'red':
                finalClassName += ' ' + s.red;
                break;
            default:
                finalClassName += ' ' + s.default;
                break;

        }
    }

    //const finalClassName = s.button
      //  + (disabled ? ' ' + s.disabled : xType === 'red' ? ' ' + s.red : ' ' + s.default)

        // + (disabled
        //         ? ...
        //         : xType === 'red'
        //             ? ...
       // + (className ? ' ' + className : '') // задачка на смешивание классов

    return (
        <button
            disabled={disabled}
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
    )
}

export default SuperButton
