import './App.scss';
import { BarChart, Bar, XAxis } from 'recharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMoneyCheckDollar,faFileLines,faMagnifyingGlass,faUpLong,faDownLong,faBusinessTime,faCoins, faPhone,faGauge, faKaaba, faUserPlus, faSackDollar, faRectangleAd, faQuestion , faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { PieChart, Pie } from 'recharts';

import img1 from './img1';
import img2 from './img2';
import img3 from './img3';
import manager from './manager';

function App() {
  const data = [
    		{ name: 'jan', students: 400 },
    		{ name: 'feb', students: 700 },
    		{ name: 'mar', students: 200 },
    		{ name: 'apr', students: 1000,fill:'blue' },
        { name: 'may', students: 100 },
    	  { name: 'June', students: 900 },
        { name: 'July', students: 500 },
        { name: 'aug', students: 200 },
        { name: 'sep', students: 400 },
        { name: 'oct', students: 100 },
        { name: 'nov', students: 700 },
        { name: 'dec', students: 300,barRadius:800 }
      ];
     
      const piedata = [
		{ students: 400, fill:'whiteSmoke'},
		{ students: 700, fill:'khaki' },
		{ students: 1000 ,fill:'paleVioletRed'}
	];

    
  return (
    <>
    
      <div className='main-wrapper'>
        <div className='inner-main-wrapper'>
            <div className='left-wrapper'>
            <h2><FontAwesomeIcon icon={faGauge} className='heading-dashboard-icon'/>Dashboard</h2>
            <div>
              <ul className='list-wrapper'> 
                  <li><FontAwesomeIcon icon={faPhone} className='starting-icon'/><span className='for-mid-text'>Dashboard</span><FontAwesomeIcon icon={faCaretRight} className='end-icon'/></li>
                  <li><FontAwesomeIcon icon={faKaaba} className='starting-icon'/><span className='for-mid-text'>Product</span><FontAwesomeIcon icon={faCaretRight} className='end-icon'/></li>
                  <li><FontAwesomeIcon icon={faUserPlus} className='starting-icon'/><span className='for-mid-text'>Customers</span><FontAwesomeIcon icon={faCaretRight} className='end-icon'/></li>
                  <li><FontAwesomeIcon icon={faSackDollar} className='starting-icon'/><span className='for-mid-text'>Income</span><FontAwesomeIcon icon={faCaretRight} className='end-icon'/></li>
                  <li><FontAwesomeIcon icon={faRectangleAd} className='starting-icon'/><span className='for-mid-text'>Promote</span><FontAwesomeIcon icon={faCaretRight} className='end-icon'/></li>
                  <li><FontAwesomeIcon icon={faQuestion} className='starting-icon'/><span className='for-mid-text'>Help</span><FontAwesomeIcon icon={faCaretRight} className='end-icon'/></li>
              </ul>
              <div className='left-side-project-des'>
                <img src={manager} height={40} alt='manager-pic' className='manager-des-pic'/>
                <div>
                  <p className='manager-des-p-1'>Evano</p>
                  <p className='manager-des-p-2'>Project Manager</p>
                </div>
                <div className='manager-des-icon'>
                  <FontAwesomeIcon icon={faCaretRight}/>
                </div>
              </div>
            </div>

          </div>
          <div className='right-wrapper'>
             <div className='top-heading-section'>
             <span>Hello Shahrukh,</span>
             
             <FontAwesomeIcon icon={faMagnifyingGlass} className='search-bar-icon'/><input type='search' placeholder='search'/>
              </div>
            <div className='header-section'>
                <span className='first-portion'>
                    <span className='wrapper-section-1'><span className='first-portion-span'><FontAwesomeIcon icon={faMoneyCheckDollar} className='first-portion-span-icon' /></span>
                    </span>
                        <span className='text-section'><p className='top-text'>Earning</p> <p className='mid-text'>$198k</p><span className='text-icon'><FontAwesomeIcon icon={faUpLong}/><span className='last-text-first'>37.8%</span><span className='last-text-last'>this year</span></span></span>
                    
                </span>
                <span className='second-portion'>
                    <span className='wrapper-section-1'><span className='second-portion-span'><FontAwesomeIcon icon={faFileLines} className='second-portion-span-icon'/></span>
                    </span>
                    <span className='text-section'><p className='top-text'>Orders</p> <p className='mid-text'>$2.4k</p><span className='text-icon-dec'><FontAwesomeIcon icon={faDownLong}/><span className='last-text-first-dec'>37.8%</span><span className='last-text-last'>this year</span></span></span>
                </span>
                <span className='third-portion'>
                    <span className='wrapper-section-1'><span className='third-portion-span'><FontAwesomeIcon icon={faCoins} className='third-portion-span-icon'/></span>
                    </span>
                    <span className='text-section'><p className='top-text'>Orders</p> <p className='mid-text'>$2.4k</p><span className='text-icon-dec'><FontAwesomeIcon icon={faDownLong}/><span className='last-text-first-dec'>37.8%</span><span className='last-text-last'>this year</span></span></span>
                    
                </span>
                <span className='forth-portion'>
                    <span className='wrapper-section-1'><span className='forth-portion-span'><FontAwesomeIcon icon={faBusinessTime} className='forth-portion-span-icon'/></span>
                    </span>
                    <span className='text-section'><p className='top-text'>Total Sales</p> <p className='mid-text'>$89k</p><span className='text-icon'><FontAwesomeIcon icon={faUpLong}/><span className='last-text-first'>11%</span><span className='last-text-last'>this week</span></span></span>
                </span>
            </div>
            <div className='middle-section'>
                  <div className='middle-section-left-portion'>
                    <div className='middle-header-wrapper'>
                    <div className='left-middle-header-wrapper'>
                      <p className='middle-top-header-1'>Overview</p>
                      <p className='middle-top-header-2'>Monthly earning</p>
                    </div>
                    <div className='right-middle-header-wrapper'>
                      <select>
                        <option>Quarterly</option>
                        <option>monthly</option>
                        <option>yearly</option>
                      </select>
                    </div>
                  </div>

                  <div className='middle-middle-portion'>
                    <div className='bar-graph-section'>
                  <BarChart width={520} height={240} data={data}>
                        <Bar dataKey="students" fill="skyblue" />
                        <XAxis dataKey="name" />
                  </BarChart>
                    </div>
                  </div>
                  </div>
                  <div className='middle-section-right-portion'>
                    <div className='pie-chart-text'>
                        <p className='pie-chart-p-1'>Customers</p>
                        <p className='pie-chart-p-2'>Customers that buy products</p>
                    </div>  
                    <div className='pie-chart-img'> 
                      <PieChart width={300} height={300} className='pie-chart'>
                          <Pie data={piedata} dataKey="students" outerRadius={80} 
                          innerRadius={40} />
                      </PieChart>
                      <span className='pie-chart-p-3'>65%</span>
                      <span className='pie-chart-p-4'>total</span>
                      <span className='pie-chart-p-5'>New</span>
                      <span className='pie-chart-p-6'>Customers</span>
                    </div>
                    
                  </div>
            </div>
            <div className='footer-section'>
              <div className='inner-footer-section'>
              <div className='upper-footer-section'>
              <div className='upper-footer-section-left'>
                <p className='footer-left-p-1'>Product Sell</p>
                <p className='footer-left-p-2'>Product Name</p>
              </div>
              <div className='upper-footer-section-right'>
              <FontAwesomeIcon icon={faMagnifyingGlass} className='magnifying-icon'/><input type='search' placeholder='search'/>
                <select>
                  <option>last 30 days</option>
                  <option>last 1 month</option>
                </select>
                <div className='product-detail'>
                  <span className='product-detail-p-1'>Stock</span>
                  <span className='product-detail-p-2'>Price</span>
                  <span>Total sales</span>
                </div>
               
              </div>
              </div>
              <hr/>
              <div className='main-lower-footer-section'>
              <div className='lower-footer-section'>
              <img src={img1} height={50} alt='prodect-detail-1'/>
              <div className='lower-footer-mid-part-2'>
                   <p className='lower-footer-mid-part-2-heading'>Abstract 3D</p>
                   <p className='lower-footer-mid-part-2-para'>laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                  <div className='lower-footer-right-part-2'> <span className='stock-detail-2'>32 in stock</span>
                    <span className='stock-detail-price-2'>$ 45.99</span>
                    <span className='stock-detail-totalsales-2'>20</span>
                  </div>
                  
                  </div>

                  <div className='lower-footer-section'>
              <img src={img2} height={54} alt='product-detail-2'/>
              <div className='lower-footer-mid-part-2'>
                   <p className='lower-footer-mid-part-2-heading'>Courtroom illustrator</p>
                   <p className='lower-footer-mid-part-2-para'> Excepteur sint occaecat cupidatat non proident.</p>
                  </div>
                  <div className='lower-footer-right-part-2'> <span className='stock-detail-2'>32 in stock</span>
                    <span className='stock-detail-price-2'>$ 45.99</span>
                    <span className='stock-detail-totalsales-2'>20</span>
                  </div>
                  
                  </div>


                  <div className='lower-footer-section'>
              <img src={img3} height={50} alt='product-detail-3'/>
              <div className='lower-footer-mid-part-2'>
                   <p className='lower-footer-mid-part-2-heading'>Editorial illustrator</p>
                   <p className='lower-footer-mid-part-2-para'>Latin scholar from Hampden-Sydney College.</p>
                  </div>
                  <div className='lower-footer-right-part-2'> <span className='stock-detail-2'>32 in stock</span>
                    <span className='stock-detail-price-2'>$ 45.99</span>
                    <span className='stock-detail-totalsales-2'>20</span>
                  </div>
                  
                  </div>
                  </div>
               </div> 
               </div>
            </div>
            </div>
          </div>
    </>
  );
}

export default App;
