import React from 'react';
import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
`;

const LoadingCircle = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border-top: #3675a7 solid 5px;
    border-bottom: #3675a7 solid 5px;
    border-left: #3675a7 solid 5px;
    border-right: #3675a7 solid 1px;
    position: relative;

    &:after{
        content: '';
        position: absolute;
        width: 15px;
        height: 15px;
        top: 10px;
        border-radius: 50%;
        border-top: #83b1d6  solid 8px;
        border-bottom: #83b1d6  solid 8px;
        border-left: #83b1d6  solid 2px;
        border-right: #83b1d6 solid 2px;
        animation: ${spinAnimation} 0.7s infinite linear;
    }
    &:before{
        content: '';
        position: absolute;
        top: 14px;
        width: 15px;
        height: 20px;
        border-radius: 50%;
        border: 1px solid transparent;
        border-top: #3675a7 solid 8px;
        border-bottom: #3675a7 solid 8px;
        border-left: transparent solid 2px;
        border-right: transparent solid 2px;
        animation: ${spinAnimation} 0.8s infinite linear;
    }
`;

const LoadingAnimation = () => {
  return (
    <LoadingContainer>
      <LoadingCircle data-testid="loading-animation" />
    </LoadingContainer>
  );
};

export default LoadingAnimation;
