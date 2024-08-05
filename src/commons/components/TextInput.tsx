import React from 'react'

interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    name?: string
    label?: string
    placeholder?: string
    value?: string
    onChange?: (value: string) => void
    autoFocus?: boolean
    textarea?: boolean
    rows?: number
    enableSpace?: boolean
    marginTop?: string
    type?: string
    readonly?: boolean
    textSize?: string
}

const TextInput = ({ label, name, value, placeholder, onChange, marginTop = 'h-12', autoFocus = false, textarea = false,
    rows = 5, enableSpace = false, type, readOnly = false, textSize }: Props) => {

    const inputProps = {
        name,
        value,
        placeholder,
        className: `w-full py-3 px-3 rounded-xl font-light text-black/70  bg-white focus:border-secondary text-[16px]`,
        rows,
        autoFocus,
    }

    return (
        <div className='w-full'>
            {
                enableSpace && <div className={marginTop}></div>
            }
            {
                label &&
                <>
                    <label className="text-secondary text-sm font-normal tracking-wide w-full capitalize">{label}</label>
                    <br/>
                </>
            }
            {
                textarea ? <textarea onChange={e => onChange?.(e.target.value)} {...inputProps} /> :
                    <input type={type ?? 'text'} onChange={e => onChange?.(e.target.value)} {...inputProps} readOnly={readOnly} />
            }
        </div>
    )
}

export default TextInput

