import "../index.css";
import { FacebookOutlined, MailOutlined, PhoneOutlined, InstagramOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { ConfigProvider, Input, Space, Divider } from 'antd';
import resim from "../AMOUTSKA_TURKCE_LOGO_modified.png"
const onSearch = (value, _e, info) => console.log(info?.source, value);
const { Search } = Input;

function Header() {
    return (
        <div className="App">
            <header style={{ backgroundColor: "rgb(65,146,131)" }}>
                <div style={{ marginInline: "8vw", alignItems: "center", display: "flex",justifyContent:"space-around" }}>
                    <img src={resim} style={{ width: "7vw", marginBlock: "1vh" }} />
                    <ConfigProvider
                        theme={{
                            token: {
                                borderRadius: 12,

                            },

                        }}
                    >
                        <Search
                            size="large"
                            placeholder="input search text"
                            onSearch={onSearch}
                            style={{
                                width: "30vw ",

                            }}
                        />
                        {/* <div style={{ backgroundColor: "rgb(35,64,125)", height: ".25vh" }} /> */}


                    </ConfigProvider>


                    <h3 style={{color:"rgb(35,64,125)"}}>iletişim</h3>
                </div>



            </header>
        </div>
    );
}
export default Header;

