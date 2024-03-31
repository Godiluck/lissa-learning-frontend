import React, {useState} from 'react';
import s from './style.module.scss'
import HomePageBannerIconDesktop from '../../images/HomePageBannerIcons/HomePageBannerIconDesktop.png';
import FAQItem from "./components/FAQItem/FAQItem";
import HomepageBottomBannerIcon from "../../svgs/HomepageBottomBannerIcon";
import EnrollModalChild from "./components/EnrollModalChild/EnrollModalChild";
import useMediaQuery from "../../hooks/useMediaQuery";
import {aboutProductItems, FAQItems, SCREENS, studentReviews, whatYourGetItems} from "../../utils/consts";
import HomepageBannerIconMobile from "../../svgs/HomepageBannerIconMobile";
import HomepageBannerIconTablet from "../../svgs/HomepageBannerIconTablet";
import ArrowDown from "../../svgs/ArrowDown";
import ReviewModal from "./components/ReviewModal/ReviewModal";
import {IReviewItem} from "../../models/common";

const HomepageLayout = ({ setIsEnroll }) => {
    const [review, setReview] = useState<IReviewItem | null>(null)

    const isTablet = useMediaQuery(SCREENS.tablet)
    const isMobileMiddle = useMediaQuery(SCREENS.mobile)

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
                <img src={HomePageBannerIconDesktop} alt="HomePageBannerIconDesktop"/>
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
            <ReviewModal onClose={() => setReview(null)} isModal={review !== null} review={review}/>
            <div className={s.wrapper}>
                <div className={s.topBanner}>
                    <div className={s.bannerInfo}>
                        <div className={s.bannerTextBlock}>
                            <span className={s.bannerHeader}>Стань <span style={{color: "#35b8be"}}>java</span> разработчиком</span>
                            <span className={s.bannerSubHeader}>Займи место в IT и плати за обучение после трудоустройства. <br/> Минимальная гарантированная зарплата — <span style={{color: "#35b8be"}}>150 тысяч рублей</span>. </span>
                        </div>
                        <button onClick={() => setIsEnroll(true)} className={s.bannerBtn}>Начать обучение</button>
                    </div>
                    {getHomepageBanner()}
                </div>
                <div className={s.bodyBlock} style={{ background: "#def7fe" }}>
                    <p className={s.bodyTitle}>Обучение проходит дистанционно и нацелено на результат!</p>
                    <p className={s.bodySubTitle}>Наши с тобой цели совпадают – мы получим оплату за обучение только
                        после твоего трудоустройства.</p>
                    <div className={s.aboutProductItems}>
                        {aboutProductItems.map(item => (
                            <div className={s.aboutProductItem}>
                                <div className={s.aboutProductItemIcon}>
                                    <img src={item.image} alt={item.text}/>
                                </div>
                                <p className={s.aboutProductItemText}>
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={s.bodyBlock} id="advantages">
                    <p className={s.bodyTitle}>
                        что вы получите от нас:
                    </p>
                    <div className={s.whatYouGetItems}>
                        {whatYourGetItems.map(item => (
                            <div className={s.whatYouGetItem}>
                                <div className={s.whatYouGetHeader}>
                                    <div className={s.whatYouGetItemIcon}>
                                        <img src={item.image} alt={item.text}/>
                                    </div>
                                    <p className={s.whatYouGetTitle}>{item.title}</p>
                                </div>
                                <p className={s.whatYouGetText}>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={s.bodyBlock} style={{ background: "#def7fe" }}>
                    <div className={s.bodyTitleWrapper}>
                        <p className={s.bodyTitle}>часто задаваемые вопросы</p>
                    </div>
                    <div className={s.FAQItems}>
                        {FAQItems.map(item => (
                            <FAQItem title={item.title} bodyText={item.text}/>
                        ))}
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
                                <li>Примитивные типы</li>
                                <li>ООП</li>
                                <li>Исключения</li>
                                <li>Дженерики</li>
                                <li>Коллекции</li>
                                <li>Stream API</li>
                                <li>Maven</li>
                                <li>Slf4j</li>
                                <li>Lombok</li>
                            </ul>
                        </div>
                        <div className={s.studyProgramItem}>
                            <div className={s.studyProgramItemHeader}>
                                <div>2</div>
                                <p>Hibernate</p>
                            </div>
                            <ul className={s.studyProgramItemBody}>
                                <li>ORM, JPA</li>
                                <li>SQL</li>
                                <li>Основы работы с БД</li>
                                <li>Конфигурация</li>
                                <li>Получение данных из БД</li>
                                <li>Обновление, удаление и сохранение данных</li>
                                <li>Аннотации</li>
                                <li>Транзакции</li>
                                <li>Уровни изоляции</li>
                            </ul>
                        </div>
                        <div className={s.studyProgramItem}>
                            <div className={s.studyProgramItemHeader}>
                                <div>3</div>
                                <p>Spring</p>
                            </div>
                            <ul className={s.studyProgramItemBody}>
                                <li>Принципы REST</li>
                                <li>Dependency Injection, Inversion of control</li>
                                <li>Конфигурация</li>
                                <li>Аннотации (bean, component и тд)</li>
                                <li>Архитектура приложения</li>
                                <li>Spring security</li>
                                <li>Jwt</li>
                                <li>Управление транзакциями (аннотации, propagation и тд)</li>
                                <li>Разработка тестового приложения</li>
                            </ul>
                        </div>
                        <div className={s.studyProgramItem}>
                            <div className={s.studyProgramItemHeader}>
                                <div>4</div>
                                <p>Проект</p>
                            </div>
                            <ul className={s.studyProgramItemBody}>
                                <li>Базы данных (postgreSql, Oracle DB, MySql)</li>
                                <li>Миграция данных liquibase</li>
                                <li>Maven, Gradle</li>
                                <li>Kafka, Rabbit</li>
                                <li>Docker, portainer</li>
                                <li>Git</li>
                                <li>Junit, Mockito</li>
                                <li>Взаимодействие с внешними системами</li>
                                <li>WebClient, RestTemplate</li>
                                <li>Jira</li>
                                <li>Confluence</li>
                                <li>Swagger</li>
                            </ul>
                        </div>
                        <div className={s.studyProgramItem}>
                            <div className={s.studyProgramItemHeader}>
                                <div>5</div>
                                <p>Подготовка к собеседованиям</p>
                            </div>
                            <ul style={{ listStyleType: "decimal" }} className={s.studyProgramItemBody}>
                                <li style={{ marginBottom: 0 }}>Проверка знаний по всем темам и тестовые задания</li>
                                <div className={s.studyProgramArrow}><ArrowDown/></div>
                                <li style={{ marginBottom: 0 }}>Проработка вопросов с реальных собеседований</li>
                                <div className={s.studyProgramArrow}><ArrowDown/></div>
                                <li style={{ marginBottom: 0 }}>Помощь в составлении конкурентного резюме</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={s.bodyBlock} style={{ background: "#def7fe" }} id="reviews">
                    <p className={s.bodyTitle}>Отзывы</p>
                    <div className={s.studentReviews}>
                        {studentReviews.map((item, index) => (
                            <div className={s.studentReview}>
                                {(getStudentReviewsPos(index) && !isMobileMiddle) && (<div className={s.studentReviewInfo}>
                                    <div className={s.studentInfo} style={getStudentsStyles(index)}>
                                        <p className={s.studentName}>{item.name}, {item.age}</p>
                                        <p className={s.company}>{item.company}</p>
                                    </div>
                                    <div className={s.studentIcon}><img src={item.image} alt={item.name}/></div>
                                </div>)}
                                <div className={s.studentReviewTextBlock}>
                                    {isMobileMiddle && (<div className={s.studentInfoTablet}><p style={{ border: "none", width: "100%", textAlign: "start", lineHeight: "40px" }} className={s.studentName}>{item.name}, {item.age}</p><p className={s.company}>{item.company}</p></div>)}
                                    <p className={s.studentReviewText}>{item.review}</p>
                                    <button onClick={() => setReview(item)} className={s.readMore}>Читать дальше...
                                    </button>
                                </div>
                                {(!getStudentReviewsPos(index) && !isMobileMiddle) && (<div className={s.studentReviewInfo}>
                                    <div className={s.studentInfo} style={getStudentsStyles(index)}>
                                        <p className={s.studentName}>{item.name}, {item.age}</p>
                                        <p className={s.company}>{item.company}</p>
                                    </div>
                                    <div className={s.studentIcon}><img src={item.image} alt={item.name}/></div>
                                </div>)}
                            </div>
                        ))}
                    </div>
                </div>
                <div className={s.bodyBlock} id="contacts">
                    <div className={s.bottomBanner}>
                        <div className={s.bottomBannerInfo}>
                            <div className={s.bottomBannerTextBlock}>
                                <p className={s.bottomBannerTitle}>Оставь заявку для поступления</p>
                                <p className={s.bottomBannerSubTitle}>Если у тебя есть вопросы о формате, оплате или условиях, оставь свой контакт — мы свяжемся с тобой, чтобы ответить на все
                                    вопросы.</p>
                            </div>
                            <EnrollModalChild onClose={() => {}}/>
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