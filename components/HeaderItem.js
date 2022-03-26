import { useRouter } from 'next/router';

function HeaderItem({ title, Icon }) {

    const router = useRouter();

    return (
        <div className="flex flex-col items-center w-12 sm:w-20 cursor-pointer group hover:text-white" onClick={ () => router.push('/')}>
            <Icon className="h-8 mb-1 group-hover:animate-bounce"/>
            <p className="tracking-widest uppercase opacity-0 group-hover:opacity-100">{title}</p>
        </div>
    )
}

export default HeaderItem
