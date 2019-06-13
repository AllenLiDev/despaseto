import React from 'react';

const ElementIcon = (props) => {
    switch (props.type) {
        case 1:
            return <i className="fas fa-font p-2" title="Text" />
        case 2:
            return <i className="fas fa-link p-2" title="Link" />
        case 3:
            return <i className="fas fa-file p-2" title="File" />
        case 4:
            return <i className="fas fa-eye p-2" title="Visible" onClick={() => props.updateElement(props.id)} />
        case 5:
            return <i className="fas fa-caret-up p-2" title="Move Up" onClick={() => props.moveElement('up', props.id)} />
        case 6:
            return <i className="fas fa-caret-down p-2" title="Move Down" onClick={() => props.moveElement('down', props.id)} />
        case 7:
            return <i className="fas fa-edit p-2" title="Edit" />
        case 8:
            return <i className="fas fa-trash p-2" title="Remove" onClick={() => props.removeElement(props.id)} />
        case 9:
            return <i className="fas fa-eye-slash p-2" title="hidden" onClick={() => props.updateElement(props.id)} />
        default:
            return <i className="fas fa-exclamation-circle p-2" title="Error" />
    }
}

export default ElementIcon;