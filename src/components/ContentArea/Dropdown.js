import React from 'react';
import ElementIcon from './ElementIcon';

const Dropdown = (props) => {
    return (
        <div className="btn-group">
            <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <ElementIcon type={'plus'} />
            </button>
            <div className="dropdown-menu">
                <div className="dropdown-item" onClick={()=> props.returnFunction('heading')}>Header</div>
                <div className="dropdown-item" onClick={()=> props.returnFunction('font')}>Text</div>
                <div className="dropdown-item" onClick={()=> props.returnFunction('link')}>Link</div>
                <div className="dropdown-item" onClick={()=> props.returnFunction('image')}>Image</div>
                {/* <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Separated link</a> */}
            </div>
        </div>
    )
}

export default Dropdown;