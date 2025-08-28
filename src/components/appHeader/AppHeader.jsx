import '/src/components/appHeader/appHeader.css';


const AppHeader = () => {
    return (
        <header className="app__header">
            <div className="stripe">
                <div className="orange-stripe"></div>
                <div className="red-stripe"></div>
            </div>
            <div className="header__wrapper">
                <div className="header__left-part">
                    <a href="#" className="header__logo">
                        <img src="/src/assets/logo/brand-logo.svg" alt="brand-logo" />
                    </a>
                    <h2 className="header__title">
                        <span>K</span>oi farm
                    </h2>
                </div>
                <div className="header__right-part">
                    <nav className="burger">
                        <span></span><span></span><span></span>
                    </nav>
                    <a href="#" className="the_farm">
                        the farm
                    </a>
                    <a href="#" className="the_farm">
                        fishepedia
                    </a>
                    <a href="#" className="the_farm">
                        contact
                    </a>
                    <a href="#" className="orange-btn">
                        <span>shop</span>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default AppHeader;