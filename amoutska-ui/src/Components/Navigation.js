import "../index.css";
import { ConfigProvider, Input, Divider } from 'antd';

const onSearch = (value, _e, info) => console.log(info?.source, value);
const { Search } = Input;

function Navigation() {
    return (
        <div className="App">


                <div style={{ backgroundColor: "rgb(35,64,125)", height: ".3vh" }} />
                <div style={{ display: "flex", justifyContent: "space-evenly", marginInline: "10%" }}>
                    <h3 style={{ color: "rgb(65,146,131)" }}>baslık</h3>
                    <h3 style={{ color: "rgb(65,146,131)" }}>baslık</h3>
                    <h3 style={{ color: "rgb(65,146,131)" }}>baslık</h3>
                    <h3 style={{ color: "rgb(65,146,131)" }}>baslık</h3>
                    <h3 style={{ color: "rgb(65,146,131)" }}>baslık</h3>
                    <h3 style={{ color: "rgb(65,146,131)" }}>baslık</h3>
                    <h3 style={{ color: "rgb(65,146,131)" }}>baslık</h3>
                </div>
                <div style={{ backgroundColor: "rgb(35,64,125)", height: ".3vh" }} />

        </div>
    );
}
export default Navigation;

