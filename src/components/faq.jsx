import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
    title: "FAQ",
    rows: [
        {
            title: "What is NFTFLIXPRO ?",
            content: `NFTFLIXPRO is a platform to empower creators, at same time allows fans to earn passive Income by supporting their creators.`,
        },
        {
            title: "What is use of NFTFLIXPRO Token?",
            content: `Participate in Film Fundings, 
            Earn Royalties from Tickets & Licenses Sold.`,
        },
        {
            title: "Why Should I Invest Into It?",
            content: `As we onboard more creators,
            NFTFLIXPRO is aiming to become Netflix of Decentralized World,
            Where we value creators & audience over profits.
            
            That’s why we empower creators to create content , while their fans can benefit from creators work too. `,
        },
        
    ],
};

const styles = {
    // bgColor: 'white',
    titleTextColor: "blue",
    rowTitleColor: "blue",

    // rowContentColor: 'grey',
    // arrowColor: "red",
    
        // bgColor: 'white',
        titleTextColor: 'black',
         titleTextSize: '48px',
        rowTitleColor: 'blue',
         rowTitleTextSize: 'medium',
        
       
         rowContentColor: 'grey',
        rowContentTextSize: '16px',
         rowContentPaddingTop: '10px',
        rowContentPaddingBottom: '10px',
       // rowContentPaddingLeft: '10px',
     rowContentPaddingRight: '150px',
        // arrowColor: "red",
        transitionDuration: "1s",
         timingFunc: "ease"
        
      
};

const config = {
     animate: true,
     arrowIcon: "V",
     tabFocus: true
};

export const Faqs = () => {

    return (
        <div className="FaqContain">
            <Faq
                data={data}
                styles={styles}
                config={config}
            />
        </div>
    );
}