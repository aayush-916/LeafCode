import React from 'react'
import './Whatsapp.css'
function Whatsapp() {
  return (
   <>
    <div class="fixed-bottom-right2">
        <a
          href="mailto:info@codeleaf.in"
          target="_blank"
          rel="noopener noreferrer"
          class="whatsapp-button"
        >
          <img src="/Email_icon.png" alt="WhatsApp" class="whatsapp-icon" />
        </a>
      </div>
      <div class="fixed-bottom-right">
        <a
          href="https://wa.me/+917542019191"
          target="_blank"
          rel="noopener noreferrer"
          class="whatsapp-button"
        >
          <img src="/whatsapp-icon.webp" alt="WhatsApp" class="whatsapp-icon" />
        </a>
      </div>
   </>
  )
}

export default Whatsapp