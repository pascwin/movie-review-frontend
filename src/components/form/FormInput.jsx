import React from 'react'

export const FormInput = ({ name, placeholder, label, ...rest }) => {
    return (
        <div className='flex flex-col-reverse'>
            {/* peer property makes it possible to stick the following tag to the tag before and 
            use focus in combination with peer we use flex-col-reverse to switch the elements*/}
            <input
                id={name}
                name={name}
                className="bg-transparent rounded border-2 border-dark-subtle
                            w-full text-lg outline-none focus:border-white p-1 text-white peer transition"
                placeholder={placeholder}
                {...rest}
            />
            <label className='font-semibold text-dark-subtle peer-focus:text-white transition self-start'
                htmlFor={name}>{label}</label>
        </div>
    )
}
