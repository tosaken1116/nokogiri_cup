import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();
export const userStatus = atom({
    key: "user_status",
    default: {
        userId: "",
        isLogin: false,
        userName: "",
    },
    effects_UNSTABLE: [persistAtom],
});
