import styled from 'styled-components'

export const PodcasterStyle = styled.div`
    min-height: 79vh;
    width: 100%;
`
export const PodcastEpisodesWrapper = styled.div`
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;

    .title{
        font-weight: bolder;
        font-size: 25px;
    }

    .list-header{
        font-weight: bolder;
        font-size: 15px;
        display: flex;
        height: 50px;
        justify-content: space-between;
        align-items: flex-end;
        padding-bottom: 5px;
        border-bottom: solid 1px #ddd;
        margin-bottom: 10px;

        .name{
            width: 70%;
        }
    }

    .list-item{
        font-size: 15px;
        padding: 5px;
        border-bottom: solid 1px #ddd;
        height: 50px;
        justify-content: space-between;
        align-items: center;
        display: flex;
        width: 100%;
        transition: ease-in-out all 0.5s;
        &:hover{
            background-color: #eee;
        }
        a{
            display: flex;
            justify-content: space-between;
            width: 100%;
            color: #3675a7;
        }

        .name{
            width: 70%;
        }
    }
`

export const PodcastEpisodesAudioWrapper = styled.div`
    margin-top: 15px;
    padding: 15px;
    box-shadow: 0 0 5px #ccc;

    h3{
        margin-bottom: 20px;
    }

    p{
        margin-bottom: 20px;
        font-size: 14px;
        line-height: 22px;
        font-style: italic;
    }

    audio{
        width: 100%;
        background: #888;
        padding: 14px;
    }
    .go-back{
        display: flex;
        justify-content: flex-end;
        a{
            color: #3675a7;
        }
    }
`