import React from 'react'
import { Container } from '../Container'
import { FormInput } from '../form/FormInput'
import { Submit } from '../form/Submit'
import { Title } from '../form/Title'
import { CustomLink } from '../CustomLink'

export const SignUp = () => {
    return (
        <div className='fixed inset-0 bg-primary -z-10 flex justify-center items-center'>
            <Container>
                <form className='bg-secondary rounded p-6 w-72 space-y-6'>
                    <Title>Sign up</Title>
                    <FormInput name="name" placeholder="John" label="Name" type="text" />
                    <FormInput name="email" placeholder="john@email.com" label="Email" type="text" />
                    <FormInput name="password" placeholder="********" label="Password" type="password" />
                    <Submit value="Sign up" />
                    <div className="flex justify-between">
                        <CustomLink to="/auth/forget-password">Forget password</CustomLink>
                        <CustomLink to="/auth/signup">Sign in</CustomLink>
                    </div>
                </form>
            </Container>
        </div>
    )
}