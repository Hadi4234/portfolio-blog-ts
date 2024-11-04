"use client"
import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

function WhatsappChat() {
  return (
    <div className='container mx-auto '>
      <FloatingWhatsApp
        phoneNumber="+8801701032252"
        accountName="Abdullah Al Hadi"
        allowEsc
        className='bottom-20 left-20'
        notificationSound
        avatar='/hadi.jpg'
        notification />
    </div>

  )
}

export default WhatsappChat