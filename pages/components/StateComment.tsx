import ListItem from "@mui/material";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
export type NotificationRowProps = {
  name: string;
  // icon:string
  notine: string;
};

// eslint-disable-next-line react-hooks/rules-of-hooks
// const companies = ["Google", "Mozilla", "Microsoft"];
const App = () => {
  const notification = [
    { name: "salto", notine: "私もこのアプリケーション使って見たいです" },
    { name: "yamada", notine: "素晴らしい！" },
    { name: "suzuki", notine: "いい作品ですね" },
  ];
  return notification.map((notice, index) => {
    // indexの追加
    return <Cat name={notice.name} notine={notice.notine} key={index} />; // keyの追加
  }); // keyの追加
};
const Cat = (props: {
  name:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
  notine:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
    | null
    | undefined;
}) => {
  return (
    <li className="border-2 border-y-gray-300 text-center">
      {props.name}はあなたに「{props.notine}」と返信しました！
    </li>
  );
};
