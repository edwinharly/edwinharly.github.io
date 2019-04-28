const Track = ({
    trackTitle,
    handlePlay,
    handleRemove,
}) => (
    <div className='Track__container card'>
        <div>{trackTitle}</div>
        <button className='btn playBtn' onClick={handlePlay}>Play</button>
        <button className='btn deleteBtn' onClick={handleRemove}>Delete</button>
    </div>
)