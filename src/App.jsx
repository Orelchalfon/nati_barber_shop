import { motion } from 'framer-motion'
import './App.css'
import { proj1, proj2, proj3, proj4, proj5, proj6, proj7, proj8, proj9, proj10, proj11, proj12, proj13 } from './assets/images'
import noneBgLogo from './assets/images/noneBgLogo.png'
import Carousel from './Components/Carousel/Carousel'


const images = [
  { id: 1, src: proj1, alt: 'proj1' },
  { id: 2, src: proj2, alt: 'proj2' },
  { id: 3, src: proj3, alt: 'proj3' },
  { id: 4, src: proj4, alt: 'proj4' },
  { id: 5, src: proj5, alt: 'proj5' },
  { id: 6, src: proj6, alt: 'proj6' },
  { id: 7, src: proj7, alt: 'proj7' },
  { id: 8, src: proj8, alt: 'proj8' },
  { id: 9, src: proj9, alt: 'proj9' },
  { id: 10, src: proj10, alt: 'proj10' },
  { id: 11, src: proj11, alt: 'proj11' },
  { id: 12, src: proj12, alt: 'proj12' },
  { id: 13, src: proj13, alt: 'proj13' },
]
function App()
{

  return (
    <>
      <div dir='rtl'>
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
        <section className='container'>
          <h2>Gallery</h2>
          <Carousel images={images} />
        </section>
        {/* <footer className='container'>asd</footer> */}
      </div>
    </>
  )
}

export default App
