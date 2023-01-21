export type NotificationRowProps = {
    name: string;
    // icon:string
    notine: string;
  };
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const companies = ["Google", "Mozilla", "Microsoft"];
  const App = () => {
    const notification = [
      { name: "salto", notine: "like" },
      { name: "yamada", notine: "share" },
      { name: "suzuki", notine: "like" },
    ];
    return notification.map((notice, index) => {
      // indexの追加
      return <Cat name={notice.name} notine={notice.notine} key={index} />; // keyの追加
    }); // keyの追加
  };
  const Cat = (props) => {
    return (
      <li>
        {props.name}は{props.notine}を与えました！
      </li>
    );
  };
  
  export default App;
  