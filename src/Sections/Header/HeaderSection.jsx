import { motion } from 'framer-motion'
import noneBgLogo from '../../assets/images/noneBgLogo.png'
const HeaderSection = () =>
{
    return (
        <header >
            <motion.img
                initial={{ scale: 1.1, y: '-100vw' }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', delay: 0.5 }}
                whileHover={{ scale: [1.1, 1, 1.1, 1] }}


                src={noneBgLogo} alt="Logo2" className="logo" />
            <div className="content">
                <motion.h1

                    initial={{ y: '-100vw' }}
                    animate={{ y: 0 }}
                    transition={{ type: 'spring', }}
                >Welcome To NatiBarberShop</motion.h1>

                <motion.p initial={{ x: '-100vw' }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', delay: 0.5 }}
                >
                    שלום שמי[שם החבר] ואני מספר עם חמש שנות ניסיון בתחום .אני מתמחה בתספורות גברים וילדים במהלך השנים צברתי נסיון עם מגוון רחב של לקוחות. במספרה שלי ,אנו מציעים חוויה מקצועית ואישית ,תוך שימת דגש על הבנת צרכי הלקוח והתאמת התספורת המושלמת לכל אחד ואחתץ אני מאמין שתסםורת מעולה יכולה לשפר משמעותית את הביטחון העצמי ולהפוך את היום שלך לטוב יותר כאן,ב[שם המספרה] אנו מחוייבים לאיכות ושירות ללא פשרות ,כל זאת באווירה חמה ומזמינה .אני מזמין אתכם להגיע ולחוות את ההבדל בהצמכם !
                </motion.p>
            </div>

        </header>
    )
}

export default HeaderSection