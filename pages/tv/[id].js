import Head from "next/head";
import { useRouter } from 'next/router'
import Header from "../../components/Header";

function ItemDetails() {
    console.log(data);

    const router = useRouter();

    return (
        <div className="">
            <Head>
                <title>Single Page</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Header */}
            <Header />
            {router.query.id}
            TV Single Page
        </div>
    )
}

export default ItemDetails

// export async function getStaticPaths() {

// }

export async function getServerSideProps( context ) {
 
    const { id } = context.query;

    console.log(id);

    // const request = await fetch(
    //     `https://api.themoviedb.org/3/movie/${context.params.id}?api_key=245f87f040961c37cd1e49531bfa2f72`
    // );

    // const data = await request.json();

    return {
        props: {
            
        },
    };
    
}