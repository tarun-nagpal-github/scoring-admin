import styled from "styled-components";

const DatePickerWrapper = styled.div`
    .date-picker-block {
        .roe-card-style {
            height: 100%;
        }
    }
    .react-datepicker__input-container {
        width: 100%
    }
    .custom-datepicker {
        border-radius: 6px !important;
        font-size: 14px !important;
        border: 1px solid #ddd !important;
        padding: 8px;
        width: 100%;
        &:focus {
            border: 1px solid #9a9a9a !important;
            box-shadow: none !important;
            outline: 0;
        }
    }

    .react-datepicker-wrapper {
        width: 100%;
        .react-datepicker__input-container {
            width: 100%;
        }
    }
    
    .custom-calender-class {
        .react-datepicker__triangle {
            border-bottom-color: rgba(0,0,0,.035);
        }
        .react-datepicker__header {
            background: rgba(0,0,0,.035);
            .react-datepicker-time__header {
                color: rgba(0,0,0,.87) !important; 
            }
            .react-datepicker__current-month {
                color: rgba(0,0,0,.87) !important; 
            }
            .react-datepicker__day-names {
                .react-datepicker__day-name {
                    color: rgba(0,0,0,.87) !important; 
                }
            }
        }
        .react-datepicker__month {
            .react-datepicker__week {
                .react-datepicker__day--selected {
                    background: #563c91
                    color: white 
                }
            }
        }
    }
`;

export default DatePickerWrapper;
