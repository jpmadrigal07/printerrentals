import React from 'react'
import TitleDescriptionLink from './TitleDescriptionLink'

const itemLinks = [
    {
      item: "Facebook",
      link: "https://www.facebook.com/printer.rentals.ph.2024",
    },
    {
      item: "Twitter",
      link: "https://printerrentalsph.com/about/#",
    },
    {
      item: "Instagram",
      link: "https://printerrentalsph.com/about/#",
    },
  ];

const SocialMediaSection = () => {
  return (
    <div>
        <TitleDescriptionLink title='Social Media' itemLinks={itemLinks}/>
    </div>
  )
}

export default SocialMediaSection