import React, {useEffect, useState} from 'react';
import s from './style.module.scss'
import HomepageBannerIcon from "../../svgs/HomepageBannerIcon";
import AboutProductItemIcon1 from "../../svgs/AboutProductItemIcons/AboutProductItemIcon1";
import AboutProductItemIcon2 from "../../svgs/AboutProductItemIcons/AboutProductItemIcon2";
import AboutProductItemIcon3 from "../../svgs/AboutProductItemIcons/AboutProductItemIcon3";
import AboutProductItemIcon4 from "../../svgs/AboutProductItemIcons/AboutProductItemIcon4";
import FAQArrowIcon from "../../svgs/FAQArrowIcon";
import WhatYouGetIcon1 from "../../svgs/WhatYouGetIcons/WhatYouGetIcon1";
import WhatYouGetIcon4 from "../../svgs/WhatYouGetIcons/WhatYouGetIcon4";
import WhatYouGetIcon3 from "../../svgs/WhatYouGetIcons/WhatYouGetIcon3";
import WhatYouGetIcon2 from "../../svgs/WhatYouGetIcons/WhatYouGetIcon2";
import FAQItem from "./components/FAQItem/FAQItem";
import HomepageBottomBannerIcon from "../../svgs/HomepageBottomBannerIcon";
import Modal from "../Modal/Modal";
import EnrollModalChild from "./components/EnrollModalChild/EnrollModalChild";
import StudentIcon from "../../svgs/StudentIcon";

