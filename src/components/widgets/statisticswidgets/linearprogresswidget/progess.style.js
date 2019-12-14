import styled from "styled-components";
const LinearProgressWrapper = styled.div`
  .linear-widget-card {
    background-color: ${props => props.background};
    color: ${props => (props.dark ? "#ffffff" : "#000000")};
    transition: all 0.2s;
    border: 1px solid rgba(0, 0, 0, 0.125);
    .linear-widget-header {
      padding: 10px 16px 6px;
    }
    .linear-widget-card-info {
      font-size: 13px;
    }
    .react-sweet-progress-symbol {
      color: ${props => (props.dark ? "#ffffff" : "#000000")};
      font-family: "muli-semi-bold";
    }
  }
`;

export default LinearProgressWrapper;
