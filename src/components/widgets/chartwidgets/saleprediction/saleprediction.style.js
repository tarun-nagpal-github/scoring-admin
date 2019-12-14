import styled from "styled-components";

const SalePredictionWrapper = styled.div`
  .dot-indicator {
    width: 10px;
    height: 10px;
    border-radius: 100%;
  }
  .dot-indicator.dot-indicator-sm {
    width: 6px;
    height: 6px;
  }
  .middle-block {
    position: absolute;
    top: 50%;
    right: 0;
    left: 0;
    margin: auto;
    transform: translateY(-50%);
  }
`;

export default SalePredictionWrapper;
