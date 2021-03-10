import './App.css';

function App() {
  return (
    <div className="App">
        <div className="container">
            
            <header className="header">
                <h1 className="Vegetable">Vegetable</h1>
            </header>

            <button>
                <img src="img/btn_facebook.png"  alt="btn_facebook" className="btn_facebook"/>
                <img src="img/btn_instagram.png"  alt="btn_instagram" className="btn_instagram"/>
                <div className="line_login"></div>
                <div className="btn_LOGIN_box">
                    <p className="LOGIN" >LOGIN</p>
                </div>
                <div className="btn_JOIN_box">
                    <p className="JOIN" >JOIN</p>
                </div>
            </button>

            <nav>
                <div className="nav_box">
                    <ul className="nav_list">
                        <li className="nav_list_items Home">Home</li>
                        <li className="nav_list_items About-Us">About-Us</li>
                        <li className="nav_list_items Vegetables1">Vegetables</li>
                        <li className="nav_list_items Online">Online</li>
                        <li className="nav_list_items Contact1">Contact</li>
                    </ul>
                </div>
            </nav>

            <main>
                <div className="picture1">
                    <img src="img/img_main_pumpkin.png" alt="main_pumpkin" className="img_main_pumpkin"/>
                </div>

                <div className="body_box_vegetables">
                    <p className="Vegetables2">Vegetables</p>
                </div>
                <div className="left">
                    <img src="img/img_vegetables_pepper.png" alt="main_pepper" className="img_vegetables_pepper"/>
                    <img src="img/img_vegetables_carrot.png" alt="main_carrot" className="img_vegetables_carrot"/>
                    <img src="img/img_vegetables_corn.png" alt="main_corn" className="img_vegetables_corn"/>
                </div>

                <div className="body_box_contact">
                    <p className="Contact2">Contact</p>
                </div>
                <div className="body_box_contact_text">
                    <p className="text1">
                        For any questions or suggestions about Vegetables, Vegetables Club or your online order you can contact Vegetables Customer Service by phone, email or post and we'll be happy to help. 
                    </p>
                    <div className="line_contact_text"></div>
                    <p className="email">
                        E-mail：Vegetablesaaabbccccom PHONE-886-123-456-789
                    </p>
                </div>

            </main>

        </div>

        <footer className="box_footer">
            <p className="Copyrights">Copyrights 2017 Vegetables cise / Design by Vegetables</p>
        </footer>
    </div>
  );
}

export default App;
