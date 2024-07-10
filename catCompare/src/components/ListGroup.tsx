import { useState } from 'react';
import { MouseEvent } from 'react';
import { Chart } from 'chart.js';
interface Props {
  items: string[];
  heading: string;
  // (item:string) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // destructured array that returns
  // arr[0] variable (selectedIndex)
  // arr[1] updater function

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            <img src={item} className="img-fluid overflow-hidden" width="200px" alt="cat"></img>
          </li>
        ))}
      </ul>

      {/* <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul> */}
    </>
  );
}

export default ListGroup;
