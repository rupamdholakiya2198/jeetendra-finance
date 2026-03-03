import lifeImg from "./assets/life.jpg";
import healthImg from "./assets/health.jpg";
import motorImg from "./assets/motor.jpg";
import mutualImg from "./assets/mutual.jpg";
import taxImg from "./assets/tax.jpg";
import retirementImg from "./assets/retirement.png";
import childImg from "./assets/child.webp";
import nriImg from "./assets/nri.jpg";
import wealthImg from "./assets/wealth.jpg";
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { FaWhatsapp } from "react-icons/fa";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import "./App.css";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

function App() {
  const [monthly, setMonthly] = useState(5000);
  const [years, setYears] = useState(15);
  const [rate, setRate] = useState(9.5);

  const [futureValue, setFutureValue] = useState(0);
  const [totalInvested, setTotalInvested] = useState(0);
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    calculateSIP();
  }, [monthly, years, rate]);

  const calculateSIP = () => {
    const months = years * 12;
    const monthlyRate = rate / 100 / 12;

    let invested = monthly * months;

    let fv =
      monthly *
      (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
        (1 + monthlyRate));

    setFutureValue(Math.round(fv));
    setTotalInvested(invested);

    let labels = [];
    let futureArray = [];
    let investedArray = [];

    for (let i = 1; i <= years; i++) {
      const m = i * 12;
      const fvYear =
        monthly *
        (((Math.pow(1 + monthlyRate, m) - 1) / monthlyRate) *
          (1 + monthlyRate));
      labels.push(i);
      futureArray.push(Math.round(fvYear));
      investedArray.push(monthly * m);
    }

    setChartData({
      labels: labels,
      datasets: [
        {
          label: "Future Value",
          data: futureArray,
          borderColor: "#3b82f6",
          backgroundColor: "rgba(59,130,246,0.3)",
          fill: true,
        },
        {
          label: "Total Invested",
          data: investedArray,
          borderColor: "#333",
          backgroundColor: "rgba(0,0,0,0.2)",
          fill: true,
        },
      ],
    });
  };

  return (
    <div>

      {/* ===== HEADER ===== */}
      <div className="top-header">
        <div className="header-inner">
          <div>
            <h2 className="logo">JEETENDRA C. DHOLAKIYA</h2>
            <p className="logo-sub">
              Financial & Investment Consultant [Adviser]
            </p>
          </div>

          <div className="header-right">
            <div>Mobile No. 📞 +91-9823063191</div>
            <div>Email Id 📧 jdholakiya04@gmail.com</div>
          </div>
        </div>
      </div>

<section className="hero-section">
  <div className="hero-container">

    {/* LEFT CONTENT */}
    <div className="hero-left">
      <p className="hero-tag">Trusted Financial Guidance</p>
      <h1>2,000+ Families<br />5,000+ Clients</h1>
      <p className="hero-sub">One Relationship – Trust</p>
    </div>

    {/* RIGHT CONTENT */}
    <div className="hero-right">
      <div className="hero-services-box">
        <h3>Our Services</h3>
        <ul className="hero-services">
          <li>✔ Mutual Fund Advisory</li>
          <li>✔ SIP Planning</li>
          <li>✔ Life Insurance</li>
          <li>✔ Health Insurance</li>
          <li>✔ Retirement Planning</li>
          <li>✔ Tax Saving Solutions</li>
          <li>✔ Child Future Planning(Education/Marriage)</li>
        </ul>
      </div>
    </div>

  </div>
</section>

      {/* ===== BLUE INFO SECTION ===== */}
      <section className="info-section">
        <div className="info-container">
          <h2>
            Heartfelt gratitude for your trust. We are committed to guiding you
            through life's key financial decisions.
          </h2>

          <p>
            At Jeetendra C. Dholakiya Financial Services, we provide smart
            financial solutions — from Mutual Funds and Insurance to Retirement
            and Tax Planning — ensuring your wealth is protected and grown
            with expertise.
          </p>

          <div className="stats">
            <div>
              <h3>2,000+</h3>
              <span>Families</span>
            </div>
            <div>
              <h3>5,000+</h3>
              <span>Clients</span>
            </div>
            <div>
              <h3>1,000+</h3>
              <span>SIPs Managed</span>
            </div>
            <div>
              <h3>AMFI</h3>
              <span>Registered Advisor</span>
            </div>
          </div>

          <div className="service-bar">
            MUTUAL FUND | INSURANCE | RETIREMENT | TAX PLANNING
          </div>
        </div>
      </section>

{/* ===== FINANCIAL SERVICES SECTION ===== */}
<section className="services-section">

  <div className="services-container">

    <h2>Know More About Our Financial Services</h2>
    <p className="services-sub">
      Choose from a variety of investment and protection plans designed to secure your financial future.
    </p>

    <div className="services-grid">

      <div className="service-card">
        <img src={lifeImg} alt="Life Insurance"/>
        <h3>Life Insurance</h3>
        <p>Protect your family’s financial future against life uncertainties.</p>
      </div>

      <div className="service-card">
        <img src={retirementImg} alt="Early Retirement Plan"/>
        <h3>Early Retirement Plan</h3>
        <p>Build long-term corpus to retire early and live financially independent.</p>
      </div>

      <div className="service-card">
        <img src={mutualImg} alt="Mutual Fund" />
        <h3>Mutual Fund</h3>
        <p>Grow wealth systematically with professionally managed investment plans.</p>
      </div>



      <div className="service-card">
        <img src={healthImg} alt="Health Insurance"/>
        <h3>Health Insurance</h3>
        <p>Comprehensive health coverage for medical emergencies and hospital care.</p>
      </div>

      <div className="service-card">
        <img src={motorImg} alt="Motor Insurance"/>
        <h3>Motor Insurance</h3>
        <p>Secure your vehicle with complete accident and damage protection.</p>
      </div>

      
      <div className="service-card">
        <img src={taxImg} alt="Tax Benefit Plan"/>
        <h3>Tax Benefit Plan</h3>
        <p>Optimize tax savings with smart financial planning solutions.</p>
      </div>

      <div className="service-card">
        <img src={childImg} alt="Child Future Plan"/>
        <h3>Child Future Plan</h3>
        <p>Secure your child’s dreams with a structured savings plan designed to fund higher education, marriage, and future milestones without financial stress.</p>
      </div>

        <div className="service-card">
        <img src={wealthImg} alt="Wealth Managment"/>
        <h3>Wealth Managment</h3>
        <p>Comprehensive portfolio management strategies designed to grow, protect, and optimize your wealth across different asset classes.</p>
      </div>

        <div className="service-card">
        <img src={nriImg} alt="NRI Investment Advisory"/>
        <h3>NRI Investment Advisory</h3>
        <p>Specialized investment and tax planning solutions for Non-Resident Indians.</p>
      </div>



    </div>

  </div>

</section>

      {/* ===== SIP CALCULATOR SECTION ===== */}
      <section className="calculator-section">
        <h1>SIP Calculator</h1>

        <h2>S.I.P Your smart way to create wealth systematically</h2>

        <div className="calculator-inputs">

          <div>
            <label>Monthly Investment</label>
            <input
              type="number"
              value={monthly}
              onChange={(e) => setMonthly(Number(e.target.value))}
            />
          </div>

          <div>
            <label>Investment Period (Years)</label>
            <select
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
            >
              {[5, 10, 15, 20, 25].map((y) => (
                <option key={y}>{y}</option>
              ))}
            </select>
          </div>

          <div>
            <label>Expected Return (%)</label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
            />
          </div>

          <div className="result-box">
            <p>Total Investment</p>
            <h3>₹ {totalInvested.toLocaleString()}</h3>
          </div>

          <div className="result-box highlight">
            <p>Future Value</p>
            <h3>₹ {futureValue.toLocaleString()}</h3>
          </div>

        </div>

        <div className="chart-container">
          {chartData.labels && <Line data={chartData} />}
        </div>

        {/* ===== SIP STAGE VALUE SECTION ===== */}

<div className="sip-stage-section">

  <h3>Value of your SIP in different stages of investment</h3>
<div className="table-wrapper">
  <table className="sip-stage-table">
    <thead>
      <tr>
        <th>YEAR</th>
        <th>2026</th>
        <th>2031</th>
        <th>2036</th>
        <th>2041</th>
        <th>2046</th>
        <th>2051</th>
        <th>2056</th>
        <th>2061</th>
        <th>2066</th>
        <th>2071</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td className="future-label">FUTURE VALUE</td>
        <td>₹5,000</td>
        <td>₹3,85,136</td>
        <td>₹10,03,284</td>
        <td>₹19,95,416</td>
        <td>₹35,87,798</td>
        <td>₹61,43,586</td>
        <td>₹1,02,45,650</td>
        <td>₹1,68,29,502</td>
        <td>₹2,73,96,646</td>
        <td>₹4,43,57,013</td>
      </tr>
    </tbody>
  </table>
  </div>

  <button className="start-sip-btn">
    START SIP NOW
  </button>

  <p className="sip-disclaimer">
    Disclaimer: This calculator is meant for illustrative purposes only.
    It demonstrates the power of inculcating a regular savings habit for the long term.
    There is no assurance or guarantee that the future values demonstrated herein
    would be achieved. Please read the Scheme Information Document carefully before investing.
  </p>

</div>

      </section>

            <section>
        <ContactForm />
      </section>


      {/* ===== TOP PERFORMING SCHEMES ===== */}
<section className="schemes-section">

  <div className="schemes-container">

    <h2>Invest In Industry Top Performing Schemes</h2>
    <p className="schemes-sub">
      Selected equity schemes based on historical performance.
    </p>

<div className="table-wrapper">
    <table className="schemes-table">
      <thead>
        <tr>
          <th>AMC</th>
          <th>Scheme</th>
          <th>1Y Return</th>
          <th>3Y Return</th>
          <th>5Y Return</th>
          <th>Inception</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>HDFC</td>
          <td>HDFC Midcap Opportunities Fund</td>
          <td>24.7%</td>
          <td>21.4%</td>
          <td>18.6%</td>
          <td>30.4%</td>
        </tr>

        <tr>
          <td>ICICI Prudential</td>
          <td>ICICI Bluechip Fund</td>
          <td>22.1%</td>
          <td>19.8%</td>
          <td>17.3%</td>
          <td>28.9%</td>
        </tr>

        <tr>
          <td>SBI</td>
          <td>SBI Small Cap Fund</td>
          <td>26.5%</td>
          <td>23.9%</td>
          <td>20.2%</td>
          <td>32.1%</td>
        </tr>

        <tr>
          <td>Axis</td>
          <td>Axis Growth Opportunities</td>
          <td>23.4%</td>
          <td>20.7%</td>
          <td>18.1%</td>
          <td>27.5%</td>
        </tr>

        <tr>
          <td>Kotak</td>
          <td>Kotak Emerging Equity Fund</td>
          <td>25.2%</td>
          <td>22.3%</td>
          <td>19.5%</td>
          <td>29.8%</td>
        </tr>
      </tbody>
    </table>
    </div>

    <p className="scheme-disclaimer">
      * Past performance is not indicative of future returns. Returns are illustrative only.
    </p>

      <div className="need-help-container">

    <div className="help-left">
      <img 
        src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png"
        alt="Support"
        className="help-avatar"
      />
    </div>

    <div className="help-center">
      <h3>Need help?</h3>
      <p>Give us a call on</p>
      <h2 className="help-number">+91 9823063191</h2>
    </div>

    <div className="help-right">
      <button className="checkout-btn">
        Proceed to Checkout
      </button>
    </div>

  </div>

  </div>

</section>

{/* ===== FOOTER SECTION ===== */}

<footer className="footer-section">

  <div className="footer-container">

    <div className="footer-logo">
      <h2>JEETENDRA C. DHOLAKIYA</h2>
      <p>Financial & Investment Consultant [Adviser]</p>
    </div>

    <div className="footer-columns">

      <div className="footer-col">
        <h4>Mutual Funds</h4>
        <ul>
          <li>Why Mutual Funds?</li>
          <li>Our Advisory</li>
          <li>Top Performers</li>
          <li>Risk Profile</li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Life Insurance</h4>
        <ul>
          <li>Why Life Insurance?</li>
          <li>Premium Calculator</li>
          <li>Term Plans</li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>SIP Investment</h4>
        <ul>
          <li>Why SIP?</li>
          <li>SIP Calculator</li>
          <li>Retirement Planner</li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>Bonds</h4>
        <ul>
          <li>Government Bonds</li>
          <li>Corporate Bonds</li>
        </ul>
      </div>


      <div className="footer-col">
        <h4>Information</h4>
        <ul>
          <li>Industry News</li>
          <li>Tax Guide</li>
          <li>FAQs</li>
        </ul>
      </div>

    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2026 Jeetendra C. Dholakiya. All Rights Reserved.</p>
    <div className="footer-links">
      <span>Disclaimer</span>
      <span>Privacy Policy</span>
      <span>Contact Us</span>
      <span>Site Map</span>
    </div>
  </div>

</footer>

      {/* ===== WHATSAPP ===== */}
      <a
        href="https://wa.me/919823063191"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>

    </div>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    await fetch("https://formsubmit.co/ajax/jdholakiya04@gmail.com", {
      method: "POST",
      body: data,
    });

    setSubmitted(true);
    form.reset();   // ✅ THIS CLEARS FORM

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>Enter your details and we will connect with you shortly.</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="tel" name="phone" placeholder="Mobile Number" required />
          <textarea name="message" placeholder="Your Message" required />

          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Lead from Website" />

          <button type="submit">Submit</button>
        </form>

        {submitted && (
          <p className="success-message">
            Thank you! We will contact you soon.
          </p>
        )}
      </div>
    </section>
  );
}

export default App;