const HomepageLayout = () => {
    const [isEnroll, setIsEnroll] = useState<boolean>(false)

    useEffect(() => {
        if (isEnroll) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "initial"
        }
    }, [isEnroll])

    return (
        <>
            <Modal isModal={isEnroll} child={<EnrollModalChild onClose={() => setIsEnroll(false)}/>} onClose={() => setIsEnroll(false)}/>
        <div className={s.wrapper}>
            <div className={s.topBanner}>
                <div className={s.bannerInfo}>
                    <div className={s.bannerTextBlock}>
                        <span className={s.bannerHeader}>Стань <span style={{color: "#00ECBE"}}>java</span> разработчиком</span>
                        <span className={s.bannerSubHeader}>будь специалистом с зарплатой от <span
                            style={{color: "#00ECBE"}}>150 тысяч</span><br/> оплата после трудоустройства</span>
                    </div>
                    <button onClick={() => setIsEnroll(true)} className={s.bannerBtn}>Поступить</button>
                </div>
                <div className={s.bannerIcon}>
                    <HomepageBannerIcon/>
                </div>
            </div>
            <div className={s.bodyBlock}>
                <p className={s.bodyTitle}>Обучение проходит дистанционно и нацелено на результат!</p>
                <p className={s.bodySubTitle}>Наши с тобой цели совпадают – мы получим оплату за обучение только после
                    твоего трудоустройства.</p>
                <div className={s.aboutProductItems}>
                    <div className={s.aboutProductItem}>
                        <div className={s.aboutProductItemIcon}>
                            <AboutProductItemIcon1/>
                        </div>
                        <p className={s.aboutProductItemText}>
                            Интенсивная подготовка<br/> с ментором
                        </p>
                    </div>
                    <div className={s.aboutProductItem}>
                        <div className={s.aboutProductItemIcon}>
                            <AboutProductItemIcon2/>
                        </div>
                        <p className={s.aboutProductItemText}>
                            Опыт в реальном<br/> проекте
                        </p>
                    </div>
                    <div className={s.aboutProductItem}>
                        <div className={s.aboutProductItemIcon}>
                            <AboutProductItemIcon3/>
                        </div>
                        <p className={s.aboutProductItemText}>
                            Поддержка во<br/> время работы
                        </p>
                    </div>
                    <div className={s.aboutProductItem}>
                        <div className={s.aboutProductItemIcon}>
                            <AboutProductItemIcon4/>
                        </div>
                        <p className={s.aboutProductItemText}>
                            Гарантированное<br/> трудоустройство
                        </p>
                    </div>
                </div>
            </div>
            <div className={s.bodyBlock}>
                <p className={s.bodyTitle}>
                    что вы получите от нас:
                </p>
                <div className={s.whatYouGetItems}>
                    <div className={s.whatYouGetItem}>
                        <div className={s.whatYouGetHeader}>
                            <div className={s.whatYouGetItemIcon}><WhatYouGetIcon1/></div>
                            <p className={s.whatYouGetTitle}>Менторство:</p>
                        </div>
                        <p className={s.whatYouGetText}>
                            Ментор это не педагог. Большая часть обучения нацелена на самообучение с полным контролем со
                            стороны ментора. Наша задача - направлять, давать дополнительные задачи и материалы для
                            успешного освоения материала.
                        </p>
                    </div>
                    <div className={s.whatYouGetItem}>
                        <div className={s.whatYouGetHeader}>
                            <div className={s.whatYouGetItemIcon}><WhatYouGetIcon2/></div>
                            <p className={s.whatYouGetTitle}>Мотивация и поддержка:</p>
                        </div>
                        <p className={s.whatYouGetText}>
                            На протяжении обучения вы будете постоянно взаимодействовать с ментором. Любые трудности
                            будут решаться вместе. После трудоустройсва мы никуда не пропадем, постоянная поддержка
                            гарантируется.
                        </p>
                    </div>
                    <div className={s.whatYouGetItem}>
                        <div className={s.whatYouGetHeader}>
                            <div className={s.whatYouGetItemIcon}><WhatYouGetIcon3/></div>
                            <p className={s.whatYouGetTitle}>Контроль знаний:</p>
                        </div>
                        <p className={s.whatYouGetText}>
                            Мы предъявляем высокие требования к каждому этапу обучения, поэтому будут постоянные
                            проверки знаний и решений. Только таким образом у нас с вами получится добиться желаемого
                            результата.
                        </p>
                    </div>
                    <div className={s.whatYouGetItem}>
                        <div className={s.whatYouGetHeader}>
                            <div className={s.whatYouGetItemIcon}><WhatYouGetIcon4/></div>
                            <p className={s.whatYouGetTitle}>Подготовка к собеседованиям</p>
                        </div>
                        <p className={s.whatYouGetText}>
                            Индивидуальный подход к каждому ученику при подготовке к интервью, исправление недоработок,
                            создание и отработка критических напряженных ситуаций для получения наиболее выгодного
                            предложения на выходе.
                        </p>
                    </div>
                </div>
            </div>
            <div className={s.bodyBlock}>
                <div className={s.bodyTitleWrapper}>
                    <p className={s.bodyTitle}>часто задаваемые вопросы</p>
                    <div className={s.FAQArrowIconWrapper}><FAQArrowIcon/></div>
                </div>
                <div className={s.FAQItems}>
                    <FAQItem title="Мне 40 лет, возможно ли поступить на курс?"
                             bodyText="Да, зависит только от вашей вовлеченности и способности уделять примерно 20 часов в неделю (больше - лучше)"/>
                    <FAQItem title="Сколько длится обучение?"
                             bodyText="Зависит от вашей предыдущей подготовки. Например, с 0 до трудоустройства можем ориентироваться на 11 месяцев, но самый быстрый ученик справился за 4 месяца!"/>
                    <FAQItem title="Что будет, если я не смогу устроиться?"
                             bodyText="Хоть такое и маловероятно, но по договору вы нам ничего не будете должны. Обучение по сути будет бесплатным."/>
                    <FAQItem title="Сколько я буду платить после трудоустройства?"
                             bodyText="За наши труды и риск мы берем 15% от зарплаты в течение 2 лет, но также есть возможность оплатить одним платежом."/>
                    <FAQItem title="Что делать, если на работе я столкнусь с трудностями с решением поставленных задач?"
                             bodyText="С нашей стороны вы получите поддержку в течение года с момента трудоустройства, а значит такие трудности мы будем преодолевать вместе!"/>
                </div>
            </div>
            <div className={s.bodyBlock}>
                <p className={s.bodyTitle}>Отзывы</p>
                <div className={s.studentReviews}>
                    <div className={s.studentReview}>
                        <div className={s.studentReviewInfo}>
                            <div className={s.studentIcon}><StudentIcon/></div>
                            <p style={{borderWidth: "0 2px 0 0"}} className={s.studentName}>Дмитрий Маслов 32 года</p>
                        </div>
                        <div className={s.studentReviewTextBlock}>
                            <p className={s.studentReviewText}>Прошла курс подготовки java-разработчика и уже полгода
                                работаю в
                                айти-компании. В программирование ушла из творческой сферы, и начинала с полного нуля.
                                Было
                                достаточно сложно перестроить мышление, учитывая программу курса, где ментор направляет
                                тебя, а
                                не разжовывает каждую тему. Вначале это конечно выбивало из колеи (да и не только
                                вначале)),
                                ведь в институте и школе был совершенно другой подход. А тут, новая тема или задача -
                                нужно
                                быстро вкатываться, пробовать на практике и изучать, а не сидеть слушать долгие лекции,
                                ведь на
                                работе никто не будет ждать пока ты во всем разберешься. Влад, конечно много помогал и
                                объяснял,
                                но основная задача курса - научить думать, искать информацию, быстро соображать, уметь
                                общаться,
                                задавать вопросы и понимать что от тебя требуется. На обучение потратила 4 месяца. И
                                наверно
                                прошла все стадии от отрицания до любви к этой профессии, хотя путь и был сложным с
                                большим
                                обилием слез. А творчеством сейчас занимаюсь как хобби)</p>
                            <button className={s.readMore}>Читать дальше...</button>
                        </div>
                    </div>
                    <div className={s.studentReview}>
                        <div className={s.studentReviewInfo}>
                            <div className={s.studentIcon}><StudentIcon/></div>
                            <p style={{borderWidth: "0 2px 0 0"}} className={s.studentName}>Дмитрий Маслов 32 года</p>
                        </div>
                        <div className={s.studentReviewTextBlock}>
                            <p className={s.studentReviewText}>Прошла курс подготовки java-разработчика и уже полгода
                                работаю в
                                айти-компании. В программирование ушла из творческой сферы, и начинала с полного нуля.
                                Было
                                достаточно сложно перестроить мышление, учитывая программу курса, где ментор направляет
                                тебя, а
                                не разжовывает каждую тему. Вначале это конечно выбивало из колеи (да и не только
                                вначале)),
                                ведь в институте и школе был совершенно другой подход. А тут, новая тема или задача -
                                нужно
                                быстро вкатываться, пробовать на практике и изучать, а не сидеть слушать долгие лекции,
                                ведь на
                                работе никто не будет ждать пока ты во всем разберешься. Влад, конечно много помогал и
                                объяснял,
                                но основная задача курса - научить думать, искать информацию, быстро соображать, уметь
                                общаться,
                                задавать вопросы и понимать что от тебя требуется. На обучение потратила 4 месяца. И
                                наверно
                                прошла все стадии от отрицания до любви к этой профессии, хотя путь и был сложным с
                                большим
                                обилием слез. А творчеством сейчас занимаюсь как хобби)</p>
                            <button className={s.readMore}>Читать дальше...</button>
                        </div>
                    </div>
                    <div className={s.studentReview}>
                        <div className={s.studentReviewTextBlock}>
                            <p className={s.studentReviewText}>Прошла курс подготовки java-разработчика и уже полгода
                                работаю в
                                айти-компании. В программирование ушла из творческой сферы, и начинала с полного нуля.
                                Было
                                достаточно сложно перестроить мышление, учитывая программу курса, где ментор направляет
                                тебя, а
                                не разжовывает каждую тему. Вначале это конечно выбивало из колеи (да и не только
                                вначале)),
                                ведь в институте и школе был совершенно другой подход. А тут, новая тема или задача -
                                нужно
                                быстро вкатываться, пробовать на практике и изучать, а не сидеть слушать долгие лекции,
                                ведь на
                                работе никто не будет ждать пока ты во всем разберешься. Влад, конечно много помогал и
                                объяснял,
                                но основная задача курса - научить думать, искать информацию, быстро соображать, уметь
                                общаться,
                                задавать вопросы и понимать что от тебя требуется. На обучение потратила 4 месяца. И
                                наверно
                                прошла все стадии от отрицания до любви к этой профессии, хотя путь и был сложным с
                                большим
                                обилием слез. А творчеством сейчас занимаюсь как хобби)</p>
                            <button className={s.readMore}>Читать дальше...</button>
                        </div>
                        <div className={s.studentReviewInfo}>
                            <div className={s.studentIcon}><StudentIcon/></div>
                            <p style={{borderWidth: "0 0 0 2px"}} className={s.studentName}>Дмитрий Маслов 32 года</p>
                        </div>
                    </div>
                    <div className={s.studentReview}>
                        <div className={s.studentReviewTextBlock}>
                            <p className={s.studentReviewText}>Прошла курс подготовки java-разработчика и уже полгода
                                работаю в
                                айти-компании. В программирование ушла из творческой сферы, и начинала с полного нуля.
                                Было
                                достаточно сложно перестроить мышление, учитывая программу курса, где ментор направляет
                                тебя, а
                                не разжовывает каждую тему. Вначале это конечно выбивало из колеи (да и не только
                                вначале)),
                                ведь в институте и школе был совершенно другой подход. А тут, новая тема или задача -
                                нужно
                                быстро вкатываться, пробовать на практике и изучать, а не сидеть слушать долгие лекции,
                                ведь на
                                работе никто не будет ждать пока ты во всем разберешься. Влад, конечно много помогал и
                                объяснял,
                                но основная задача курса - научить думать, искать информацию, быстро соображать, уметь
                                общаться,
                                задавать вопросы и понимать что от тебя требуется. На обучение потратила 4 месяца. И
                                наверно
                                прошла все стадии от отрицания до любви к этой профессии, хотя путь и был сложным с
                                большим
                                обилием слез. А творчеством сейчас занимаюсь как хобби)</p>
                            <button className={s.readMore}>Читать дальше...</button>
                        </div>
                        <div className={s.studentReviewInfo}>
                            <div className={s.studentIcon}><StudentIcon/></div>
                            <p style={{borderWidth: "0 0 0 2px"}} className={s.studentName}>Дмитрий Маслов 32 года</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.bodyBlock}>
                <div className={s.bottomBanner}>
                    <div className={s.bottomBannerInfo}>
                        <div className={s.bottomBannerTextBlock}>
                            <p className={s.bottomBannerTitle}>Оставь заяку для поступления</p>
                            <p className={s.bottomBannerSubTitle}>Если у тебя есть вопросы о формате или ты не знаешь,
                                что выбрать, оставь свой контакт — мы свяжемся с тобой, чтобы ответить на все
                                вопросы.</p>
                        </div>
                        <button onClick={() => setIsEnroll(true)} className={s.bottomBannerBtn}>Поступить</button>
                    </div>
                    <div><HomepageBottomBannerIcon/></div>
                </div>
            </div>
        </div>
        </>
    );
};

export default HomepageLayout;