import {IReportFields} from "../models/account";
import {IOfferFields} from "../models/offers";
import Alisa from '../images/Alisa.jpg'
import Veronika from '../images/Veronika.jpg'
import Ivan from '../images/Ivan.jpg'
import Alexey from '../images/Alexey.jpg'
import {IAboutProductItem, IFAQItem, IReviewItem, IWhatYourGetItem} from "../models/common";

import WhatYourGetIcon1 from '../images/WhatYourGetIcons/WhatYourGetIcon1.png'
import WhatYourGetIcon2 from '../images/WhatYourGetIcons/WhatYourGetIcon2.png'
import WhatYourGetIcon3 from '../images/WhatYourGetIcons/WhatYourGetIcon3.png'
import WhatYourGetIcon4 from '../images/WhatYourGetIcons/WhatYourGetIcon4.png'

import AboutProductItemIcon1 from '../images/AboutProductItcons/AboutProductItemIcon1.png'
import AboutProductItemIcon2 from '../images/AboutProductItcons/AboutProductItemIcon2.png'
import AboutProductItemIcon3 from '../images/AboutProductItcons/AboutProductItemIcon3.png'
import AboutProductItemIcon4 from '../images/AboutProductItcons/AboutProductItemIcon4.png'

type ScreenTypes = "tablet" | "mobileSmall" | "mobileMiddle" | "mobile";

export const SCREENS: Record<ScreenTypes, string> = {
    tablet: "(max-width: 1280px)",
    mobile: "(max-width: 900px)",
    mobileMiddle: "(max-width: 600px)",
    mobileSmall: "screen and (max-width: 425px)",
};

export const reportInputFieldsInitialState: IReportFields = {
    reportDate: '',
    studyingTime: '',
    workDone: '',
    problems: '',
}

export const offerFieldsInitialState: IOfferFields = {
    offerDate: '',
    amount: '',
    companyName: '',
}

