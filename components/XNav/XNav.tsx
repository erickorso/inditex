"use client";
import XH1 from "../Atoms/XH1";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { XNavStyle } from "./style";
import Image from "next/image";

const XNav = () => {

  const path = usePathname();

  const isHome = (path: string) => path === '/' || path === '/podcast' 

  return <XNavStyle>
            <div className="logo">
                <Image src={'/logo.jpg'} width={256} height={155} alt="logo"/>
            </div>
            {
                isHome(path) ? 
                    <XH1 title="Podcaster" />
                    :(
                        <Link href={'/'}>
                            <XH1 title="Podcaster" />
                        </Link>
                    )
            }
        </XNavStyle>;
};

export default XNav;
