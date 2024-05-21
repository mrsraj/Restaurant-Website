import './HeaderCss.css';

function Header1() {
    return (
        <header className='Header1'>
             <div className='Logoclass'>
                Logo
            </div>

            <div className='header-button'>
                <div>
                    Home
                </div>
                <div>
                    Menu
                </div>
                <div>
                    About Us
                </div>
                <div>
                    Contact
                </div>
            </div>

            <div>
                Login
            </div>
        </header>
    );
}

export default Header1