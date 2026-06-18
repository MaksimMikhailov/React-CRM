import {
  NotificationBlock,
  NotificationBlockButton,
  NotificationBlockH3,
  NotificationBlockP,
} from "./CustomNotification.styled";

interface ICustomNotification {
  title: string;
  message: string;
  onclick: () => void;
  ondissmiss(): void;
  type: "success" | "danger";
}
export const CustomNotification = ({
  title,
  message,
  onclick,
  ondissmiss,
  type,
}: ICustomNotification) => {
  return (
    <NotificationBlock className={type} onClick={onclick}>
      <div>
        <NotificationBlockButton
          onClick={(e) => {
            e.stopPropagation();
            ondissmiss();
          }}
        >
          X
        </NotificationBlockButton>
        <NotificationBlockH3>{title}</NotificationBlockH3>
      </div>
      <NotificationBlockP>{message}</NotificationBlockP>
    </NotificationBlock>
  );
};
