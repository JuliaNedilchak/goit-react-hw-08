import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUser);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  const onOpenModal = () => {
    setIsModalOpen(true);
  };

  const onLogout = () => {
    dispatch(logout());
    onCloseModal();
  };

  return (
    <div>
      <div className={css.loginName}>
        <span>Hi, {userData.name}</span>
        <button onClick={onOpenModal} type="button">
          Logout
        </button>
      </div>
      {isModalOpen && (
        <div>
          <h3>Log out?</h3>
          <button type="button" onClick={onLogout}>
            Yes
          </button>
          <button type="button" onClick={onCloseModal}>
            No
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
