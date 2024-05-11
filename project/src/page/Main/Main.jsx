import { useEffect, useRef, useState } from 'react';
import style from './style.module.scss'

function Main() {
    const [daysTime, setDaysTime] = useState('00')
    const [hoursTime, setHoursTime] = useState('00')
    const [minutesTime, setMinutesTime] = useState('00')
    const [secondsTime, setSecondsTime] = useState('00')
    const [popup, setPopup] = useState(false)

    let intervalTime = useRef()

    const timeStart = () => {
        const endDate = new Date('07 24, 2024 00:00:00').getTime()

        intervalTime = setInterval(() => {
            const nowTime = new Date().getTime()
            const intervalDate = endDate - nowTime;

            const days = Math.floor(intervalDate / (1000 * 60 * 60 * 24))
            const hours = Math.floor((intervalDate % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
            const minutes = Math.floor((intervalDate % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((intervalDate % (1000 * 60)) / 1000)

            if (intervalDate < 0) {
                clearInterval(intervalTime.current)
            } else {
                setDaysTime(days)
                setHoursTime(hours)
                setMinutesTime(minutes)
                setSecondsTime(seconds)
            }
        }, 1000)

    }
    useEffect(() => {
        timeStart();
        return () => {
            clearInterval(intervalTime.current)
        }
    })

    const clickBtn = () => {
        setPopup(!popup)
    }

    return ( 
        <>
        <div className={style.mainWrapper}>
                <div className={style.leftTopImg}></div>
                <div className={style.centreWrapper}>
                    <div className={style.logo}>
                        <a href='http://localhost:5173/'><div className={style.logoImg}></div></a>
                        <div className={style.textLogo}>
                            <p className={style.textLead}>Lead</p>
                            <p className={style.textAdvisors}>Advisors</p>
                        </div>
                    </div>
                    <h1 className={style.textUnder}>Under Construction</h1>
                    <p>We're making lots of improvements and will be <br></br>back soon</p>
                    <div className={style.dateWrapper}>
                        <div className={style.days}>
                            <p className={style.textdate}>{daysTime}</p>
                            <div className={style.vectorImg}><span>Days</span></div>
                        </div>
                        <p>:</p>
                        <div className={style.hours}>
                            <p className={style.textdate}>{hoursTime}</p>
                            <div className={style.vectorImg}><span>Hours</span></div>
                        </div>
                        <p>:</p>
                        <div className={style.minutes}>
                            <p className={style.textdate}>{minutesTime}</p>
                            <div className={style.vectorImg}><span>Minutes</span></div>
                        </div>
                        <p>:</p>
                        <div className={style.seconds}>
                            <p className={style.textdate}>{secondsTime}</p>
                            <div className={style.vectorImg}><span>Seconds</span></div>
                        </div>
                    </div>
                    <p>Check our event page when you wait:</p>
                    <div className={style.btn}>
                        <a href='https://github.com/'>Go to the event</a>
                        <div className={style.arrowRightImg}></div>
                    </div>

                </div>
                <div className={style.rightTopImg}></div>
            </div>
            <div className={style.footerWrapper}>
                <div className={style.contentWrapper}>
                    <div className={style.btnEmail}>
                        <input placeholder='Enter your Email and get notified'></input>
                        <div onClick={clickBtn} className={style.circle}>
                            <div className={style.arrowRightImg}></div>
                        </div>
                    </div>
                    <div className={style.textOtherEvents}>
                        <p>Other Events</p>
                        <div className={style.arrowbottomImg}></div>
                    </div>
                </div>
            </div>
            {popup && (<div className={style.popupWrapper}>

                <div className={style.popupContent}>
                    <div className={style.xImg}></div>
                    <h1>Success!</h1>
                    <p>You have successfully subscribed to the email newsletter</p>
                    <div onClick={clickBtn} className={style.btnClose}>Close</div>
                </div>
            </div>)}
        </>
     );
}

export default Main;