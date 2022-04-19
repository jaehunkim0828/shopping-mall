import { useRouter } from 'next/router';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from "react-redux";

import { loginAct } from '../store/action/loginState';




function LoginGoogle(props: any) {
  const router = useRouter();
  const dispatch = useDispatch();
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  


  function onSuccess(res: any) {
    const profile = res.getBasicProfile();
    const userdata = {
      email: profile.getEmail(),
      image: profile.getImageUrl(),
      name: profile.getName(),
    }; 
    window.localStorage.setItem('token', res.tokenObj.access_token);
    dispatch(loginAct());
    router.push('/');
    // https://www.googleapis.com/oauth2/v3/userinfo?access_token={access_token}
  }

  const onFailure = (res: any) => {
    alert("구글 로그인에 실패하였습니다");
    console.log("err", res);
  };

  return (
      <GoogleLogin
        className="google-button"
        buttonText='로그인'
        clientId={clientId?? 'none'}
        responseType={"id_token"}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
  );
}

export default LoginGoogle;