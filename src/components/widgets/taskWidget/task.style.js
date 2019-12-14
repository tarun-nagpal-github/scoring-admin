import styled from "styled-components";
const TaskWidgetWrapper = styled.div`
  .message-card {
    background: white;
    .message-header {
      font-size: 20px;
      font-weight: 600;
      padding: 20px 24px;
    }

    .task-icons {
      font-size: 14px;
      i {
        cursor: pointer;
      }
    }

    .message {
      font-size: 12px;
    }

    .show-more {
      font-weight: 600;
      cursor: pointer;
    }

    .message-list {
      color: rgba(0, 0, 0, 0.54);
      font-size: 14px;
      .list-container {
        border-top: 1px solid rgba(0, 0, 0, 0.1);
      }
    }

    .profie-image {
      width: 41px;
      height: 41px;
      border-radius: 50%;
    }
  }
`;

export default TaskWidgetWrapper;
