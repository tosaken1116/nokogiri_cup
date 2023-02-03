import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();
    if (router.isReady) {
        router.push("/Home");
    }
}
