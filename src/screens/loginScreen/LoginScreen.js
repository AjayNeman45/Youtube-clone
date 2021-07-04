import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../redux/actions/auth.action';
import './_loginScreen.scss';

const LoginScreen = () =>
{
    const accessToken = useSelector(state => state.auth.accessToken);
    const history = useHistory();

    useEffect(() =>
    {
        if (accessToken) {
            history.push('/');
        }
    }, [accessToken, history])

    const dispatch = useDispatch();
    const handleLogin = () =>
    {
        dispatch(login())
    }


    return (
        <div className="login">
            <div className="login__container">
                <img src="https://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
                <div className="login_with_google">
                    <button onClick={handleLogin}>Login with google</button>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
                        alt="" />
                </div>
                <p>Made with <span className='heart'>❤️</span> by<span className='myName'> Ajay Neman</span></p>
                <p>(This app does not collect your data)</p>
            </div>
        </div>
    )
}

export default LoginScreen
