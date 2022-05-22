function App() {
    return (
        <div className="wrapper " >
            <header >
                <div className="headerLeft" >
                    <img width={40} height={40} src='/img/logo.png' />
                    <div >
                        <h3 > React Shop </h3>
                        <p > The Best Shop </p>
                    </div>
                </div>
                <ul className="headerRight" >
                    <li >
                        <svg width="20"
                            height="15"
                            viewBox="0 0 20 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg" >
                            <path d="M1 1H4.27273L6.46545 11.9555C6.54027 12.3321 6.7452 12.6705 7.04436 12.9113C7.34351 13.1522 7.71784 13.2801 8.10182 13.2727H16.0545C16.4385 13.2801 16.8129 13.1522 17.112 12.9113C17.4112 12.6705 17.6161 12.3321 17.6909 11.9555L19 5.09091H5.09091"
                                stroke="#9B9B9B" width="2" linecap="round" linejoin="round" />
                        </svg>
                        <span> 1205 usd </span>
                    </li>
                    <li > < img src="/img/user.png" /> User </li>
                </ul>
            </header>
            <div className="content" >
                <h1 className="allSh" > all sneackers </h1>

        <div className="sneackers">
        <div className="card">
                    <img width={150} height={150} src="/img/sneackers/1.jpg" alt="" />
                    <h5> Mean's shouese</h5>
                        <div className="cardBottom">
                            <div className="divSpan">
                                <p className="price">Price:</p>
                                <b> 50 usd</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="/img/plus.svg"/>
                            </button>
                        </div>
                </div>

                <div className="card">
                    <img width={150} height={150} src="/img/sneackers/2.jpg" alt="" />
                    <h5> Mean's shouese</h5>
                        <div className="cardBottom">
                            <div className="divSpan">
                                <p>Price:</p>
                                <b>50 usd</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="/img/plus.svg"/>
                            </button>
                        </div>
                </div>

                <div className="card">
                    <img width={150} height={150} src="/img/sneackers/3.jpg" alt="" />
                    <h5> Mean's shouese</h5>
                        <div className="cardBottom">
                            <div className="divSpan">
                                <p>Price:</p>
                                <b>50 usd</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="/img/plus.svg"/>
                            </button>
                        </div>
                </div>

                <div className="card">
                    <img width={150} height={150} src="/img/sneackers/4.jpg" alt="" />
                    <h5> Mean's shouese</h5>
                        <div className="cardBottom">
                            <div className="divSpan">
                                <p>Price:</p>
                                <b>50 usd</b>
                            </div>
                            <button className="button">
                                <img width={11} height={11} src="/img/plus.svg"/>
                            </button>
                        </div>
                </div>
        </div>
                
            </div>
        </div>
    );
}

export default App;