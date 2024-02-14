import { cn } from "@/lib/utils";
import Link from "next/link";
import NavButton from "../navbar/NavButton";
import HeroByline from "../../blog/PostPage/Byline/HeroByline";

const HeroBanner = ({className, src, title, titleSize, href, content, byline, textPosition, textBackgroundColor, textColor}) => {
  return (
    <div className={cn(
      'w-screen',
      // TODO: h-[calc(100vh-${header margin})]
      'h-[calc(100vh-48px)]',
      'relative',
      'overflow-hidden',
      className
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
            'lg:w-full',
            'lg:h-auto',
            'h-full',
            'w-auto',
            'max-h-full',
            'col-start-1',
            'row-start-1',
            'object-cover'
          )}
        />
      </Link>
      <div
        className={cn(
          'absolute',
          'flex',
          'flex-col',
          'z-20',
          'p-6',
          'lg:p-10',
          'top-[45vh]',
          'max-w-[280px]',
          'lg:max-w-md',
          'rounded-md',
          'lg:left-10',
          `${textPosition?textPosition:null}`,
          `${textBackgroundColor?textBackgroundColor:null}`,
          `${textColor?textColor:null}`
        )}
      >
        <h2
          className={cn(
            'text-3xl',
            titleSize
          )}
        >{title}</h2>
        {content?
          <p
            className={cn(
              'hidden',
              'lg:block',
              
            )}
          >{content}</p>
        :
          null
        }
        {byline?
          <HeroByline
            className={cn()}
            byline={byline}/>
        :
        null}
        {href?
          <NavButton
            href={href}
            style={`w-full text-center rounded-sm ${textColor?textColor:null}`}
            name={href.split('/')[0]==='shop'?'SHOP NOW':'EXPLORE'}
          />
        :
          null
        }
      </div>
    </div>
  )
};

export default HeroBanner
