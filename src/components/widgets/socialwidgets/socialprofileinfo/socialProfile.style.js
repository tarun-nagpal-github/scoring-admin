import styled from 'styled-components';
const SocialProfileInfoWrapper = styled.div`
   .widget-container {
       .profile-widget-image {
           img {
                width: 100px;
                height: 100px;
                object-fit: cover;
                border-radius: 50%;
           }
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
    }
`;

export default SocialProfileInfoWrapper