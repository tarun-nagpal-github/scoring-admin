import styled from 'styled-components';
const MiniLineChartWrapper = styled.div`    
    .bar-widget-card-info {
        font-size: 13px;
    }

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
`;

export default MiniLineChartWrapper