import { getSortedPostsData } from '@/utils/test.js'
import cn from 'classnames'
import styles from './index.module.css'

function About({ allPostsData , type = 'success' }) {
  return (
   <>
    <ul >
    {allPostsData.map(({ id, date, title }) => (
      <li  key={id}>
        {title}
        <br />
        {id}
        <br />
        {date}
      </li>
    ))}
  </ul>
   <div className={cn(styles.moduleCss, styles.otherCss)}>About platformGoods</div>
   <div className={cn({[styles.success]: type === 'success',[styles.error]: type === 'error'})}>
   lalalal
   </div>
   </>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default About