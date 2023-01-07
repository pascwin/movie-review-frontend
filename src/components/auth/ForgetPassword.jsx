import React from 'react'
import { Container } from '../Container'
import { CustomLink } from '../CustomLink'
import { FormInput } from '../form/FormInput'
import { Submit } from '../form/Submit'
import { Title } from '../form/Title'

export const ForgetPassword = () => {
    return (
        <div className='fixed inset-0 bg-primary -z-10 flex justify-center items-center'>
            <Container>
                <form className='bg-secondary rounded p-6 w-72 space-y-6'>
                    <Title>Please Enter Email</Title>
                    <FormInput name="email" placeholder="john@email.com" label="Email" type="text" />
                    <Submit value="Send Link" />
                    <div className="flex justify-between">
                        <CustomLink to="/auth/signin">Sign in</CustomLink>
                        <CustomLink to="/auth/signup">Sign up</CustomLink>
                    </div>
                </form>
            </Container>
        </div>
    )
}
