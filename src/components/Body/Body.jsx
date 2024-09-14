import React from 'react';
import './Body.css';

const Body = () => {
    const boxColors = ['#0bb98e', '#000000', '#c38ece', '#ebd46d'];

    return (
        <div className='featured-plans'>

            <h2 className='featured-title'>   <a href="#">Featured Plans</a></h2>

            <div className='explore-all-container'>
                <h1 className='box-link'> <a href="#">Explore All</a></h1>
            </div>

            <div className='box-container'>

                {/* First Box with Strategy */}
                <div className='box' style={{ backgroundColor: boxColors[0] }}>
                    <div className='box-text'>
                        STRATEGY
                    </div>
                    <div className='box-subtitle'>
                        Money Momentum
                    </div>
                    <div className='box-paragraph'>
                        Tract Premium helps you start saver <br />
                        investments insights covering.
                    </div>
                    <div className='box-line'></div>
                    <div className='box-cagr'>
                        3 yrs CAGR
                        <br />
                        <div className='box-cagr-value'>
                            <strong>7.20%</strong>
                        </div>
                    </div>
                    <a href="#" className='box-icon black-icon'>
                        <i className="bi bi-arrow-right-square-fill"></i>
                    </a>
                </div>

                {/* Second Box with PLANS */}
                <div className='box' style={{ backgroundColor: boxColors[1] }}>
                    <div className='box-text' style={{ color: 'white' }}>
                        PLANS
                    </div>
                    <div className='box-subtitle' style={{ color: 'white' }}>
                        Long-Term
                    </div>
                    <div className='box-paragraph' style={{ color: 'white' }}>
                        Create a vision. To get Started, imagine <br />
                        your dream life.
                    </div>
                    <div className='box-line'></div>
                    <div className='box-cagr' style={{ color: 'white' }}>
                        25 yrs CAGR
                        <br />
                        <div className='box-cagr-value-black'>
                            <strong>14.20%</strong>
                        </div>
                    </div>
                    <a href="#" className='box-icon white-icon'>
                        <i className="bi bi-arrow-right-square-fill"></i>
                    </a>
                </div>

                {/* Third Box */}
                <div className='box' style={{ backgroundColor: boxColors[2] }}>
                    <div className='box-text'>
                        STRATEGY
                    </div>
                    <div className='box-subtitle'>
                        Focussed
                    </div>
                    <div className='box-paragraph'>
                        Be focused Life planning, however, can<br />
                        serve as a roadmap or guide.
                    </div>
                    <div className='box-line'></div>
                    <div className='box-cagr'>
                        1 yr returns
                    </div>
                    <div className='box-cagr-value'>
                        <strong>11.20%</strong>
                    </div>
                    <a href="#" className='box-icon black-icon'>
                        <i className="bi bi-arrow-right-square-fill"></i>
                    </a>
                </div>

                {/* Fourth Box */}
                <div className='box' style={{ backgroundColor: boxColors[3] }}>
                    <div className='box-text'>
                        PLANS
                    </div>
                    <div className='box-subtitle'>
                        Fixed Income
                    </div>
                    <div className='box-paragraph'>
                        Get multiple benefits. and lumpsum<br /> option & Guaranteed Returns
                    </div>
                    <div className='box-line'></div>
                    <div className='box-cagr'>
                        5 yrs CAGR
                    </div>
                    <div className='box-cagr-value'>
                        <strong>8.20%</strong>
                    </div>
                    <a href="#" className='box-icon black-icon'>
                        <i className="bi bi-arrow-right-square-fill"></i>
                    </a>

                </div>

            </div>
            <div className='box-line-footer'></div>

            <div className="terms-container">
                <a href="#" className="terms-link"> Terms Policy </a>
                <span className="dot">•</span>
                <a href="#" className="customer-link"> Customer Story </a>
            </div>
            <div className="arrow-container">
    <p className="arrow-link"> <a href=''>
    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="22" fill="black" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
</svg></a>
    </p>
</div>
        </div>
    );
}

export default Body;
