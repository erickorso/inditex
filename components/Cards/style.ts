import styled from 'styled-components';
import XH2 from "@/components/Atoms/XH2"
import Image from "next/image"

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  text-decoration: none;
  min-height: 150px;
  max-width: 250px;
  margin-bottom: 20px;
  transition: ease-in-out all 0.5s;

  &:hover{
    box-shadow: 0 2px 10px #3675a7;

    div>img{
        border: solid #3675a7 10px;
        border-radius: 50%;
    }
  }
`;

export const CardImageWrapper = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  margin-top: -70px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const CardImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: solid #3675a7 0px;
  transition: ease-in-out all 0.5s;
`;

export const CardTitle = styled(XH2)`
  margin-top: 10px;
  font-size: 18px;
  font-weight: bold;
`;

export const CardSubtitle = styled.p`
  margin-top: 5px;
  font-size: 14px;
  color: #666666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

export const CardXlImageWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  text-decoration: none;
  min-height: 150px;
  max-width: 300px;
  margin-bottom: 20px;
  transition: ease-in-out all 0.5s;
  margin: 10px;
  img{
    transition: ease-in-out all 0.5s;
    border-radius: 10px;
    margin-bottom: 15px;
  }

  h2,p, h3{
    margin: 10px 0;
    text-align: left;
    width: 100%;
  }
  p{
    margin-top: 0;
    text-align: justify;
    font-size: 14px;
    line-height: 22px;
    font-style: italic;
  }

  hr{
    border: solid #ddd 1px;
    width: 100%;
    margin: 10px 0;
  }

  &:hover{
    box-shadow: 0 2px 10px #3675a7;

    img{
        border: solid #3675a7 5px;
        border-radius: 50%;
    }
  }
`;