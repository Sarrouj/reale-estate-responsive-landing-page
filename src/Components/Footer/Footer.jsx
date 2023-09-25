import './Footer.css';

const Footer =()=>{
    return(
        <div className="footer container">
            {/* Left Side */}
            <div className="f-leftSide">
                <div className="f-logo">
                    <img src="../../../public/images/FooterLogo.png" alt="" />
                </div>
                <p className='mainText'>Our Vision is to make all people
                <br/>the best place to live for them.</p>
            </div>
            {/* Right Side */}
            <div className="f-rightSide">
                <span className="f-title primaryText">Information</span>
                <p className='mainText'>145 New york, FL 4571, USA</p>
                <ul>
                    <li>Property</li>
                    <li>Services</li>
                    <li>Product</li>
                    <li>About Us</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;
