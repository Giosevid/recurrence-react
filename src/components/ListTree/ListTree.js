import React, {Fragment} from 'react';
import FolderIcon from '@material-ui/icons/Folder';
import './ListTree.scss';

export default function ListTree({list}) {
  return list ?(
    <div>
      {list.map((element, index) => (
        <ul key={`${element}${index}`}>
          <div className="wrapperList">
            <FolderIcon />
            <span className="text">{element.name}</span>
          </div>
          {element?.files?.length > 0 && <ListTree list={element.files} />}
        </ul>
      ))}
    </div>
  ) : <Fragment/>
}
