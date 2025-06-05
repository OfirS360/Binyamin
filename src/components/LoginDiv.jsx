import '../css/Login.css';
import '../css/Text-input.css';
import '../css/Fonts.css';
import '../css/Buttons.css';
import '../css/Images.css'

export default function LoginDiv() {
    return (
        <div id="loginDiv" dir='rtl'>
            <div className="LoginImages">
                <img src="/Images/Logo.png" alt="מחלקת רכב" className="MediumLogo"/>
                <img src="/Images/Vectors/link.png" alt="Link" className="XSLogo" style={{ marginRight: "15px", marginLeft: "15px" }}/>
                <img src="/Images/MoazLogo.png" alt="מועצת בנימין" className="MediumLogo"/>
            </div>

            <h1 className="Header1 pt-100" style={{ marginTop: "50px"}}>התחברות למערכת</h1>
            <form className="LoginForm">

                <label htmlFor="username" className="Input-Lable">תעודת זהות</label>
                <input type="text" inputMode="numeric" pattern="[0-9]*" id="username" className="DefualtTxtInput" name="username" required/>
                <label className="Remark-Lable" style={{ marginTop: "5px"}}>מספר זהות בן 9 ספרות (כולל ספרת ביקורת)</label>

                <label htmlFor="password" className="Input-Lable" style={{ marginTop: "15px"}}>סיסמא</label>
                <input type="password" id="password" className="DefualtTxtInput" name="password" required/>

                <div className="LoginOptions">
                    <div className="CheckboxDiv">
                        <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                            <input type="checkbox" name="rememberMe" className="Checkbox" />
                            <span className="VisualCheckbox"></span>
                            <span className="Remark-Lable" style={{ marginRight: "8px", color: "var(--r-text-color)" }}>זכור אותי</span>
                        </label>
                    </div>
                    <a href="/forgot-password" className="TextLink">שכחתי סיסמא</a>
                </div>

                <button type="submit" className="SubmitBtn" style={{ alignSelf: "center", marginTop: "25px"}}>התחבר</button>
            </form>
        </div>
    );
}