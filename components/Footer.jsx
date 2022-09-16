import React from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { FaPaperPlane } from 'react-icons/fa'

const Footer = () => {
    React.useEffect(() => {
        const insta = document.getElementById('insta');
        const telegram = document.getElementById('telegram');

        insta.addEventListener("mouseover", () => {
            insta.style.transform = 'scale(1.2'
        })
        insta.addEventListener("mouseout", () => {
            insta.style.transform = 'scale(1)'
        })
        telegram.addEventListener("mouseover", () => {
            telegram.style.transform = 'scale(1.2'
        })
        telegram.addEventListener("mouseout", () => {
            telegram.style.transform = 'scale(1)'
        })
        return () => {
        }
    }, [])

    return (
        <div className='footer-container'>
            <p className='icons'>
                <a href='https://www.instagram.com/boytoysuz/' target='_blank'>
                    <AiFillInstagram className='media-icon' id='insta' />
                </a>
                <a href='https://t.me/boytoysuz' target='_blank'>
                    <FaPaperPlane className='media-icon' id='telegram' />
                </a>
            </p>
            <p>2022 Dilmurod Mirzakulov | All rights reserved</p>
        </div>
    )
}

export default Footer