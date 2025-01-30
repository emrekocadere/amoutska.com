import "../index.css";
import { FacebookOutlined } from "@ant-design/icons";
import { ConfigProvider, Input, Select, Divider } from 'antd';
import resim from "../AMOUTSKA_TURKCE_LOGO_modified.png"
import greece from "../images/gr.svg"
import turkey from "../images/tr.svg"
// const onSearch = (value, _e, info) => console.log(info?.source, value);
const { Search } = Input;



const onChange = (value) => {
    console.log(`selected ${value}`);
};
const onSearch = (value) => {
    console.log('search:', value);
};

function Header() {
    return (
        <div className="App">
            <header style={{ backgroundColor: "rgb(65,146,131)" }}>
                <div style={{ marginInline: "8vw", alignItems: "center", display: "flex", justifyContent: "space-around" }}>
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
                            // onSearch={onSearch}
                            style={{
                                width: "30vw ",

                            }}
                        />
                        {/* <div style={{ backgroundColor: "rgb(35,64,125)", height: ".25vh" }} /> */}


                    </ConfigProvider>

                    <div style={{ display: "flex", flexDirection: "row",alignItems:"center",justifyContent:"space-around",width:"10vw" }}>

                    
                    <h3 style={{ color: "rgb(35,64,125)" }}>iletişim</h3>
                    <ConfigProvider
                      theme={{
                        components: {
                          Select: {
                  
                          }
                        }}}
                    >


                        <Select
                            style={{ height: "4vh" }}
                            showSearch
                            // placeholder="Select a person"
                            optionFilterProp="label"
                            onChange={onChange}
                            onSearch={onSearch}
                            options={[
                                {
                                    value: 'Greek',
                                    label: <img src={greece} style={{width:"1.5vw",height:"1vw"}} />
                                },
                                {
                                    value: 'Türkçe',
                                    label: <img src={turkey}  style={{width:"1.5vw"}}/>,
                                }
                            ]}
                        />  
                    </ConfigProvider>
                    </div>
                </div>



            </header>
        </div>
    );
}
export default Header;

