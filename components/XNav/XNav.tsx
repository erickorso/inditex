import XH1 from "@/components/Atoms/XH1";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { XNavStyle } from "./style";
import Image from "next/image";

const XNav = () => {

    const path: any = usePathname();

    const isHome = (path: string) => path === '/' || path === '/podcast'

    return <XNavStyle>
        <div className="logo">
            <Image src={'/logo.jpg'} width={256} height={155} alt="logo" priority={true} />
        </div>
        {
            isHome(path) ?
                <XH1 title="Podcaster" />
                : (
                    <Link href={'/'}>
                        <XH1 title="Podcaster" />
                    </Link>
                )
        }
    </XNavStyle>;
};

export default XNav;
