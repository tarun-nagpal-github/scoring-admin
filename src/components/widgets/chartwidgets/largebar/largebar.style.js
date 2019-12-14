import styled from 'styled-components';
const BarChartWidgetWrapper = styled.div`    
    .action-container {
        border: 1px solid rgba(230, 231, 239, 0.85);
        .message-action {
            border-right: 1px solid rgba(230, 231, 239, 0.85);
        }
        .action {
            flex-grow: 1;
            padding: 13px 10px;
            text-transform: uppercase;
        }
    }

    .view-all {
        span {
            font-family: "muli-semi-bold";
            font-size: 13px;
        }
    }
`;

export default BarChartWidgetWrapper