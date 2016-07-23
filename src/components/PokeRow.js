import React from 'react';
import {Button, Icon, Modal, Input, Row} from 'react-materialize';

const paddingLeft = {
    paddingLeft: "2rem"
}

export const PokeRow = (props) => (
    <tr>
        <td style= {paddingLeft}>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.typeOne}</td>
        <td>{props.typeTwo}</td>
        <td>
            <a className="btn-floating btn-small waves-effect waves-light modal-trigger blue"
                onClick={ n => {openEditModal(props.modalEdit)} }>
                <i className="material-icons">mode_edit</i>
            </a>
        </td>
        <td>
            <a className="btn-floating btn-small waves-effect waves-light red">
                <i className="material-icons">delete</i>
            </a>
        </td>
    </tr>
)

const openEditModal = (modalId) => $(`#${modalId}`).openModal();
export default PokeRow;