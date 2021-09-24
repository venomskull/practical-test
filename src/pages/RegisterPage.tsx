import { Button, TextField } from '@mui/material'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import './Pages.css'

type Registers = {
    cardNumber: number;
    cvv: number;
    expiryDate: number;
    expiryMonth: number;
    expiryYear: number;
};

const RegisterPage: React.FC<RouteComponentProps<any>> = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Registers>();

    const submitForm: SubmitHandler<Registers> = (data) => {
        console.log(data)
        props.history.push('/success');
    };

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <div className='registerPage'>
                <div className="page-container">
                    <div className="form-title">
                        This is registration page
                    </div>
                    <div className="cardNumber">
                        <TextField {...register("cardNumber", { required: true, minLength: 12, maxLength: 12 })}
                            className='textField' id="cardNumber" label="Card Number" variant="outlined" type='number'
                            error={errors.cardNumber ? true : false} helperText={errors.cardNumber ? 'CARD NUMBER is incorrect' : ''}
                        />
                    </div>
                    <div className="cvvDate">
                        <TextField {...register('cvv', { required: true, minLength: 3, maxLength: 3 })}
                            className='textField' id="cvv" label="CVV" variant="outlined" type='number'
                            error={errors.cvv ? true : false} helperText={errors.cvv ? 'CVV is incorrect' : ''}
                        />
                        <div className="exp-wrapper">
                            <TextField {...register('expiryMonth', { required: true, minLength: 2, maxLength: 2 })}
                                className='exp' id="expMonth" label="MM" variant="outlined" type='number'
                                error={errors.expiryMonth ? true : false} helperText={errors.expiryMonth ? 'Incorrect' : ''}
                            />
                            <TextField {...register('expiryYear', { required: true, minLength: 4, maxLength: 4 })}
                                className='exp' id="expYear" label="YYYY" variant="outlined" type='number'
                                error={errors.expiryYear ? true : false} helperText={errors.expiryYear ? 'Incorrect' : ''}
                            />
                        </div>
                    </div>
                    <div className="register-button">
                        <Button type='submit' variant="contained">Register</Button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default withRouter(RegisterPage)