export const studentReviews: IReviewItem[] = [
    {
        name: "Алиса",
        age: "24 года",
        image: Alisa,
        company: `Устроилась в компанию "РЭЦ"`,
        review: "Прошла курс Java-разработчика и уже полгода работаю в айти-компании с доходом 200 тысяч. В программирование ушла из творческой сферы и начинала с полного нуля. Было достаточно сложно перестроить мышление, учитывая программу курса, где ментор направляет тебя, а не разжевывает каждую тему. В начале, конечно, это выбивало из колеи (да и не только в начале :)), ведь в школе и институте был совершенно другой подход. А тут новая тема или задача — нужно быстро вкатываться, все пробовать на практике и самостоятельно изучать материал, а не сидеть и слушать долгие лекции, ведь на работе никто не будет ждать, пока ты во всем разберешься. Ментор много помогал, объяснял непонятные моменты, но самое важное — дал умение быстро соображать, самостоятельно искать информацию, уметь общаться, задавать вопросы и понимать, что от тебя требуется. Обучение проходила онлайн, с ментором общались через телеграмм и созванивались, когда появлялись вопросы или сдавала ревью. На этапе проекта ежедневно проводились короткие собрания — дейли, где с другими учениками обсуждали, что было сделано за день. Обучение прошла за 4 месяца. И, наверное, прошла все стадии от отрицания до любви к этой профессии, хоть путь и был сложным, с большим обилием слез. А творчеством сейчас занимаюсь как хобби)"
    },
    {
        name: "Иван",
        age: "21 год",
        image: Ivan,
        company: `Устроился в компанию "СПБ Биржа"`,
        review: "Проработав полгода в айти, я понял, что почти не получил никакого опыта, процессы в компании меня не устраивают, а ЗП не соответствует ожиданиям. Устраиваться на новую работу с таким багажом было бы трудно, поэтому я пошел на обучение. Созвонился с ментором, мы обсудили ситуацию и решили в ускоренном темпе закрепить всю теорию и перейти на этап разработки проекта. Я попросил давать больше код-ревью и сложных задач, участвовать в планировании архитектуры. Обсуждали все на общих дейли. Готовясь к собеседованиям, обсудили многие интересные моменты: кафку, веб-флакс, взаимодействие сервисов друг с другом. Ментор давал много дополнительного материала, который потом разбирался. В течение курса подтянул скорость печати. Обучение заняло полгода, т. к. я параллельно работал. В конце курса две недели активно проходил собеседования, после каждого из них мы с наставником обсуждали интересные вопросы, которые мне попались, а также само собеседование в целом. Сильно помогло решение практических задач по ходу курса, ведь на собеседованиях давали лайвкодинг или проводили короткое код-ревью. И вот я устроился в новую компанию! Быстро втягиваюсь в процессы и чувствую себя гораздо уверенней, темп разработки стал в разы быстрее — это и было моей целью, когда приходил на курс, кроме того, мой доход вырос с 140 до 230 тысяч."
    },
    {
        name: "Алексей",
        age: "26 лет",
        image: Alexey,
        company: `Устроился в компанию "СБЕР"`,
        review: "Учился вместе с одним из менторов в универе, но, пока кто-то строил карьеру, я получал диплом и готовился к поступлению в магистратуру)\n" +
            "Программированием увлекался со школы и думал идти в разработку. Друг предложил пойти на обучение, я был только за. В программировании не первый день, да и условие оплаты обучения после трудоустройства было привлекательным. Обучение проходил 7 месяцев, первый блок прошел легко: делал задания, скидывал ментору, получал фидбек. При сдаче ревью созванивались, подробно обсуждали тему. Из необычного — сначала была практика с задачами, а потом подробное обсуждение, но мне кажется, программирование — это про практику и умение быстро находить решение. Минимум теории и максимум практики. Это не курс, который ты растягиваешь на два года, спокойно попивая чаек, — здесь другая динамика. Ментор максимально заинтересован устроить каждого ученика на работу. Постоянные дедлайны в итоге помогли собраться и планировать время выполнения. На проекте начали с простого круда, после работали с БД, хибером, кэшем 2 уровня, секьюрити, постепенно усложняли функционал, проводили код-ревью, были задачи на исправление багов в чужом коде, на общих дейли каждый день обсуждали проделанную работу, вносили предложения, обсуждали непонятные места. Ментор был всегда на связи, помогал с вопросами. Очень помог собраться, подготовил и направил. Особенно интересно было на этапе собеседований, т. к. обсуждали не просто теорию, а говорили, например, о паттернах проектирования, архитектуре и общении между микросервисами. Одной из непростых для меня задач была постоянная тренировка речи, но на собесах это сильно помогло. Устроиться, как по взмаху волшебной палочки, конечно, сразу не получилось. После каждого собеседования кратко обсуждал его с ментором. В конце дня созванивались, подробно обсуждали, что было интересного или что не ответил, и вот, спустя три недели, я пополнил ряды java-разработчиков."
    },
    {
        name: "Вероника",
        age: "20 лет",
        image: Veronika,
        company: `Устроилась в компанию "ВТБ"`,
        review: "Поступала в универ, особо не зная, чем хочу заниматься. На 4 курсе поняла, что не хочу работать по профессии (училась на материаловеда), а как начали проходить практику, осознала, что нужно быстро что-то изучить, чтобы не остаться без работы после получения диплома. Начала искать варианты, но всё требовало вложения денег и было сопряжено с рисками прогореть. Я подрабатывала со второго курса, делая лабы сокурсникам, репетиторствовала, но чем-то серьезным не занималась. Друг посоветовал пойти на обучение, оплата которого была после трудоустройства, да и профессия востребована. Решила попробовать, но в программировании была полным нулем. Наставник посоветовал пройти несколько уроков на джавараш, чтобы понять, нужно ли оно мне, отвечал на вопросы, если было что-то непонятно. Мне понравилось, решила продолжить обучение и подписала договор. Было трудно, т. к. не получалось быстро воспринимать информацию и приходилось тратить намного больше времени на изучение, что не предусмотрено быстрым темпом курса. Наставник подкидывал дополнительные задачи, чтобы я смогла со всем разобраться, был всегда на связи (общались через телеграмм и созвоны), объяснял сложные моменты. Конечно, приходилось очень много гуглить самостоятельно. Часто могла потратить целый день, выясняя проблему, когда оказывалось, что в программе просто не хватало одной строчки. И это с учетом, что пользоваться дебаггером учат сразу! Перед сдачей диплома взяла перерыв на месяц, но старалась делать что-то каждый день, присутствовала на созвонах с другими участниками и решала задачки на литкоде. В результате уверенно защитила диплом и продолжила обучение на курсе. Когда все этапы были пройдены, я вышла на подготовку к собеседованиям. Память у меня очень хорошая, но рассказываю плохо, над этим пришлось поработать. Было много созвонов, где мы просто обсуждали пройденные и понятные темы, чтобы я научилась излагать свои мысли. Уже больше года работаю программистом, получаю 250 тысяч, чувствую себя уверенно и планирую расти дальше."
    }
]

