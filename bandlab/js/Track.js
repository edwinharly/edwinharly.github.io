const Track = ({
    trackTitle,
    handlePlay,
}) => (
    <div className='Track__container card'>
        <div>{trackTitle}</div>
        <button className='btn playBtn' onClick={handlePlay}>Play</button>
    </div>
)