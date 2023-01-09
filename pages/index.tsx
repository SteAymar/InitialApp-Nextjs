
import Link from 'next/link'
import { MainLayuot } from '../components/layouts/MainLayuot'



export default function HomePage() {
  return (
    <MainLayuot>
      <h1>Home Page</h1>
        <h1 className={'title'}>
          Ir a <Link href="/about">About</Link>
        </h1>

        <div className={'description'}>
          <p>
            Get started by editing&nbsp;
            <code className={'code'}>pages/index.jsx</code>
          </p>
        </div>
    </MainLayuot>
  )
}
