import styled from "styled-components";

export const NotificationBlock = styled.div`
  cursor: pointer;

  padding: 16px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border: 1px solid #e9ecef;
  min-width: 320px;
  max-width: 400px;
  transition: all 0.2s ease;
  font-family:
    system-ui,
    -apple-system,
    sans-serif;
       &:hover {
    transform: translateY(-2px);
    boxshadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }
`;
export const NotificationBlockH3 = styled.h3`
  fontsize: 16px;
  fontweight: 600;
  color: #1a1a1a;
  marginright: 12px;
`;
export const NotificationBlockButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  fontsize: 20px;
  color: #999;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  alignitems: center;
  justifycontent: center;
  borderradius: 4px;
  transition: all 0.2s;
  fontweight: bold;
`;
export const NotificationBlockP = styled.p`
  margin: 8px 0 0 0;
  fontsize: 14px;
  color: #666;
  lineheight: 1.5;
`;
