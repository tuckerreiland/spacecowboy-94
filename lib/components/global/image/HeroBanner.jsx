import { cn } from "@/lib/utils";
import Link from "next/link";
import NavButton from "../navbar/NavButton";

const HeroBanner = ({src, title, href, content}) => {
  return (
    <div className={cn(
      'w-screen',
      // TODO: h-[calc(100vh-${header margin})]
      'h-[calc(100vh-48px)]',
      'relative',
      'overflow-hidden'
    )}>
      <Link
        href={href}
        className={cn()}
      >
        <img
          src={src}
          alt="Hero Banner"
          sizes="100vw"
          className={cn(
            'w-full',
            'h-auto',
            'max-h-screen',
            'col-start-1',
            'row-start-1',
          )}
        />
      </Link>
      <div
        className={cn(
          'absolute',
          'flex',
          'flex-col',
          'z-20',
          'p-10',
          'top-[40vh]',
          'lg:max-w-md'
        )}
      >
        <h2
          className={cn(
            'text-3xl'
          )}
        >{title}</h2>
        <p>{content}</p>
        <NavButton
          href={href}
          style={'w-full text-center'}
          name={href.split('/')[0]==='shop'?'SHOP NOW':'EXPLORE'}
        />
      </div>
    </div>
  )
};

export default HeroBanner
