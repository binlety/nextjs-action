import { getAllPostIds, getPostData } from '@/utils/test'


export default function Post({ postData }) {
  return (
    <div>
      {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
    </div>
  )
}


export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}