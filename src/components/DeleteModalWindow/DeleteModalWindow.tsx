import React from 'react';
import './DeleteModalWindow.scss';
import { IoIosClose } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';

interface DeleteModalWindowProps {
  title: string;
  description?: string;
  photo?: string;
  onClose: () => void;
  onConfirm: () => void;
  type: string;
}

const DeleteModalWindow: React.FC<DeleteModalWindowProps> = ({
  title,
  description,
  photo,
  onClose,
  onConfirm,
  type,
}) => {
  const getHeader = () => {
    return type === 'приход'
      ? 'Ви впевнені, що хочете видалити це надходження?'
      : 'Ви впевнені, що хочете видалити цей товар?';
  };

  return (
    <div className="modal">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="close" onClick={onClose}>
          <IoIosClose size={20} />
        </div>
        <h4>{getHeader()}</h4>
        {type !== 'приход' && (
          <div className="product-info">
            <div className="green-circle"></div>
            <img src={photo} alt={title} className="product-photo" />
            <div>
              <p className="product-title">{title}</p>
              <p className="product-description">{description}</p>
            </div>
          </div>
        )}
        <div className="button-content">
          <button className="cancel" onClick={onClose}>
            Скасувати
          </button>
          <button className="delete" onClick={onConfirm}>
            <MdDelete className="delete-icon" /> Видалити
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModalWindow;
