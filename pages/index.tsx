import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Homepage } from "./components/Homepage";

//test data
const myData = {
    name: "me",
    icon: "https://cdn.wikirby.com/8/81/Kirby_JP_Twitter_Old_Icon.jpg"
}

const imgUrls: string[] = [ 
	"https://i.pinimg.com/originals/0a/27/db/0a27dbe83c29987309b7895e83fee2f0.png",
	"https://nintendosoup.com/wp-content/uploads/2022/08/Kirbodreambuffet-icon.jpg"
]
const Articles = [
	{
		title: "art.1",
		image: imgUrls[0],
		at: "2023/01/21",
		by: {
			name: "user1",
			icon: "null"
		},
		urls: ["l", "n", "k"]
	},
	{
		title: "art.2",
		image: imgUrls[1],
		at: "2023/01/22",
		by: {
			name: "user2",
			icon: "null"
		},
		urls: ["u", "r", "l"]
	}
];
//tastdata

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body style={{margin: 0, minHeight: "100vh"}}>
                <Homepage userData={myData} Articles={Articles}/>
            </body>
        </div>
    );
};

export default Home;
