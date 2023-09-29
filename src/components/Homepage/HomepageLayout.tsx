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
import useMediaQuery from "../../hooks/useMediaQuery";
import {SCREENS, studentReviews} from "../../utils/consts";
import HomepageBannerIconMobile from "../../svgs/HomepageBannerIconMobile";
import HomepageBannerIconTablet from "../../svgs/HomepageBannerIconTablet";
import ArrowRight from "../../svgs/ArrowRight";
import ReviewModal from "./components/ReviewModal/ReviewModal";
import {IReviewItem} from "../../models/common";

const HomepageLayout = () => {
    const [isEnroll, setIsEnroll] = useState<boolean>(false)
    const [review, setReview] = useState<IReviewItem | null>(null)

    const isTablet = useMediaQuery(SCREENS.tablet)
    const isMobileMiddle = useMediaQuery(SCREENS.mobile)

    const studentsArr = isTablet ? [studentReviews[0], studentReviews[1], studentReviews[3], studentReviews[2]] : studentReviews

    useEffect(() => {
        if (isEnroll) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "initial"
        }
    }, [isEnroll])

    const getBottomBannerSize = () => {
        if (isTablet) {
            return 250
        }
        return 385
    }

    const getHomepageBanner = () => {
        if (isMobileMiddle) {
            return (
                <div className={s.bannerIconMobile}>
                    <HomepageBannerIconMobile/>
                </div>
            )
        }
        if (isTablet) {
            return (
                <div className={s.bannerIconTablet}>
                    <HomepageBannerIconTablet/>
                </div>
            )
        }
        return (
            <div className={s.bannerIcon}>
                <HomepageBannerIcon/>
            </div>
        )
    }

    const getStudentReviewsPos = (index: number) => {
        if (isTablet) {
            return index === 0 || index === 2
        }
        return index < 2
    }

    const getStudentsStyles = (index: number) => {
        if (isTablet) {
            if (index === 0 || index === 2) {
                return {borderWidth: "0 2px 0 0"}
            }
            return {borderWidth: "0 0 0 2px"}
        }
        if (index <= 1) {
            return {borderWidth: "0 2px 0 0"}
        }
        return {borderWidth: "0 0 0 2px"}
    }

    return (
        <>
            <Modal isModal={isEnroll} child={<EnrollModalChild onClose={() => setIsEnroll(false)}/>}
                   onClose={() => setIsEnroll(false)}/>
            <ReviewModal onClose={() => setReview(null)} isModal={review !== null} review={review}/>
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
                    {getHomepageBanner()}
                </div>
                <div className={s.bodyBlock}>
                    <p className={s.bodyTitle}>Обучение проходит дистанционно и нацелено на результат!</p>
                    <p className={s.bodySubTitle}>Наши с тобой цели совпадают – мы получим оплату за обучение только
                        после
                        твоего трудоустройства.</p>
                    <div className={s.aboutProductItems}>
                        <div className={s.aboutProductItem}>
                            <div className={s.aboutProductItemIcon}>
                                <AboutProductItemIcon1/>
                            </div>
                            <p className={s.aboutProductItemText}>
                                Подготовка<br/> с ментором
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
                                Ментор это не педагог. Большая часть обучения нацелена на самообучение с полным
                                контролем со
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
                                проверки знаний и решений. Только таким образом у нас с вами получится добиться
                                желаемого
                                результата.
                            </p>
                        </div>
                        <div className={s.whatYouGetItem}>
                            <div className={s.whatYouGetHeader}>
                                <div className={s.whatYouGetItemIcon}><WhatYouGetIcon4/></div>
                                <p className={s.whatYouGetTitle}>Подготовка к собеседованиям</p>
                            </div>
                            <p className={s.whatYouGetText}>
                                Индивидуальный подход к каждому ученику при подготовке к интервью, исправление
                                недоработок,
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
                        <FAQItem
                            title="Что делать, если на работе я столкнусь с трудностями с решением поставленных задач?"
                            bodyText="С нашей стороны вы получите поддержку в течение года с момента трудоустройства, а значит такие трудности мы будем преодолевать вместе!"/>
                    </div>
                </div>
                <div className={s.bodyBlock}>
                    <p className={s.bodyTitle}>Программа обучения:</p>
                    <div className={s.studyProgramItems}>
                        <div className={s.studyProgramItem}>
                            <div className={s.studyProgramItemHeader}>
                                <div>1</div>
                                <p>Core</p>
                            </div>
                            <ul className={s.studyProgramItemBody}>
                                <li><span>-</span> Примитивные типы</li>
                                <li><span>-</span> ООП</li>
                                <li><span>-</span> Исключения</li>
                                <li><span>-</span> Дженерики</li>
                                <li><span>-</span> Коллекции</li>
                                <li><span>-</span> Stream API</li>
                                <li><span>-</span> Maven</li>
                                <li><span>-</span> Slf4j</li>
                                <li><span>-</span> Lombok</li>
                            </ul>
                        </div>
                        <div className={s.studyProgramItem}>
                            <div className={s.studyProgramItemHeader}>
                                <div>2</div>
                                <p>Hibernate</p>
                            </div>
                            <ul className={s.studyProgramItemBody}>
                                <li><span>-</span> ORM, JPA</li>
                                <li><span>-</span> SQL</li>
                                <li><span>-</span> Основы работы с БД</li>
                                <li><span>-</span> Конфигурация</li>
                                <li><span>-</span> Получение данных из БД</li>
                                <li><span>-</span> Обновление, удаление и сохранение данных</li>
                                <li><span>-</span> Аннотации</li>
                                <li><span>-</span> Транзакции</li>
                                <li><span>-</span> Уровни изоляции</li>
                            </ul>
                        </div>
                        <div className={s.studyProgramItem}>
                            <div className={s.studyProgramItemHeader}>
                                <div>3</div>
                                <p>Spring</p>
                            </div>
                            <ul className={s.studyProgramItemBody}>
                                <li><span>-</span> Принципы REST</li>
                                <li><span>-</span> Dependency Injection, Inversion of control</li>
                                <li><span>-</span> Конфигурация</li>
                                <li><span>-</span> Аннотации (bean, component и тд)</li>
                                <li><span>-</span> Архитектура приложения</li>
                                <li><span>-</span> Spring security</li>
                                <li><span>-</span> Jwt</li>
                                <li><span>-</span> Управление транзакциями (аннотации, propagation и тд)</li>
                                <li><span>-</span> Разработка тестового приложения</li>
                            </ul>
                        </div>
                        <div className={s.studyProgramItem}>
                            <div className={s.studyProgramItemHeader}>
                                <div>4</div>
                                <p>Проект</p>
                            </div>
                            <ul className={s.studyProgramItemBody}>
                                <li><span>-</span> Базы данных (postgreSql, Oracle DB, MySql)</li>
                                <li><span>-</span> Миграция данных liquibase</li>
                                <li><span>-</span> Maven, Gradle</li>
                                <li><span>-</span> Kafka, Rabbit</li>
                                <li><span>-</span> Docker</li>
                                <li><span>-</span> Git</li>
                                <li><span>-</span> Junit, Mockito</li>
                                <li><span>-</span> Взаимодействие с внешними системами</li>
                                <li><span>-</span> WebClient, RestTemplate</li>
                                <li><span>-</span> Jira</li>
                                <li><span>-</span> Confluence</li>
                                <li><span>-</span> Swagger</li>
                            </ul>
                        </div>
                        <div className={s.studyProgramItem}>
                            <div className={s.studyProgramItemHeader}>
                                <div>5</div>
                                <p>Подготовка к собеседованиям</p>
                            </div>
                            <ul className={s.studyProgramItemBody}>
                                <li><span>-</span> Проверка знаний по всем темам и тестовые задания</li>
                                <div className={s.studyProgramArrow}><ArrowRight/></div>
                                <li><span>-</span> Проработка вопросов с реальных собеседований</li>
                                <div className={s.studyProgramArrow}><ArrowRight/></div>
                                <li><span>-</span> Помощь в составлении конкурентного резюме</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <img src="/src/images/Ivan.jpg" alt=""/>
                <div className={s.bodyBlock}>
                    <p className={s.bodyTitle}>Отзывы</p>
                    <div className={s.studentReviews}>
                        {studentsArr.map((item, index) => (
                            <div className={s.studentReview}>
                                {(getStudentReviewsPos(index) && !isMobileMiddle) && (<div className={s.studentReviewInfo}>
                                    <div className={s.studentIcon}><img src={item.image} alt={item.name}/></div>
                                    <div className={s.studentInfo} style={getStudentsStyles(index)}>
                                        <p className={s.studentName}>{item.name}, {item.age}</p>
                                        <p className={s.company}>{item.company}</p>
                                    </div>
                                </div>)}
                                <div className={s.studentReviewTextBlock}>
                                    {isMobileMiddle && (<div className={s.studentInfoTablet}><p style={{ border: "none", width: "100%", textAlign: "start", lineHeight: "40px" }} className={s.studentName}>{item.name}, {item.age}</p><p className={s.company}>{item.company}</p></div>)}
                                    <p className={s.studentReviewText}>{item.review}</p>
                                    <button onClick={() => setReview(item)} className={s.readMore}>Читать дальше...
                                    </button>
                                </div>
                                {(!getStudentReviewsPos(index) && !isMobileMiddle) && (<div className={s.studentReviewInfo}>
                                    <div className={s.studentIcon}><img src={item.image} alt={item.name}/></div>
                                    <div className={s.studentInfo} style={getStudentsStyles(index)}>
                                        <p className={s.studentName}>{item.name}, {item.age}</p>
                                        <p className={s.company}>{item.company}</p>
                                    </div>
                                </div>)}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={s.bodyBlock}>
                    <div className={s.bottomBanner}>
                        <div className={s.bottomBannerInfo}>
                            <div className={s.bottomBannerTextBlock}>
                                <p className={s.bottomBannerTitle}>Оставь заяку для поступления</p>
                                <p className={s.bottomBannerSubTitle}>Если у тебя есть вопросы о формате или ты не
                                    знаешь,
                                    что выбрать, оставь свой контакт — мы свяжемся с тобой, чтобы ответить на все
                                    вопросы.</p>
                            </div>
                            <button onClick={() => setIsEnroll(true)} className={s.bottomBannerBtn}>Поступить</button>
                        </div>
                        {!isMobileMiddle &&
                            <div className={s.bottomBannerIcon}><HomepageBottomBannerIcon size={getBottomBannerSize()}/>
                            </div>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomepageLayout;