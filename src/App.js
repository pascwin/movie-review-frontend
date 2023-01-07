import { Routes, Route } from "react-router-dom";
import { ConfirmPassword } from "./components/auth/ConfirmPassword";
import { EmailVerification } from "./components/auth/EmailVerification";
import { ForgetPassword } from "./components/auth/ForgetPassword";
import { SignIn } from "./components/auth/SignIn";
import { SignUp } from "./components/auth/SignUp";
import { Home } from "./components/Home";
import { Navbar } from "./components/user/Navbar";

const App = () => {
    return (
        <>
            <Navbar />
            {/* <SignIn /> */}
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/auth/signin" element={<SignIn />}/>
                <Route path="/auth/signup" element={<SignUp />}/>
                <Route path="/auth/verification" element={<EmailVerification/>}/>
                <Route path="/auth/forget-password" element={<ForgetPassword />}/>
                <Route path="/auth/confirm-password" element={<ConfirmPassword />}/>
            </Routes>
        </>
    )
}

export default App;