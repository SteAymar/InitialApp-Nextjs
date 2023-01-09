
import Link from 'next/link'
import { MainLayuot } from '../../components/layouts/MainLayuot'



export default function PricingPage() {
  return (
   
    
    <MainLayuot>

      <h1>Pricing Page</h1>
        <h1 className={'title'}>
        Ir a <Link href="/">Home</Link>
        </h1>

        <div className={'description'}>
          <p>
            Get started by editing&nbsp;
            <code className={'code'}>pages/pricing.jsx</code>
          </p>
        </div>
    </MainLayuot>
    
  )
}

