import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
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

interface outputData {
    cardNumber: number;
    cvv: number;
    expiryDate: Date;
}

const RegisterPage: React.FC<RouteComponentProps<any>> = (props) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Registers>();
    const [showErrMsg, setShowErrMsg] = useState<boolean>(false);

    const submitForm: SubmitHandler<Registers> = (data) => {
        if (data.expiryYear < 2021 || data.expiryYear > 2030) {
            return setShowErrMsg(true);
        }

        let date = new Date(`${data.expiryYear}-${data.expiryMonth}-01`);
        if (date.toString() === 'Invalid Date') {
            return setShowErrMsg(true);
        } else {
            setShowErrMsg(false)
        }

        let obj: outputData = {
            cardNumber: data.cardNumber,
            cvv: data.cvv,
            expiryDate: new Date(`${data.expiryYear}-${data.expiryMonth}-01`)
        }
        console.log(obj);
        props.history.push('/success');
    };

    useEffect(() => {
        setShowErrMsg(false);
    }, [errors.expiryMonth, errors.expiryYear]);

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <div className='registerPage'>
                <div className="page-container">
                    <div className="form-title">
                        credit card details
                    </div>
                    <div className="cardNumber">
                        <TextField {...register("cardNumber", { required: true, minLength: 12, maxLength: 12 })}
                            className='textField' id="cardNumber" label="Card Number" variant="outlined" type='number'
                            error={errors.cardNumber ? true : false} helperText={errors.cardNumber ? 'Incorrect' : ''}
                        />
                    </div>
                    <div className="cvvDate">
                        <div className="cvv">
                            <TextField {...register('cvv', { required: true, minLength: 3, maxLength: 3 })}
                                className='textField' id="cvv" label="CVV" variant="outlined" type='number'
                                error={errors.cvv ? true : false} helperText={errors.cvv ? 'Incorrect' : ''}
                            />
                        </div>
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
                    {showErrMsg && (<p className='errorMsg'>check the date </p>)}

                    <div className="register-button">
                        <input type="submit" className='submitButton' />
                    </div>
                </div>
            </div>
        </form>
    )
}

export default withRouter(RegisterPage)



