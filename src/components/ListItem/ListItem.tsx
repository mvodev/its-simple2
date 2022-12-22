import './ListItem.scss';

export type ListItemType = {
  timeLeft: number;
  orderNumber:number;
}

const ListItem = (props: ListItemType) => {
  const {timeLeft,orderNumber} = props;

  const listItem = 
    <li className={"list-item"}>
      <span className="list-item__order">{orderNumber + 1}</span>
      <span className="list-item__timer">{`Оставшееся время: ${timeLeft}`}</span>
    </li>;
  return listItem;
};

export default ListItem;