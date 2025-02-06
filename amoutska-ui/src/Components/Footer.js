import "../index.css";
import { FacebookOutlined, MailOutlined, PhoneOutlined, InstagramOutlined, EnvironmentOutlined } from "@ant-design/icons";


function Footer() {
    return (
        <div className="App">

            <footer style={{ backgroundColor: "rgb(65,146,131)", paddingInline: "30vw", display: "flex", flexDirection: "row", justifyContent: "space-around" }}>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }} >
                    <h3 style={{ color: " rgb(35,64,125)" }}>Baslik</h3>
                    <p style={{ margin: "0px" }}>secenek </p>
                    <p style={{ margin: "0px" }}>secenek </p>
                    <p style={{ margin: "0px" }}>secenek </p>
                    <p style={{ margin: "0px" }}>secenek </p>

                </div>
                <div style={{width:"1px",backgroundColor:"rgb(35,64,125)",marginBlock:"2.5vh"}}></div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }} >
                    <h3 style={{ color: " rgb(35,64,125)" }}>Baslik</h3>
                    <p style={{ margin: "0px" }}>secenek </p>
                    <p style={{ margin: "0px" }}>secenek </p>
                    <p style={{ margin: "0px" }}>secenek </p>
                    <p style={{ margin: "0px" }}>secenek </p>

                </div>

                <div style={{width:"1px",backgroundColor:"rgb(35,64,125)",marginBlock:"2.5vh"}}></div>
,
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }} >
                    <h3 style={{ color: " rgb(35,64,125)" }}>Iletişim</h3>
                    <div>
                        <MailOutlined className="FooterIcon" />
                        example@example.com
                    </div>
                    <div>
                        <EnvironmentOutlined className="FooterIcon" />
                        Adres
                    </div>
                    <div>
                        <PhoneOutlined className="FooterIcon" />
                        555 555 5555
                    </div>

                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <InstagramOutlined className="FooterIcon" style={{}} />
                        <FacebookOutlined className="FooterIcon" style={{}} />

                    </div>

                </div>

            </footer>
        </div>
    );
}
export default Footer;
