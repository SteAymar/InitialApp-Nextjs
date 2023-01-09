import * as React from 'react';
import Link from "next/link"
import { useRouter } from "next/router"

const style: React.CSSProperties={
    color:"#0070f3",
    textDecoration: "underline",
    
}

interface Props{
  text:string,
  href:string,

}

export const ActiveLink: React.FC<Props> = ({text, href}) => {
   
    const {asPath} = useRouter()

  return (
    <Link href={href} style={ asPath === href ? style : undefined}>
        {text}
    </Link>
  )
}
