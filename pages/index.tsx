import React from 'react'

//Socials
import FacebookSocial from 'assets/icons/facebookSocial'
import LinkedInSocial from 'assets/icons/linkedinSocial'
import YoutubeSocial from 'assets/icons/youtubeSocial'
import InstagramSocial from 'assets/icons/instagramSocial'

//Cards
import JobcardIcon from 'assets/icons/jobcardIcon'
import InvoiceIcon from 'assets/icons/invoiceIcon'
import StockIcon from 'assets/icons/stockIcon'

const Home: React.FC = ()=> {
  return (
    <div className="homePage">
        <div className="callToAction">
            <h1>
                Let <span>Resource</span> <span>Zen</span> make life easier for you.
            </h1>
            <p>We help you customise your business resources such as, job cards, invoices, stock list, and much more.  </p>
            <button>Get Started</button>
            <div className="socials">
                <FacebookSocial/>
                <LinkedInSocial/>
                <YoutubeSocial/>
                <InstagramSocial/>
            </div>
        </div>
        <div className="features">
            <h1>OUR FEATURES</h1>
            <p>Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            <div className="cardGrid">
                <div className="card">
                    <JobcardIcon/>
                </div>
                <div className="card">
                    <InvoiceIcon/>
                </div>
                <div className="card">
                    <StockIcon/>
                </div>
            </div>
        </div>
    </div>
  )
}
  
export default Home