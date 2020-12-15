import React from 'react';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import './SearchPage.css';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow
            image="https://yt3.ggpht.com/a/AATXAJwTrqkd2h57fkHXuOQBAVOksgREc0NKd5ig9Lal1Q=s176-c-k-c0x00ffffff-no-rj"
            channel="ForrestKnight"
            verified
            subs="20K"
            noOfVideos={678}
            description="It is good to be back! I've refocused myself to artificial intelligence, where in this video we take on Tetris. I've coded up a genetic algorithm, heuristics specific to Tetris, and of course the ai itself. It'll train itself by manipulating the heuristic values and improving every generation - basic machine learning."
            />

            <hr/>

            <VideoRow
            views="11M"
            subs="700K"
            description="Learn to code"
            timestamp="20 seconds ago"
            channel="ForrestKnight"
            title="Top 5 Programming Languages to Learn in 2020"
            image="http://i3.ytimg.com/vi/7uE8g7vQ_jE/hqdefault.jpg"
            />
        </div>
    )
}

export default SearchPage
