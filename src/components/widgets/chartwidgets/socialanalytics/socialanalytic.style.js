import styled from 'styled-components';
const SocialAnalyticWrapper = styled.div`

    .profile-widget-image {
        img {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: 50%;
            border: 3px solid white;
        }
    }

    .backImage {
        background: linear-gradient(0deg,rgba(0,0,0,0.9),rgba(0,0,0,0)),url(${props => props.banner});
        background-size: cover;
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
            display: flex;
            align-items: center;
            justify-content: center;
        }
   }

   .info-block {
        border-bottom: 1px solid rgba(230, 231, 239, 0.85);
    }   
`;

export default SocialAnalyticWrapper