
import Link from 'next/link'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayuot } from '../components/layouts/MainLayuot'



export default function AboutPage() {
  return (
   
    <>
      <h1>About Page</h1>
        <h1 className={'title'}>
        Ir a <Link href="/">Home</Link>
        </h1>

        <div className={'description'}>
          <p>
            Get started by editing&nbsp;
            <code className={'code'}>pages/about.jsx</code>
          </p>
        </div>
    </>
  )
}

AboutPage.getLayout = function getLayout (page: JSX.Element){
  return (
    <MainLayuot>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayuot>
  )
}