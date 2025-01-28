import "../index.css";
import { FacebookOutlined, MailOutlined, PhoneOutlined, InstagramOutlined, EnvironmentOutlined } from "@ant-design/icons";


function Footer() {
    return (
        <div className="App">
            <footer style={{ height: "12.5vh", backgroundColor: "rgb(203, 53, 53)" }}>
                <div >
                    <InstagramOutlined className="FooterIcon"/>
                    <FacebookOutlined className="FooterIcon"/>
                    <MailOutlined className="FooterIcon"/>
                    <PhoneOutlined className="FooterIcon"/>
                    <EnvironmentOutlined className="FooterIcon"/>
                </div>

            </footer>
        </div>
    );
}
export default Footer;
