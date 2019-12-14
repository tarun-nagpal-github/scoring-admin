import styled from 'styled-components';
const SocialQuoteWrapper = styled.div`

    .quote {
        position: relative;
        &:before {
            left: 0px;
            content: open-quote;
            position: absolute;
            top: -23px;
            font-size: 4em;
        }
    }

    .backImage {
        background: linear-gradient(0deg,rgba(0,0,0,0.9),rgba(0,0,0,0)),url(${props => props.banner});
        background-size: cover;
    }

    .profile-widget-image {
        img {
            width: 40px;
            height: 40px;
            object-fit: cover;
            border-radius: 50%;
        }
    }

    .card-action {
        justify-content: flex-end;
    }

`;

export default SocialQuoteWrapper