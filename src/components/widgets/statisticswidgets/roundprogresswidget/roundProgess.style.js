import styled from "styled-components";
const RoundProgressWrapper = styled.div`
  .round-widget-card {
    transition: all 0.2s;
    border: 1px solid rgba(0, 0, 0, 0.125);
    background: ${props => props.background};
    color: ${props => (props.dark ? "#ffffff" : "#000000")};
    .round-widget-header {
      padding: 16px;
    }
    .round-widget-card-info {
      font-size: 13px;
    }
    .react-sweet-progress-symbol {
      color: ${props => (props.dark ? "#ffffff" : "#000000")};
    }
  }
`;

export default RoundProgressWrapper;
