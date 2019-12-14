import styled from "styled-components";
const BarChartWidgetWrapper = styled.div`
  .bar-widget-card {
    transition: all 0.2s;
    border: 1px solid rgba(0, 0, 0, 0.125);
    background: ${props => (props.background ? props.background : "#ffffff")};
    color: ${props => (props.dark ? "#ffffff" : "#000000")};
    .bar-widget-card-info {
      font-size: 13px;
    }
  }
`;

export default BarChartWidgetWrapper;
