import React, {useContext} from 'react'
import LangContext from '../context/LangContext'
import MailchimpImage from '../images/footer/mailchimp-icon.svg'
import './Newsletter.css'
export default function Newsletter() {
    const {lang} = useContext(LangContext);

  return (
        <div className='newsletter'>
            <div className='top-border'><h3>{lang === 'el' ? 'Γραφτείτε στο newsletter μας!': 'Subscribe to our newsletter!'}</h3></div>
            <div className='newsletter-body'>
                <a href="https://euroavia.us20.list-manage.com/subscribe/post?u=35b0575043df6d9b614e5f5f0&id=b3729a477f&f_id=004c57e6f0" target="_blank" rel="noopener">Subscribe <img loading="lazy" src={MailchimpImage} alt='Mailchimp' /></a>
                {/* <img src='https://cdn-images.mailchimp.com/monkey_rewards/grow-business-banner-2.png' alt='Mailchimp' /> */}
            </div>
        </div>
  )
}
