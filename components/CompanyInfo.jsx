import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'
import { AiOutlineFieldTime } from 'react-icons/ai'
import {MdAutoAwesome} from 'react-icons/md'
import { GiTakeMyMoney } from 'react-icons/gi'

const CompanyInfo = () => {
    React.useEffect(() => {
        const delivery = document.getElementById('delivery');
        const connection = document.getElementById('connection');
        const quality = document.getElementById('quality');
        const prices = document.getElementById('prices');

        delivery.addEventListener("mouseover", ()=>{
            delivery.style.transform = 'scale(1.1)'
        })
        delivery.addEventListener("mouseout", ()=>{
            delivery.style.transform = 'scale(1)'
        })
        connection.addEventListener("mouseover", ()=>{
            connection.style.transform = 'scale(1.1)'
        })
        connection.addEventListener("mouseout", ()=>{
            connection.style.transform = 'scale(1)'
        })
        quality.addEventListener("mouseover", ()=>{
            quality.style.transform = 'scale(1.1)'
        })
        quality.addEventListener("mouseout", ()=>{
            quality.style.transform = 'scale(1)'
        })
        prices.addEventListener("mouseover", ()=>{
            prices.style.transform = 'scale(1.1)'
        })
        prices.addEventListener("mouseout", ()=>{
            prices.style.transform = 'scale(1)'
        })
        return () => {
        }
    }, [])


    return (
        <>
            <div className='company-info-wrapper'>
                <div className='company-info'>
                    <div className='company-info-item' id='delivery'>
                        <div>
                            <TbTruckDelivery className='company-info-icon'/>
                        </div>
                        <div>
                            <h3>Tezkor Yetqazib Berish Xizmati.</h3>
                            <p>Bizning firma xaridorlarga qulaylik yaratish maqsadida Toshkent shaxri bo'ylab bepul yetqazib berish xizmatini yo'lga qo'ygan.</p>
                        </div>
                    </div>
                    <div className='company-info-item' id='connection'>
                        <div>
                            <AiOutlineFieldTime className='company-info-icon'/>
                        </div>
                        <div>
                            <h3>24/7 Mijozlarga Xizmat Ko'rsatish</h3>
                            <p>Firma uzoq yillar davomida kuniga 24 soat davomida mijozlar bilan aloqani yo'lga qo'yib kelmoqda.</p>
                        </div>
                    </div>
                    <div className='company-info-item' id='quality'>
                        <div>
                            <MdAutoAwesome className='company-info-icon'/>
                        </div>
                        <div>
                            <h3>Yuqori Sifatli O'yinchoqlar</h3>
                            <p>Bizning korxona maxsulotlari yuqori sifatli polipropilen xomashyosidan ishlab chiqarilib, sifatli va chidamli qadoqlanadi.</p>
                        </div>
                    </div>
                    <div className='company-info-item' id='prices'>
                        <div>
                            <GiTakeMyMoney className='company-info-icon'/>
                        </div>
                        <div>
                            <h3>Hamyonbop narxlar</h3>
                            <p>Barcha turdagi maxsulotlarimiz dunyo bozori bilan raqobatlasha oladigan narxlarga ega.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyInfo