import ListItem from "../ListItem/ListItem";
import './List.scss';

type ListPropsType = {
  listArray:Array<number>;
}

const List = (props:ListPropsType) => {
  const { listArray }  = props;
  return (
    <ul className="list">
      {listArray.map((elem,index) => {
        return <ListItem timeLeft={elem} key={index} orderNumber={index} />;
      })}
    </ul>
  )
};

export default List;