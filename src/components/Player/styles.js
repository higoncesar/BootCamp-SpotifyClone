import styled from 'styled-components';

export const Container = styled.div`
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #282828;
  padding: 12px;

  @media (max-width: 550px) {
    justify-content: space-around;
  }
`;

export const Current = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 550px) {
    display: none;
  }

  img {
    width: 48px;
    height: 48px;
  }

  div {
    margin-left: 12px;
    display: flex;
    flex-direction: column;

    span {
      font-size: 13px;
      color: #fff;
    }

    small {
      font-size: 11px;
      color: #b3b3b3;
      margin-top: 5px;
    }
  }
`;

export const Progress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;

  button {
    background: transparent;
    border: 0;
    margin: 0 15px;
  }
`;

export const Time = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  span {
    font-size: 11px;
    color: #b3b3b3;
  }
`;
export const ProgressSlider = styled.div`
  @media (max-width: 900px) {
    width: 300px;
  }

  @media (max-width: 650px) {
    width: 200px;
  }

  @media (max-width: 550px) {
    width: 150px;
    margin: 0 10px;
  }

  width: 500px;
  margin: 0 15px;
`;

export const Volume = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  margin-right: 20px;

  img {
    margin-right: 5px;
  }
`;