export const aboutProductItems: IAboutProductItem[] = [
    {
        text: "Интенсивная подготовка с ментором",
        image: AboutProductItemIcon4
    },
    {
        text: "Опыт в реальном проекте",
        image: AboutProductItemIcon2
    },
    {
        text: "Поддержка во время работы",
        image: AboutProductItemIcon3
    },
    {
        text: "Гарантированное трудоустройство",
        image: AboutProductItemIcon1
    },
]

export const whatYourGetItems: IWhatYourGetItem[] = [
    {
        title: "Менторство:",
        text: "Ментор — это не педагог. Большая часть обучения нацелена на самообучение с полным контролем со стороны ментора. Наша задача — направлять, давать дополнительные задачи и материалы для успешного освоения материала.",
        image: WhatYourGetIcon1
    },
    {
        title: "Мотивация и поддержка:",
        text: "На протяжении обучения вы будете постоянно взаимодействовать с ментором. Любые трудности будут решаться вместе. После трудоустройсва мы никуда не пропадем, постоянная поддержка гарантируется.",
        image: WhatYourGetIcon4
    },
    {
        title: "Контроль знаний:",
        text: "Мы предъявляем высокие требования к каждому этапу обучения, поэтому будут постоянные проверки знаний и решений. Только таким образом у нас с вами получится добиться желаемого результата.",
        image: WhatYourGetIcon2
    },
    {
        title: "Подготовка к собеседованиям:",
        text: "Индивидуальный подход к каждому ученику при подготовке к интервью, исправление недоработок, создание и отработка критических напряженных ситуаций для получения наиболее выгодного предложения на выходе.",
        image: WhatYourGetIcon3
    },
]

export const FAQItems: IFAQItem[] = [
    {
        title: "Мне 40 лет, возможно ли поступить на курс?",
        text: "Да, зависит от твоей вовлеченности и способности уделять примерно 20 часов в неделю (больше — лучше)."
    },
    {
        title: "Сколько длится обучение?",
        text: "Зависит от твоей предыдущей подготовки. Например, с нуля до трудоустройства мы ориентируемся на 12 месяцев, но самый быстрый ученик справился за 4 месяца!"
    },
    {
        title: "Что будет, если я не смогу устроиться?",
        text: "Хоть такое и маловероятно, но по договору ты нам ничего не будешь должен. Обучение по сути станет бесплатным."
    },
    {
        title: "Сколько я буду платить после трудоустройства?",
        text: "За наши труды и риски мы берем 15% от зарплаты в течение 2 лет."
    },
    {
        title: "Что делать, если на работе я столкнусь с трудностями с решением поставленных задач?",
        text: "С нашей стороны ты получишь поддержку в течение года с момента трудоустройства, а значит, трудности мы будем преодолевать вместе!"
    },
]