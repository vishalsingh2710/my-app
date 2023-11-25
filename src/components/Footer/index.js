import "./index.css";

export default function Footer() {
  return (
    <>
    <div className="footer-top-section">
        <div className="footer-news-section">
            <div className="footer-news-text">
                <h1 className="footer-heading">Sign up for our newsletter!</h1>
                <p className="footer-paragraph">Get notified about launch, updates and weekly blogs.</p>
            </div>
            <div className="footer-search-section">
                <input type="text" placeholder="Enter your email" className="search-container"/>
                <button className="subscribe">Subscribe</button>
            </div>
        </div>
    </div>
    </>
  );
}
